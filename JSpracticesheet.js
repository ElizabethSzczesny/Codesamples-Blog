/*const dropdown = document.querySelector('.second-nav-list-wrapper');

const select = document.querySelector('ul')

dropdown.onmouseenter = () => {
    dropdown.classList.toggle('second-nav-list')
} */

/*******Creating Objects in An Array*******/

var arrObj = [
                {
                    name:'Mary',
                    age: 50,
                    gender: 'female'
                },
                {
                    name:'Bob',
                    age:45,
                    gender:'male'
                },
                {
                    name:'Chloe',
                    age:34,
                    gender:'female'
                }
            ]

            console.log(arrObj)

var ArrObjTwo = function(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var objs = [
    new ArrObjTwo('Mary',23,'female')

]

console.log(objs)

/**********Array Methods*******/

var female = arrObj.filter(function(obj){
    return obj.gender === 'female';
})

console.log(female)

var sorted = arrObj.sort(function(obj1,obj2){

    return (obj1.age < obj2.age) ? 1:
    (obj1.age > obj2.age) ? -1:
    0

})

console.log(sorted)

var sarr = [1,2,3,4]

var sarr2 = sarr.slice(0,2)

console.log(sarr2)

var greet = "Hello"

greet2 = greet.split('e')

console.log(greet2)

/******Looping over Objects*********/

const testScores = {
    kenan: 89,
    bailey: 75
}

for(let person in testScores) {
    console.log(person + " scored " + testScores[person])
}

var person = Object.keys(testScores)

var score = Object.values(testScores)

for(let i of person) {
    (`${i} scored ${testScores[i]}`)
}

for(i=0; i < person.length; i++){
    (`${person[i]} scored ${score[i]}`)
}



