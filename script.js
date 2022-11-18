`use strict`

// const p = [
//     [1, 0, null],
//     [null, null, null],
//     [null, null, null]
// ]


// let arr = [9, 2, 8, 5];
// let reduceValue = arr.reduce (function (previousValue, item, index, array) {
//     console.log(previousValue);
//     return item + previousValue
// }, 100);

// console.log(reduceValue)

const arr = [
    {
        name: `Ivan`,
        age: 30,
    },
    {
        name: `Ioan`,
        age: 30,
    },
    {
        name: `Iosif`,
        age: 42,
    },
    {
        name: `Ibragim`,
        age: 57,
    },
]

let reduceValue = arr.reduce(function (previousValue, item, index, array) {
    if (previousValue[item.age]) {
        previousValue[item.age].push(item);
    } else {
        previousValue[item.age] = [item];
    }

    return previousValue;
}, {});

{
    30: [{Ivan}, {Ioan}],
    42: [{Iosif}],
    57: [{Ibragim}]
}

console.log(reduceValue)


// let res = {
//     30: [{
//         name: `Ivan`,
//         age: 30,
//     }, {
//         name: `Ioan`,
//         age: 30,
//     }],
//     42: [{
//         name: `Iosif`,
//         age: 42,
//     }],
//     57: [{
//         name: `Ibragim`,
//         age: 57,
//     }]
// }



// let sum = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     let value = arr[i];
//     sum = sum + value;
// }

// console.log(sum)



// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[0]) // arr[i] 9
// }

// for (let i = 1; i < arr.length; i++) {
//     console.log(arr[1]) // arr[i] 2
// }

// for (let i = 2; i < arr.length; i++) {
//     console.log(arr[2]) // arr[i] 8
// }

// for (let i = 3; i < arr.length; i++) {
//     console.log(arr[3]) // arr[i] 8
// }



