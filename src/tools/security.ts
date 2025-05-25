import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

interface EncryptionResult {
    iv: string;    
    content: string; 
}

export async function encryptAES(text: string, password: string): Promise<string> {
    const iv = randomBytes(16);
    
    const key = (await scryptAsync(password, 'salt', 32)) as Buffer;
    
    const cipher = createCipheriv('aes-256-cbc', key, iv);
    
    let encrypted = cipher.update(text, 'utf8', 'base64url');
    encrypted += cipher.final('base64url');
    
    return `${iv.toString('base64url')}:.:${encrypted}`;
}

export async function decryptAES(encrypted: string, password: string): Promise<string> {

    let parts = encrypted.split(":.:");

    // Преобразуем iv из base64 в Buffer
    const iv = Buffer.from(parts[0], 'base64url');
    
    // Генерируем ключ (должен быть тот же, что и при шифровании)
    const key = (await scryptAsync(password, 'salt', 32)) as Buffer;
    
    // Создаем дешифратор
    const decipher = createDecipheriv('aes-256-cbc', key, iv);
    
    // Дешифруем содержимое
    let decrypted = decipher.update(parts[1], 'base64url', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}