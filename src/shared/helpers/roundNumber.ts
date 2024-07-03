export function roundNumber(num: number, decimalPlace = 100) {
    return Math.round((num + Number.EPSILON) * decimalPlace) / decimalPlace
}