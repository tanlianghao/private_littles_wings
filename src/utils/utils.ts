const rootWidth: number = 360;

export function px2vw(px: number): string {
    const vw: number = px / rootWidth * 100;
    return `${vw}vw`;
}