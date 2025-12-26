// function hello(){
//     console.log("hello");
// }

// hello();
// hello();
// hello();
// hello();
// hello();
// hello();

// function printName(){
//     console.log("Dhiraj")
// console.log("apna   college");
// }
// printName();




// function print1to5(){
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// }

// print1to5();


// function isAdult(){
//     let age = 18;
//     if (age>=18){
//         console.log("adult")
//     }else{
//         console.log("not adult");
//     }
// }

// isAdult();



//create a function to roll a dice and always display the value of the dice (1 to 6)

// function rolldice(){

//     let rand = Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }


// rolldice();
// rolldice();
// rolldice();

// function sum (a,b){
//     console.log(a+b);
// }

// sum(1,2);
// sum(4,5);
// sum(7,8);


// create a function that give average of 3 SVGAnimatedNumberList

// function calcAvg(a,b,c){

// avg=(a+b+c)/3;
// console.log(avg);

// }

// calcAvg(2,3,4);

// create a function that prints the muliplication table of a number

// function printTable(n){
// for (let i=n; i<=n*10; i++){
//     console.log(i);
// }
// }

// printTable(2);


//create a function that reurn the sum of numbers from 1 to n

// function getsum(n){
//     let sum=0;
//     for(let i=1; i<=n; i++){
//         sum+=i;

//     }

//     return sum;
// }


//create a function that returns the concatention of all strings in an array

// let str = ["hi", "hello", "bye" , "!"];
 
// function concat(str){
//     let result;

//     for(let i=0; i<=str.length; i++){
//     result +=str[i];
//     }
//     return result;
// }



//scope

//function scope
// function calsum(a,b){
//     let sum = a+b;
//     console.log(sum);

// }
// calsum(1 , 2);


//block scope


// let age = 25;
// if (age>=18){
//     let str="adult";
//     console.log(str);
// }


//greet funcion

// function multipleGreet(func,count){ //higher order functin
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("hello");
// }

// multipleGreet(greet,2);




// higher order function

// function oddEvenTest(request){

//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2 == 0));
//         }
        
//         }else if (request == "even"){
//             return function(n){
//                 console.log(n%2 ==0);
//             }
//         }else{
//             console.log("wrong request");
//         }
//     }



// //methods

// const calculator = {

//     add: function(a,b){
//         return a+b;
//     },
// sub:function (a,b){
//     return a-b;
// },
// mul: function(a,b){
//     return a*b;
// }
// };

//"THIS "  KEYWORDS refrers to an object that is executing the current piece of code

// const student ={
//     name:"Dhiraj",
//     age: 22,
//     eng: 94,
//     math:80,
//     phy:75,
//     getAvg(){
//         let avg =(this.eng+this.math+this.phy)/3;
//         console.log(avg);
//     }

// }

// try and catch

//the try statement allows you to define a block of code to be tested for errors while it is being executed.

//the catch statement allows you  to  define a block of code to be executed,if an error occurs in the try block

// try{
//     console.log(a);

// }catch{
//     console.log("variable a doesnt")
// }

// Arrow function

// const sum = (a,b) => {
//     console.log(a+b);
// };

// const cube = (n)=>{
//     return n*n*n;
// };


// //set timeout
// console.log("hi there!");

// setTimeout( () => {
//     console.log("Apna college");
// },4000);

// console.log("Welcome to");

//set interval

// console.log("hi there!");
// setInterval(() =>{
//     console.log("apna college");
// },2000);


// console.log("hi there!");
// let id = setInterval(()=>{
//     console.log("Apna college");
// }, 2000);

// console.log(id);

// let id2 = setInterval(()=>{
//     console.log("hello world");

// },3000);

// console.log(id2);


//array methods

//forEach
// let arr= [1,2,3,4,5];
// function print (el){
//     console.log(el);
// }
// arr.forEach(print);

// let arr =[{
//     name:"dhiraj",
//     marks: 75
// },
// {
//     name:"aman",
//     marks:50
// },
// {
//     name:"aditya",
//     marks:60,

// },
// ];

// arr.forEach((student)=> {
//     console.log(student.marks);
// });



//map
//let newarr = arr.map(some function defnition or name);

// let num = [1,2,3,4];
// let double = num.map(function(el){
//     return el*2;
// }

// );


// let num = [1,2,3,4];
// let double = num.map((el)=>{
//     return el*2;
// });

