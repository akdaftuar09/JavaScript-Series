let score = "33abc"

// score = null  //0
// score = undefined //NaN
// score = true // 1
// score = "Jon" //NaN
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//  let isLoggedIn = "Jon"
 let isLoggedIn = ""
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

 let someNumber = 33
 let stringNumber = String(someNumber)
 console.log(typeof stringNumber);
 
  console.log("1"+ 2 + 2);
  console.log(1 + 2 + "2");
  console.log(+true);
  console.log(+"");
  
  console.log("2" == 2); //true
  console.log("2" === 2); //false as stricly operator checks data type also.
  
  
  
  



