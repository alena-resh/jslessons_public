//Write a calculator with 'If' or 'switch', add possible input errors (/0) or any other

// if 

function calculator(a, b, operator) {

if (operator == '+') 
{
  return a + b
} 
else if (operator == '-')
{
  return  a - b
} 
else if (operator == '*') 
{
  return  a * b
} 
else if (operator == '/') 
{
  if (b == 0) 
  {
      return `'Zero' is not allowed, please, enter another number!`
  } else 
  {
  return result = a / b
  }
} 
else 
{
    return `This operator is not allowed, please, enter another operator!`
}
}
console.log(calculator (6, 10, '*'))


// switch

function calculator(a, b, operator) {

switch (operator) {

case '+': return a + b
break

case '-': return  a - b
break

case '*': return  a * b
break

case '/': switch (b) {
  case 0 : return `'Zero' is not allowed, please, enter another number!`
  break
  default : return result = a / b
} 
break
  
default: return `This operator is not allowed, please, enter another operator!`
}
}
console.log(calculator (10, 5, '/'))
