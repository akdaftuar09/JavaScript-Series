//for of
//

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);   
}

const greetings = "Hello World!"
for(const greet of greetings){
    // console.log(greet);  
}

//Maps
const map = new Map()
map.set('IND', "India")
map.set('US', "United States of America")
map.set('AUS', "Australia")
map.set('IND', "India")

// console.log(map);

for (const [key, value]of map) {
    console.log(key, ":-", value);   
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }