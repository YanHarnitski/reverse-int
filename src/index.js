module.exports = function reverse(n) {
    n = Math.abs(n);
    let toString = String(n);
    let reverseString = toString.split("").reverse().join("");
    let result = Number(reverseString);
    return result;
};
