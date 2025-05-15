//reduce
const myNums = [1,2,3,4]
// const total = myNums.reduce(function(acc, curr){
//     return acc + curr
// },0)
// console.log(total);


const sum = myNums.reduce((acc, curr) => {
    console.log(`acc: ${acc} and curr: ${curr}`);
    return acc + curr
},0)
console.log(sum);

const shoppingCart = [
    {
        itemName : "JS Course",
        price: 2999
    },
    {
        itemName : "Python Course",
        price: 1999
    },
    {
        itemName : "Mobile Dev Course",
        price: 5999
    },
    {
        itemName : "Data Science Course",
        price: 12999
    },
]
const totalPrice = shoppingCart.reduce((acc,item) => {
    return acc + item.price
}, 0)
console.log(totalPrice);

