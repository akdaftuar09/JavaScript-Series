const mySym = Symbol("key1")


const JsUser = {
    name: "Akash",
    "full name": "Akash Sinha",
    [mySym]: "mykey1",
    age: 25,
    location: "Patna",
    email: "akash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //freezes any changes made to JsUser
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");   
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);   
}
console.log( JsUser.greeting());
JsUser.greetingTwo();

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "akash",
            lastname: "sinha"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

//merge two objects
//Object.assign()
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //returns all keys in an array
// console.log(Object.values(tinderUser)); //returns all values in an array
// console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));


const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

const band = {
  name: "Coldplay",
  nationality: "British",
  genre: "Alternative Rock",
  members: 4,
  formed: 1996,
  split: false,
  albums: [
    {
      name: "Parachutes",
      released: 2000
    },
    {
      name: "A Rush of Blood to the Head",
      released: 2002
    }
  ]
};

const bandInfo = `Coldplay is a British alternative rock band formed in 1996. They are known for their melodic sound and emotional lyrics. The band is still active today. Their first album, "Parachutes," was released in 2000.`;




