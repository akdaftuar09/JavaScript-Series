//for each
const programming = ["js", "py", "c++", "ruby", "java"]
// programming.forEach(function(val){
//     console.log(val);     
// })
// programming.forEach((val)=> {
//     console.log(val);    
// })

// programming.forEach((item,index,arr)=>{
//     console.log(item,index,arr);  
// })

const myCoding = [
    {
        language: "JavaScript",
        fileName : "js"
    },
    {
        language: "Python",
        fileName : "py"
    },
    {
        language: "C++",
        fileName : "cpp"
    },
]
myCoding.forEach((item)=>{
    console.log(`Language is ${item.language} and file name is ${item.fileName}.`);  
})
