/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     const stack = [];
    const bracketMapping = {')': '(', '}': '{', ']': '['};

    for (let char of s) {
        if (bracketMapping[char]) {
            const topElement = stack.pop() || '#';
            if (bracketMapping[char] !== topElement) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;


};

module.exports = { isValid };


