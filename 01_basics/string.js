const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`; //join two strings without "+"
console.log(joined); // "Hello, how are you?"

const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

//String Methods
//1 Length of String
const browserType = "mozilla";
console.log(browserType.length);
console.log(browserType[2]); // counts from 0
console.log[browserType.length - 1]; //last character

//2 Substring
//Sometimes you'll want to find if a smaller string//  is present inside a larger one 
// (we generally say if a substring is present inside a string).

//const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
//3 indexOf() - returns the index of the first occurrence of the substring
//If the string does not contain the substring, indexOf() returns -1.
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
console.log(tagline.indexOf("x")); // -1

const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35

//4 Slice - You can extract a substring from a string using the slice() method.
//const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
browserType.slice(2); // "zilla"

//toLowercase() and toUpperCase()
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

//replace() and replaceAll()
//const browserType = "mozilla";
const updated = browserType.replace("moz", "van");
console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"

let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");
console.log(quote); // "To code or not to code"

//Ex - 1
const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

const capitalizedCities = cities.map(city => {
    const lower = city.toLowerCase();
    const firstLetter = lower.slice(0,1);
    const capitalized = lower.replace(firstLetter, firstLetter.toUpperCase())
    return capitalized;
});
console.log(capitalizedCities);
//Ex -2
const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

const stationsCode = stations.map(station => {
    const code = station.slice(0,3)
    // console.log(code);
    const semicolonIndex = station.indexOf(";");
    // console.log(semicolonIndex);
    const stationName = station.slice(semicolonIndex + 1);
    console.log(stationName);
    const result = `${code}: ${stationName}`
    console.log(result);    
})



