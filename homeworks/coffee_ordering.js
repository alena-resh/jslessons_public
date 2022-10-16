/* Write the following program:

The client must have a choice of two (or three) types of coffee (your choice).
- Give different names to your types of coffee.
- Set the price of coffee depending on the size of the cup (small, medium, large).
- Display the name, then the recipe of the selected coffee (use variables to change the recipe), and its cost.
- Coffee components do not affect the cost.
*/

let americano = 'Americano'  // set types of coffee
let cappuccino = 'Cappuccino'
let latte = 'Latte'

let small = 'small'// 300 ml set size of coffee
let medium = 'medium'// 400 ml
let large  = 'large' // 500 ml

let priceSmall = '5 $' // set price of coffee
let priceMedium = '10 $'
let priceLarge = '15 $' 

let recipeAmericanoSmall = '1. Put 150 ml of water in the cup \n2. Put 150 ml of coffee in the cup \n3. Stir coffee with a spoon '
let recipeCappuccinoSmall = '1. Put 100 ml of water in the cup \n2. Put 100 ml of coffee in the cup \n3. Put 100 ml of milk in the cup \n4. Stir coffee with a spoon'
let recipeLatteSmall = '1. Put 50 ml of water in the cup \n2. Put 100 ml of milk in the cup \n3. Put 100 ml of coffee in the cup \n4. Put 50 ml of frothed milk in the cup \n5. Stir coffee with a spoon'

let recipeAmericanoMedium = '1. Put 200 ml of water in the cup \n2. Put 200 ml of coffee in the cup \n3. Stir coffee with a spoon'
let recipeCappuccinoMedium = '1. Put 100 ml of water in the cup \n2. Put 200 ml of coffee in the cup \n3. Put 100 ml of milk in the cup \n4. Stir coffee with a spoon'
let recipeLatteMedium = '1. Put 100 ml of water in the cup \n2. Put 150 ml of milk in the cup \n3. Put 100 ml of coffee in the cup \n4. Put 50 ml of frothed milk in the cup \n5. Stir coffee with a spoon'

let recipeAmericanoLarge = '1. Put 250 ml of water in the cup \n2. Put 250 ml of coffee in the cup \n3. Stir coffee with a spoon'
let recipeCappuccinoLarge = '1. Put 100 ml of water in the cup \n2. Put 200 ml of coffee in the cup \n3. Put 200 ml of milk in the cup \n4. Stir coffee with a spoon'
let recipeLatteLarge = '1. Put 100 ml of water in the cup \n2. Put 250 ml of milk in the cup \n3. Put 100 ml of coffee in the cup \n4. Put 50 ml of frothed milk in the cup \n5. Stir coffee with a spoon'

function Coffee(sort, size) {

if (sort == americano && size == small) {
    return `How to prepare a cup of ${americano} ${size} A coffee recipe is: \n ${recipeAmericanoSmall}  \nPrice is ${priceSmall} `
} else if (sort === americano && size === medium) {
    return `How to prepare a cup of ${sort} ${size}\n A coffee recipe is: \n${recipeAmericanoMedium} \n Price is ${priceMedium}`
} else if (sort === americano && size === large) {
    return `How to prepare a cup of ${sort} ${size}\n A coffee recipe is: \n${recipeAmericanoLarge} \n Price is ${priceLarge}`
} else if (sort === cappuccino && size === small) {
    return `How to prepare a cup of ${sort} ${size}\n  A coffee recipe is: \n${recipeCappuccinoSmall}  \n Price is ${priceSmall}`
} else if (sort === cappuccino && size === medium) {
    return `How to prepare a cup of ${sort} ${size}\n A coffee recipe is: \n${recipeCappuccinoMedium} \n Price is ${priceMedium}`
} else if (sort === cappuccino && size === large) {
    return `How to prepare a cup of ${sort} ${size}\n A coffee recipe is: \n${recipeCappuccinoLarge} \n Price is ${priceLarge}`
} else if (sort === latte && size === small) {
    return `How to prepare a cup of ${sort} ${size}\n A coffee recipe is: \n${recipeLatteSmall}  \n Price is ${priceSmall}`
} else if (sort === latte && size === medium) {
    return `How to prepare a cup of ${sort} ${size}\n A coffee recipe is: \n${recipeLatteMedium} \n Price is ${priceMedium}`
} else if (sort === latte && size === large) {
    return `How to prepare a cup of ${sort} ${size}\n A coffee recipe is: \n${recipeLatteLarge}  \n Price is ${priceLarge}`
}
}

console.log(Coffee(cappuccino, large))
console.log(`Please, enjoy your coffee! ;)`)