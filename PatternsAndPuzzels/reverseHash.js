function reverseHash(N) {
    for (let i = 0; i < N; i++) {
        let str = "";
        for (let j = N - 1; j >= 0; j--) {
            if (j <= i) {
                str += "#";
            } else {
                str += " ";
            }
        }
        console.log(str);
    }
}


reverseHash(4);
