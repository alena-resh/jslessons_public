// Come up with your own cipher, as well as a program that will encode and then decode to it

let str = "Hello world, my name is Alena! I have been learning JavaScript :) ";
let result = []; // arr
let result_2 = ''; // str

for (let i = 0; i < str.length; i++)
{
    result[i] = str[i].charCodeAt(); // encode
}
console.log(result);

for (let i = 0; i < result.length; i++)
{
    result_2 += String.fromCharCode(result[i]); // decode
}
console.log(result_2)