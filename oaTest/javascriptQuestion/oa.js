const _ = require('lodash');

/*

Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 6 and 8 have a common ancestor of 4.

         14  13
         |   |
1   2    4   12
 \ /   / | \ /
  3   5  8  9
   \ / \     \
    6   7     11

parentChildPairs1 = [
    [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
    [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9]
]

no parents:
[1, 2, 13, 14] 

one parent:
[4, 5, 7, 8, 11, 12]


*/

const parentChildPairs1 = [
    [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
    [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9]
];

// const findParent = input => {
//   if(input === null || input.length === 0) return [];
  
//   let result = [],
//       noParent = [],
//       oneParent = [],
//       n = input.length,
//       map = {};
  
//   for(let i = 0; i < n; i++) {
//     let val = input[i];
//     if(!map[val[0]]) {
//       map[val[0]] = 0;
//     } 
//     if(!map[val[1]]) {
//       map[val[1]] = 1;
//     }
//     else if(map[val[1]]) {
//       map[val[1]]++;
//     }
//   }
  
//   for(let key in map){
//     if(map[key] === 0) {
//       noParent.push(parseInt(key));
//     }
//     else if(map[key] === 1) {
//       oneParent.push(parseInt(key));
//     }
//   }  
  
//   console.log(noParent)
//   console.log(oneParent)

// }

// console.log(findParent([
//     [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
//     [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9]
// ]));


/*

Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 6 and 8 have a common ancestor of 4.

         14  13
         |   |
1   2    4   12
 \ /   / | \ /
  3   5  8  9
   \ / \     \
    6   7     11

parentChildPairs1 = [
    [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
    [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9]
]

Write a function that takes the graph, as well as two of the individuals in our dataset, as its inputs and returns true if and only if they share at least one ancestor.

Sample input and output:

console.log(hasCommonAncestor(parentChildPairs1, 3, 8)); // false
console.log(hasCommonAncestor(parentChildPairs1, 5, 8)); // true
console.log(hasCommonAncestor(parentChildPairs1, 6, 3)); // true
console.log(hasCommonAncestor(parentChildPairs1, 6, 9)); // true
console.log(hasCommonAncestor(parentChildPairs1, 1, 3)); // false
console.log(hasCommonAncestor(parentChildPairs1, 7, 11)); // true
console.log(hasCommonAncestor(parentChildPairs1, 6, 5)); // true
console.log(hasCommonAncestor(parentChildPairs1, 5, 6)); // true
console.log(hasCommonAncestor(parentChildPairs1, 14, 7)); // true

*/


/*
{ '1': [],
  '2': [],
  '3': [1,2],
  '4': [14],
  '5': 1,
  '6': 2,
  '7': 1,
  '8': [4],
  '9': 2,
  '11': 1,
  '12': 1,
  '13': 0,
  '14': 0 }

3, 8

3: [1, 2]
8: [4, 14]


*/

const findParent = (input, val1, val2) => {
  if(input === null || input.length === 0) return [];
  
  let result = [],
      noParent = [],
      oneParent = [],
      n = input.length,
      map = {};
  
  for(let i = 0; i < n; i++) {
    let val = input[i];
    if(!map[val[0]]) {
      map[val[0]] = 0;
    } 
    if(!map[val[1]]) {
      map[val[1]] = 1;
    }
    else if(map[val[1]]) {
      map[val[1]]++;
    }
  }
  
  for(let key in map){
    if
  }  
  
  console.log(map)
  // console.log(noParent)
  // console.log(oneParent)

}

console.log(findParent([
    [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
    [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9]
], 3 , 8));
