let arr = [1, 2, 2, 3, 4, 4, 5, 5, 6];
const set = new Set();
console.log(typeof set);
arr.forEach(val => {
    return set.add(val)
});

for (let x of set) {
   console.log(x);
}

