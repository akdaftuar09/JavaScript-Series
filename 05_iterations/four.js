const myObject = {
    js : "JavaScript",
    cpp : "C++",
    py : "Python",
    swift : "Swift by Apple"
}
for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
   
}

const programming = ["js", "py", "c++", "ruby", "java"]
for (const key in programming){
    console.log(key);
    console.log(programming[key]);
    
}