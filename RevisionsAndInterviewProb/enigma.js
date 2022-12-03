function enigma(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "#" && str[i] !== "") {
            stack.push(str[i]);
        } else if (str[i] === "#") {
            stack.pop();
        }
    }
    console.log(stack.join(""));
}

function runProgram(input) {
    input = input.trim().split("\n");
    let testCases = parseInt(input[0]);
    let line = 1;
    for (let i = 0; i < testCases; i++) {
        str = input[line++];
        enigma(str);
    }
}

runProgram(`2
ab#d
a#bc`);