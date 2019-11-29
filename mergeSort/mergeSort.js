// 

// function gem(item) {
//     for (let i = 0; i < item.length; i++) {
//         if (item[i].length === 0) {
//             item.splice(i, 1)
//         }
//     }
//     return item
// }

// let name = ['rachel', '', 'kevin', '', 'ken'];

// console.log(gem(name));

// function gem(start, range) {
//     let x = start;
//     let dir = 1;
//     return function () {
//         x += dir;
//         if (Math.abs(x - start) >= range) {
//             dir *= -1;
//         }
//         return x;
//     }
// }
// let f = gem(4, 5)
// f();
// f();
// f();
// f();
// f();
// let g = f();
// console.log(g);

const getItemOrder = customer => (...orders) => {
    return orders.filter(order => order.customerId === customer.id)
    .map(order => order.items)
    .reduce((acc, cur) => [...acc, ...cur], []);
}
let customer = {
    name: 'fiddy',
    id: 5
}

const order1 = {id: 1, customerId: 1, items: ['belt']};
const order2 = {id: 2, customerId: 5, items: ['chain', 'deo']};
const order3 = {id: 3, customerId: 5, items: ['grills']};
const order4 = {id: 4, customerId: 2, items: ['pants']};

const w = getItemOrder(customer)(order1, order2, order3, order4)
const x = getItemOrder(customer)([order1, order2, order3, order4])
const y = getItemOrder(customer, order1, order2, order3, order4)
const z = getItemOrder(customer)(order1, order2, order4)

console.log(w);