"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptAES = encryptAES;
exports.decryptAES = decryptAES;
const crypto_1 = require("crypto");
const util_1 = require("util");
const scryptAsync = (0, util_1.promisify)(crypto_1.scrypt);
async function encryptAES(text, password) {
    const iv = (0, crypto_1.randomBytes)(16);
    const key = (await scryptAsync(password, 'salt', 32));
    const cipher = (0, crypto_1.createCipheriv)('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'base64url');
    encrypted += cipher.final('base64url');
    return `${iv.toString('base64url')}:.:${encrypted}`;
}
async function decryptAES(encrypted, password) {
    console.log("ENCRYPTED: ", encrypted);
    let parts = encrypted.split(":.:");
    // Преобразуем iv из base64 в Buffer
    const iv = Buffer.from(parts[0], 'base64url');
    // Генерируем ключ (должен быть тот же, что и при шифровании)
    const key = (await scryptAsync(password, 'salt', 32));
    // Создаем дешифратор
    const decipher = (0, crypto_1.createDecipheriv)('aes-256-cbc', key, iv);
    // Дешифруем содержимое
    let decrypted = decipher.update(parts[1], 'base64url', 'utf8');
    decrypted += decipher.final('utf8');
    console.log("DECRYPTED: ", decrypted);
    return decrypted;
}
