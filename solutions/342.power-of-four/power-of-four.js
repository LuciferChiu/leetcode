/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    return (Math.log10(num) / Math.log10(4)) % 1 == 0
};