// function combine(thing){

//     var flat = [];
//     var item; 
    
    
//     if (thing === {}) {
//       return null;  
//     } else if (thing === []) {
//       return null; 
//     }
    
//     // see if the thing passed into the function is an object?
//     if (!Array.isArray(thing) && typeof thing === 'object') {
//         for (var key in thing) {
//           item = thing[key];
//           if (typeof item === 'object' ) {
//             flat = flat.concat(combine(item));
//           } else {
//             flat = flat.concat(item);
//           }
//         }
//     }
    
//     // see if the item is an array?
//     if (Array.isArray(thing)){
//       for (var i = 0 ; i < thing.length ; i++) {
//           item = thing[i];
//           if (typeof item === 'object' ) {
//               console.log(typeof item);
//             flat = flat.concat(combine(item));
//           } else {
//             flat = flat.concat(item);
//           }
//         }
//     }
    
//     return flat;
//   }

const flatten = arr => {
    var array = [];
    while(arr.length) {
      var value = arr.shift();
      console.log(value);
      if(Array.isArray(value)) {
        // this line preserve the order
        arr = value.concat(arr);
      }
      else if (!Array.isArray(value) && typeof value === 'object') {
          for(let key in value) {
              arr = arr.concat(value[key])
          }
      }
      else {
        array.push(value);
      }
    }
    return array;
  }
  

console.log(flatten([[1], 2, [[3, 4], 5], [[[]]], [[[6]]], 7, 8, {'a': 10, 'b': 11}]));


