
// https://www.youtube.com/watch?v=fsVL_xrYO0w


const appendWord = (fixed) => (dynamic) => fixed + dynamic;

const rain = appendWord("rain");
const sun = appendWord("sun");

const rainString = rain("today");
const sunString = sun("today");




// console.table([obj, obj, obj])

// console.trace (inside a function)

// Destructuring: instead of passing object by name into a function, pass {name, type, …} into the function.


// Or, inside the function say const {name, type, …} = animal




// NICE: the shortcut with typescript constructors is just to put “public” before the parameter name

// Using public means the value can be changed from outside the class declaration (i.e. in a context in which the class is instantiated)

// Convention is to prefix private variables with “_” 






// Composition and inheritance: kind of opposites, but related. Mixins are related too. This is the idea of concatenating objects into a single function 
