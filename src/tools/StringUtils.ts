

export default class StringUtils {
    static format(str: string, ...args: any[]): string {
        return str.replace(/{(\d+)}/g, (match, index) => args[index] || match);
    }
}