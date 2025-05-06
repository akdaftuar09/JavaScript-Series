"use strict"; //treat all JS code as newer version

//alert(3 + 3) //Error as we are using nodejs, not browser

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value / empty
// undefined =>
// symbol => unique

// array
let myNameArray = ["Seth", "Roman", "Dean"]
let myNumberArray = [38, 39, 38]
console.log(myNameArray[0]);
console.log(myNumberArray[2]);

// Object
let group = {name: "Shield", championship: 15};
console.log(group);
console.log(group.name);
console.log(group.name = "Justice");

const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"

bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"

//can  update , add or remove properties of an obj declared using const

console.log(typeof "Akash");
console.log(typeof null); //Null is an object
console.log(typeof undefined); // undefined




