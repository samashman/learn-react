// array functions

// map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
// concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
// slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// sread and rest operators
// spread used to split up array elements or obj properties
// ie 
// rest to... add elements from old array to new array. [...oldArray, 1, 2]
// or create new object with properties and values of old object
// const newObject = {...oldObject, newProp: 5};

// spread to merge a list of function arguments into an array
// function sortArgs(...args) {
//        return args.sort();
//}


//destructuring

// const myArray = [1, 3, 5];
// const [a,b,] = myArray;
// console.log(a);

// copy object

const dude = {
    name: 'max'
};

const secondDude = {
    ...dude
};

dude.name = 'steve';

console.log(secondDude.name);



const numbers = [1, 2, 3];
const newNumbers = [...numbers, 6];


// returns a new array in doubleNumArray.
const doubleNumArray = numbers.map((num) => {
    return num * 2;
});





class Human {
    myName = "hi";
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = "sam";
    }
    printMyName = () => {
        console.log(this.name);
    }
}

const myPerson = new Person();
myPerson.printMyName();
myPerson.printGender();





let myLetVar = "let"; //
const myConst = "const"; // never going to use a new value
let a = 1;
let b = 2;


yourFunction = myConst => console.log(myConst);




