// write a christmas tree

//      *
//     ***
//    *****
//   *******
//  *********

let n = 5;
let str = ''
for (let i = 1; i <= n; i++)
{
   for (let j = n; j >= i; j--)
{
    str += ' '
}
   for (let k = 1; k <= i; k++)
{
    str += '*' 
}
for (let k = i - 1; k >= 1; k--)
     {
        str += '*'  
     }
str += '\n'
}
console.log(str)

// write a pyramid

// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15


// let row = 5
// let str = ''

// for (let i = 1; i <= row; i++) {
//     let num = i
//     for (let j = 1; j <= i; j++) {
//         str += num + ' ' 
//         num = num + (row - j)
//     } 
//     str += '\n' 
// }
// console.log(str)

