//map
const myNums = [1,2,3,4,5,6,7,8,9,10]
// const updateNums= myNums.map((num) => num + 10)
// console.log(updateNums)

// const newNums = [] //using for each
// myNums.forEach((num)=> {
//     newNums.push(num + 10)
// })
// console.log(newNums);

 //Chaining
 const newNums = myNums
                .map((num)=> num * 10)
                .map((num)=> num + 1)
                .filter((num)=> num >= 40)
console.log(newNums);




