const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);
//Length
console.log(shopping.length) //5

//Accessing
console.log(shopping[0]); //returns "bread"
shopping[0] = "Eggs"; // replace "bread" with "eggs"
console.log(shopping);

//multidimensional
const random = ["tree", 795, [0, 1, 2]];
console.log(random[2][2]);

//indexOf
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1

//push
// const cities = ["Manchester", "Liverpool"];
// cities.push("Cardiff");
// console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
// cities.push("Bradford", "Brighton");
// console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

//unshift() - to add an item to the start of the array
// cities.unshift("Edinburgh");
// console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]

//pop() - To remove the last item from the array
// const cities = ["Manchester", "Liverpool"];
// cities.pop();
// console.log(cities); // [ "Manchester" ]
// const cities = ["Manchester", "Liverpool"];
// const removedCity = cities.pop();
// console.log(removedCity); // "Liverpool"

//shift - To remove the first item from an array
// const cities = ["Manchester", "Liverpool"];
// cities.shift();
// console.log(cities); // [ "Liverpool" ]

//splice - If you know the index of an item, you can remove it from the array using 
// const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
// const index = cities.indexOf("Liverpool");
// if (index !== -1) {
//   cities.splice(index, 1);
// }
// console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]

// const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
// const index = cities.indexOf("Liverpool");
// if (index !== -1) {
//   cities.splice(index, 2);
// }
// console.log(cities); // [ "Manchester", "Carlisle" ]

// spread operator
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

//flat
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//Array.isArray and Array.from
console.log(Array.isArray("Aakash"))
console.log(Array.from("Aakash"))
console.log(Array.from({name: "Aakash"})) //empty array

//Array.of
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

const products = [
    'Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99',
  ];

for (const product of products) {
    const subArray = product.split(':')
    // console.log(subArray);
    const name = subArray[0];
    const price = Number(subArray[1]);
    // console.log(price);
    const itemText = `${name} - $${price}` ;
    console.log(itemText);
    
    
    
    
    
}