// let student =[{
//     name:"dhiraj",
//     marks: 75
// },
// {
//     name:"aman",
//     marks:50
// },
// {
//     name:"aditya",
//     marks:60,

// },
// ];

// let gpa = student.ma((el)=>{
// return el.marks/10;
// });


//filter function
//let newArr = arr.filter(some function defnition or name);

// let nums = [2,4,1,5,6,2,7,8,9];
// let even = nums.filter( (num)=> (num%2==0));

// let nums = [2,4,1,5,6,2,7,8,9];
// let ans = nums.filter((el)=>{
//     return el%2==0;
// }
// );


//every function
// returns true if every element of array gives true for some functions. else returns false
 //arr.every(some function defnition or name);

//  [1,2,3].every((el) =>(el%2==0));

//  [2,4].every ((el) => (el%2==0));


//some function

//return true if some elements of array give true for some function. else returns false.
//arr.some(some function defnition or name);

// [1,2,3,4].some((el)=>(el%2==0));
//true

//reduce
//reduces the array to a single value

//arr.reduce(reducer function with 2 variables for (accunulator,element));

// [1,2,4,3].reduce((res,el)=>(res+el));
//ans 10

// let nums=[1,2,3,4];
// let finalval=nums.reduce((res,el)=>res+el);
// console.log(finalval);

// let arr = [ 1,3,5,6,4,2,5];
// let max = -1;

// for (let i=0; i<arr.length; i++){
//     if(max<arr[i]){
//         max = arr[i];
//     }
// }

// console.log(max);



// let arr = [ 1,3,5,6,4,2,5];
// let max = arr.reduce((max,el)=>{
//     if(max<el){
//         return el;

//     }else{
//         return max;
//     }
// });


//check if all numbers in our array are multiples of 10 or not

// let nums = [10,20,30,40];

// let ans = nums.every((el)=> el%10==0);\
// console.log(ans);

//create a function to find the min number in an array

// let nums = [10,30,40,50];
// let min = nums.reduce((min,el)=>{
//     if (min<el){
//         return min;
//     }else{
//         return el;
//     }
// });

// console.log(min);


 
//default parameters
// function sum(a,b=2){
//  return a+b;   
// }


//spread
//expands an intrable into multiple values

// let arr = [1,2,3,4,5];
//  Math.min(...arr);
//  ans1

//  console.log(...arr);
//  ans 12345
// console.log(..."apnacollege");
// ans a p n a c o l l e g e


// let arr =  [1,2,3,4,5];
// let newArr = [...arr];
// console.log(newArr);

// let chars = [..."hello"];

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];
// let nums = [...even, ...odd];


//spread
//with object literals


// const data = {
//     email:"dhirajgupta49533@gmail.com",
//     password:"abcd",
// };

// const datacopy = {...data, id:123,country:"Nepal"};


//rest 
//allows a function to take an indefinite number of arguments and bundle them in an array

// function sum (...args){//arguments
//     for(let i=0; i<args.length;i++){
//         console.log("you gave us:",args[i]);
//     }
// }


// function main(){
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// }




//destructuring
//storing values of array into multiple variables

// let names = ["tony","dhiraj","peter","steve"];
// let winner = names[0];
// let runnerup = names[1];
// secondrunnerup = names[2];

//or

// let names = ["tony","peter","dhiraj","steve"];
// let [winner,runnerup,secondrunnerup]=name;


//destructuring
//onjects

// const student ={
//     name: "Dhiraj",
//     age:22,
//     class:12,
//     subject:["hindi","english","math","science"],
//     username:"karan@123",
//     password:"abcd",
// };

// let username = student.username;
// let password= student.password;




//practice
//square and sum the array elements using the arrow function and then find the average of the array 
// let  nums =[1,2,3,4,5];
// const square = nums.map((num)=> num*num);
// console.log(square);
// let sum = square.reduce((acc,cur)=> acc+cur,0);
// let avg = sum/nums.length;
// console.log(avg);



//create a new array using the map function whose each element is equal to the original element plus 5

// let numbers = [2,4,6,8,-2,-4];
// console.log(numbers.map((number)=>number+5));

//create a new array whose elements are in uppercase of words present in the original array

// let strings = ["adam","bob","catyln","donald","eve"];
// console.log(strings.map((string)=>string.toUpperCase()));