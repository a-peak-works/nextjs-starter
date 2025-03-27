/**
 * Generates a short UUID string consisting of 4 hexadecimal characters.
 */
export const getShortUUID = () => {
    return "xxxx".replace(/[x]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        return r.toString(16);
    });
};
