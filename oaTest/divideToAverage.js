function check(img) {
    let res = [];
    img[0].forEach((item) => {
        res.push([]);
    })
    console.log(res)
    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[i].length; j++) {
            let up;
            let left;
            let down;
            let right;
            let upLeft;
            let upRight;
            let downleft;
            let downRight;
            let count = 0;

            if (img[i - 1]) {
                up = img[i - 1][j] ? img[i - 1][j] : 0;
                count++;
                if (img[i - 1][j - 1]) {
                    upLeft = img[i - 1][j - 1];
                    count++;
                } else {
                    upLeft = 0
                }

                if (img[i - 1][j + 1]) {
                    upRight = img[i - 1][j + 1];
                    count++;
                } else {
                    upRight = 0;
                }
            } else {
                up = 0;
                upLeft = 0;
                upRight = 0;
            }
            if (img[i][j - 1]) {
                left = img[i][j - 1];
                count++;
            } else {
                left = 0;
            }
            // left = img[i][j-1] ? img[i][j-1] : 0;
            if (img[i + 1]) {
                down = img[i + 1][j]
                count++;
                if (img[i + 1][j - 1]) {
                    downleft = img[i + 1][j - 1];
                    count++;
                } else {
                    downleft = 0;
                }
                if (img[i + 1][j + 1]) {
                    downRight = img[i + 1][j + 1];
                    count++;
                } else {
                    downRight = 0;
                }
            } else {
                down = 0;
                downRight = 0;
                downleft = 0;

            }
            if (img[i][j + 1]) {
                right = img[i][j + 1];
                count++;

            } else {
                right = 0;

            }
            console.log(img[i][j] + " up: " + up + " " + "left: " + left + " " + "down: " + down + " " + "right: " + right + " " + "upLeft: " + upLeft + " " + "upRight: " + upRight + " " + "downleft: " + downleft + " " + "downRight: " + downRight)
            console.log(count)

            res[i][j] = (up + left + down + right + upLeft + upRight + downRight + downleft) / count;
        }
    }
    console.log(res)
}

check([
    [1, 4, ],
    [7, 10]
]);

// check([
//     [1, 4, 6, 8],
//     [7, 10, 9, 2],
//     [11, 1, 3, 9]
// ]);