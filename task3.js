function isValid(s) {
    const stack = [];
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];
    const bracketPairs = {')': '(', '}': '{', ']': '['};

    for (let i = 0; i < s.length; i++) {
        if (openBrackets.includes(s[i])) {
            stack.push(s[i]);
        } else if (closeBrackets.includes(s[i])) {
            const lastBracket = stack.pop();
            if (bracketPairs[s[i]] !== lastBracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


console.log(isValid("()({})([])")); 
console.log(isValid("()[]{}")); 
console.log(isValid("(](](]")); 
console.log(isValid("([)](]")); 
console.log(isValid("{[]}")); 