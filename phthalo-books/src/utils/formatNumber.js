// export function formatWithCommas(num) {
//     const formatted = new Intl.NumberFormat().format(num);
//     return formatted;
// }

export function formatNumberShort(num) {
    if (num >= 1_000_000) {
        return Math.trunc(num / 1_000_000) + "M+";
    } else if (num >= 1_000) {
        return Math.trunc(num / 1_000) + "K+";
    }
    return num.toString();
}

// Change the number of the function to formatNumber
// create another function named formatNumber that formats a number like 12000000 to 12,000,000