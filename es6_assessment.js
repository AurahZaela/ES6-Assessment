
const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]



// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
        let heroNoEvi = heroes.filter(hero=> hero.isEvil == false)
        console.log(heroNoEvi)

// b. Print Unique family names

var i =0
for(i; i < heroes.length;i++){
    if(heroes.family[i] == "Marvel"){
        console.log(heroes[i].family)

        break
    }
    if(heroes.family[i] == "DC Comics"){
        console.log(heroes[i].family)

        break
    }
    if(heroes.family[i] == "Tolkien"){
        console.log(heroes[i].family)

        break
    }
}


// c. Print Hero Names from given objects, and append sir in each of them before printing
let heroesManip = heroes.map((hero)=> {
    if(hero.isEvil == false || hero.isEvil == true)  
            return {
                "sir ": heroes.name
            } 
        }).filter(prsn=> prsn!=undefined)
// d. Do we have any hero in Marvel Family who is not evil

    //Charles Xavier, Deadpool and Wolverine are not evil in the marvel family
    let marvNoEvi = heroes.filter(hero=> hero.isEvil == false && hero.family == "marvel")

//2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc

let newMap = new Map();
let duelist = 'player', duelObj = {}, dueling = function() {}, deckNum = 60;

newMap.set(duelist, "Third Rate")
newMap.has("a string")
newMap.get("duelist name")
newMap.clear("Third Rate")


//3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
let marvel = movies,
            dc=comics;

            let a = 2, b = 3;

            [a,b] = [b,a]            
let objPromise = new Promise((es6, rejected)=>{
    let a = 2, b = 3;
    [a,b] = [b,a]  

    let adding = (num1 = 0, num2 = 0) => num1+num2
        
    let nVar;
    setTimeout(() => {
        es6({
            "Shorthand": console.log(marvel),
            "Destructuring" : console.log(b),
            "Big Arrow" : console.log(adding(5,9)),
            "Default Parameters" : console.log(adding()),
            "Let Variables" : nVar = "hi"

        })
    }, 2000);

    setTimeout(() => {
        rejected({
            "Status" : "Failed"
        })
    }, 3000);
})


//4. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example
         let numList = [1,2,3,4,5,6,7]

    function mult (...num){
        let mult = 1;

        mult = num.reduce((prevVal, currVal)=> prevVal * currVal, 0)
    
        return mult}

//5. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

console.log(person.last)
person.contactnumber = 9119119110;

//6. Give me an example of const data manipulation

    /*Accessing a const and trying to change it through reassignment or redeclaring it is not possible
    but when you set a const variable to a string for example, you are adding it to the list of elements or properties*/



//7. What is the difference between for-of and for-in show with examples

 //The for-in loop iterates over the property value which are meant mainly for json projects with key values
 //The for-of loop is used primarily for arrays and iterates over the property names more recommended for array of numbers or strings
 
 //A for In loop
let dueler = {name:"Yugi", Deck:"Dark Magician"}; 

for (const key in person) {
        console.log(key)

}

//A for Of loop
let decks = ['Red Eyes', 'Blue Eyes']; 
for (const decks of decks) {
    console.log(" "+ decks)
}

//8. Give me an example of bind and write its usage, comparison with arrow function

 /*The bind() function is used to so taht a function can be returned no matter how it is called but outputs a specific value
 whereas an arrow function on the other hand has ease of writing things such as lambda expressions 
  and helps resolve scope issues by copying the context of its parent function in timeout or delay executions*/


//9. Create an example showing usage of event loop in concurrent execution cycle

setTimeout(function(){
    console.log(1)

    setTimeout(function(){
        console.log(2) 
    },2000)
    
},1000)

setTimeout(function(){
    console.log(3) 
},1000)

setTimeout(function(){
    console.log(4) 
},1000)

//10. create an example showing usage of short hand, default param and template literal.
//////Short Hand Examples/////////
let cardDraw = "sad",
    kaiba = "person";

/////Default Parameters//////////
function subtract(num1 = 0, num2 = 0){
    return p2-p1
}

/////////Template Literal/////////

let templateLit = `this is a bunch of text
this is a bunch of text
<h1>Header<h1>
this is a bunch of text`