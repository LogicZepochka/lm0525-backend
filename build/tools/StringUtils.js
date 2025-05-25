"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringUtils {
    static format(str, ...args) {
        return str.replace(/{(\d+)}/g, (match, index) => args[index] || match);
    }
}
exports.default = StringUtils;
