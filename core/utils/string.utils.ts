export class StringUtils {

    static toReadableText(camelCaseText: string): string {
        const result = camelCaseText.replace(/([A-Z])/g, " $1");
        return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
    }
}