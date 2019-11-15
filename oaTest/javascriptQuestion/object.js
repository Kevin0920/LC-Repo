// const object = {
//     a: 1,
//     b: 2,
//     getA() {
//         console.log(this.a);
//         return this;
//     },
//     getA() {
//         console.log(this.b);
//     }
// }

// object.getA()

// const map = {
//     a: {
//         b: {
//             c: 1
//         }
//     }
// }

// const clone = Object.assign({}, map);
// // let newVal = clone.a.b.c = 2
// const deepClone = JSON.parse(JSON.stringify(map))
// console.log(deepClone);

// const obj = {
//     x: 1, 
//     getX() {
//         const that = this;
//         console.log(typeof that);
//         const inner = function() {
//             console.log(that.x);
//         }
//         inner();
//     }
// }

// obj.getX();


let arrayLike = { length: 2, 0: 'a', 1: 'b' };

// // 报错
// for (let x of arrayLike) {
//   console.log(x);
// }

// 正确
for (let x of Array.from(arrayLike)) {
  console.log(x);
}
