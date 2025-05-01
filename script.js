// operators..................................
// var x = 52; y = 10;
// console.log(x%y);

// var a = 10; b = 2;
// console.log(a**b)

// var a = 3 == '3';
// console.log(a)

// var x = 3 === '3'
// console.log(x)


// var x = 2 !== 2;
// console.log(x)

// var a = 3 !== '3';
// console.log(a)

// var x = "4";
// x = -x;
// console.log(x)

// var a = 5;
// a--
// console.log(a)

// var b = true;
// b = -b
// console.log(b)

// var s = "hello" , p = "world";
// console.log(s + " " + p)

// loops......................
// console.log("hello world")
// console.log("hello world")

// for(let i = 0; i < 10; i++){
// console.log("hello world")
// }

// for(let i = 5; i < 51; i = i+5){
// console.log(i)
// }

// for (let i = 50; i > 4; i = i-5){
// console.log(i)  
// }

// for (let i = 0; i < 10; i++){
// if(i % 2 != 0)
// console.log(i)    
// }

// let i = 0;
// while(i < 10){
//     i++
//     console.log("hello world") 
// }

// let j = 0
// do{
//     console.log("hello world")
//     j++
// }
// while(j<10)

// // Object....
// let animal = {
//     name : "zebra",
//     leg : 4
// };
// Dot Notation.....
// console.log(animal.leg)

// Bracket Notation .....
// for(let key in animal){
//     console.log(key, animal[key])
// };
// 2nd way
// let key = "leg"
// // console.log(animal[key])

// // // arrays.......
// let names = ["anita", "anumta", "haris", "aiman"];
// for (let index in names){
//     console.log(index, names[index])
// };
// for(let name of names){
//     console.log(name)
// };


// functions......................

// function cookMaggi(maggi, pani, bhagona) {
//     console.log("your maggi will be ready in "
//         + maggi * 2
//         + " minutes"
//         + " and ingredients used are:- "
//         + pani + " cups of water and "
//         + bhagona + " pan")
// };
// // cookMaggi(3, 4, 1);

// function # 2.......
//  function helloWorld(name, lastName){
//     console.log("hello " + name + " " + lastName);
//  };
// helloWorld("anita", "khan");


// function cookSpaghetti(spaghetti, veggies, sauces){
//     console.log("your spaghetti will be ready in "
//         + spaghetti * 10
//         + " minutes"
//         + " and veggies used are:- "
//         + veggies + " veggies: cauliflower , carrot and capsicum " 
//         + " using "  + sauces  + " alfredo sauce ")
// };
// cookSpaghetti(2, 3, 1);


// function return.....................

// let bread1 = prompt("which bread would you like to have:- ");
// let veggies1 = prompt("whixh veggies do you want");
// let sauce = prompt("your favorite sauce");

// function makeSandwich(bread, veggies, sauce){
//     let sandwich = bread + " bread " + veggies + " " + sauce + " sandwich is ready"
//     return sandwich;
// }
// let sandwich = makeSandwich(bread1, veggies1, sauce);

// console.log(sandwich)

// function multiplication(x,y){
//     return x*y;
// };
// console.log(multiplication(2,3));


// var favShow = "game of thrones";
// console.log(favShow.length);

// console.log(favShow[0]);

// console.log(favShow[14]);

// console.log(favShow.indexOf("thrones"));

// console.log(favShow.slice(8,15));

// var srk = "my name is srk";

// console.log(srk.toUpperCase());
// console.log(srk.toLowerCase());

// factory function
// function createCourse(title) {
//     return {
//         title: title,
//         enroll() {
//             console.log("you are successfully enrolled")
//         }
//     }
// }
// const course = createCourse('javascript');
// course.enroll()
// console.log(course)


// // constructor function
// function Course(title) {
//         this.title = title,
//         this.enroll = function(){
//             console.log("you are successfully enrolled")
//         }
//     }
// const course1 =  new Course('javascript');
// course.enroll();

// excercise using objects
// itenName
// price
// discount
// // itemCode

// const object = {
//     itemName : 'milk',
//     price  : 200,
//     discount : 20 ,
//     itemCode : '123'
// };

// function product(itemName,price,discount,itemCode){
//     return {
//         itemName : itemName,
//         price  : price,
//         discount : discount ,
//         itemCode : itemCode,
//        discountValue(){
//         console.log(price*discount/100)
//        }
//     }
// }
// const object_1 = product('perfume',500,10,'1234');

// function createProduct(name,price,code,discount){
//     this.itemName = name,
//     this.price = price,
//     this.itemCode = code,
//     this.discount = discount,
//     this.discountValue = function(){
//         return price * discount / 100;
//     }
// };
// const object_2 = new createProduct ('bag', 200,'12345',10)

// ARRAYS
// const array = new Array (1,2,3,4,5,6,7,8,9);
// console.log(array[array.length-1]);

const array = [1,2,3,4,5,6,7,8,9];
array.push(11);
array.unshift(0);
array.shift()

array[0] = {num:12}
console.log(array);

const names = ['anumta','haris','aiman','anita'];
names.indexOf('anumta');
names.lastIndexOf('anumta')
names.includes('aiman')
console.log(names.includes('aiman',2))

let channels = [{
    name:"anumta khan",
    subscribers:30000
},{
    name:"anita khan",
    subscribers:50000
},{
    name:"aiman khan",
    subscribers:20000
}];

// inline callback function
console.log(channels.find(function(element){
    return element.subscribers === 20000
}))

// arrow function for single argument
console.log(channels.find(element => element.subscribers === 50000))

//for more than one argument
console.log(channels.find((element) => {
    return element.subscribers === 20000
})) 

let names1 = ['anumta','haris','aiman','anita'];
let names2 = ['faizan', 'salman', 'mashaim', 'ayesha']
let names3 = names1.concat(names2)

// spread operator
let names4 = [...names1,...names2]
console.log(names3.slice(3,6))

for (let i = 0 ; i < names.length ; i++){
 console.log(names[i])
};
for(let name of names){
    // console.log(name)
};
names.forEach(function(name,index){
    console.log(name,index)
})


