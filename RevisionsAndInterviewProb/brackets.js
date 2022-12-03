function bracketsMatch(brackets) {
    let stack = [];
    for (let i = 0; i < brackets.length; i++) {
        if (brackets[i] === "{" || brackets[i] === "(" || brackets[i] === "[") {
            stack.push(brackets[i]);
        } else {
            if (brackets[i] === ")" && stack[stack.length - 1] === "(") {
                stack.pop();
            } else if (brackets[i] === "}" && stack[stack.length - 1] === "{") {
                stack.pop();
            } else if (brackets[i] === "]" && stack[stack.length - 1] === "[") {
                stack.pop();
            }
        }
    }
    // console.log(stack);
    if (stack.length === 0) {
        console.log("Balanced");
    } else {
        console.log("Not Balanced");
    }
}

function runProgram(input) {
    let brackets = input.trim();
    bracketsMatch(brackets);
}

runProgram(`[{()}]`);
runProgram(`{[(]})`)