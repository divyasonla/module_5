const input = require("readline-sync")
// function add(a,b){
//     sum = a+b;
//     sub = a-b;
//     console.log(sum);
//     console.log(sub);
// }
// let a = input.questionInt("enter a num:-")
// let b = input.questionInt("enter a num:-")
   
// add(a,b)

// let add=(()=>a+b)
// let sub=(()=>a-b)
// console.log(add(a,b));
// console.log(sub(a,b));




// function isprime(n){
//     c=0
//     for( let i = 2 ; i <= n ; i++){
//        if(n % i == 0){
//        c++
//        }
//     }
//     if(c == 1){
//         return 'isprime'
//     }
//     else{
//         return 'notprime'
//     }
// }
// let n= input.questionInt("enter number:-")
// console.log(isprime(n));

// function findarea(r){
    //     pi= 3.14159
    
    //     area = pi * r**2
    // console.log(area);
    
    // }
    // let r=input.questionInt('enter num:-')
    // findarea(r)
    
    // function findcircumference(r){
    //     pi = 3.14159
    //     let circumference = 2 * pi * r
    //     console.log(circumference);   
    // }
    // findcircumference(r)
    
    

// function maximumvalue(arr){
//     max=arr[0]

//    for(let i =1;i<arr.length;i++){
//     if(max < arr[i+1]){
//         max = arr[i+1]
//     }
    
//    }
//    console.log(max);
   
// }
// arr = [1,2,10,4,5]
// maximumvalue(arr)


// function mavalue(arr){
//     min = arr[0]
//     for(let i = 1;i<arr.length;i++){
//      if(arr[i+1] < min){
//          min = arr[i+1]
//      }
     
//     }
//     console.log(min);
    
//  }
//  arr = [1,6,8,4,5]
//  mavalue(arr)

// 

// let arr = [1,2,3,4,5,1,2,3,4]
// function removeDup(arr){
//     return arr.filter((item,index)=>
//         arr.indexOf(item)==index
//     );
// }
// console.log(removeDup(arr));

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
// //   const jsonString = JSON.stringify(person);
// //   for(let i in jsonString)
// //   console.log(typeof jsonString[i]); 
// // console.log(jsonString);

// const javaScript = JSON.parse(JSON.stringify(person));
// // const javaScript = Object.assign({}, person);
// // const javaScript = person;
// // let shallowCopy2 = { ...person };

// javaScript.age=19
// console.log(person);

// console.log(javaScript);



//   // Output: '{"name":"John","age":30,"city":"New York"}'
  

// let arr=[1,3,5,8,9]
// let arr1=[10,6,2,0,7]

// function sorted(arr,arr1){
//     arr.sort()
//     arr1.sort()
//     let sorted = arr.concat(arr1)
//     sorted.sort()
// //    let r = sorted.toString().split(',').sort()
//     console.log(sorted);
    
// }
// sorted(arr,arr1)

// function powercheck(n){
//     if(2**2==n){
//         console.log('yes');
        
//     }
//     else{
//         console.log('no');
        
//     }

// }
// n=input.questionInt("enter num:-")
// powercheck(n)


// let obj={
//     name:'divya',
//     lastname:'sonla',
//     age:19,
//     address:'Bhopalpatnam'
// }
// function deepcopy(obj){
//     let deepcopy1=JSON.parse(JSON.stringify(obj))
//     console.log(deepcopy1);
// }
// deepcopy(obj)

// let obj={
//     a:5,
//     b:8,
//     c:0
// }
// let obj1={
//     d:8,
//     q:7,
//     v:6
// }
// function mergeobj(obj,obj1){
// let merge=Object.assign(obj,obj1)
// console.log(merge);

// }
// mergeobj(obj,obj1)

// let obj={
//     a:1,
//     b:3,
//     c:9,
//     d:5,
//     e:0
// }
// function toarray(obj){
// let arr=Object.entries(obj)
// console.log(arr);

// }
// toarray(obj)

// let obj={
//     name:'divya',
//     class:'coding',
//     lang:'JS'
// }
// function addproperty(obj){
//     // obj.year=2024

//     // console.log(obj);
//     let newobj={...obj,year:"2024"}
//     console.log(newobj);
    
// }
// addproperty(obj)

// let obj={
//         name:'divya',
//         class:'coding',
//         lang:'JS'
//     }

//     function deleteobj(obj){
//         delete obj.class
//         console.log(obj);
        
//     }
//     deleteobj(obj)



// let obj={
//         name:'divya',
//         class:'coding',
//         lang:'JS'
//     }
// console.log(obj);

//     function shallowCopy(obj){
//         let shallowCopy2=obj
//         shallowCopy2.lang='python'
//         console.log(obj);
        
//         console.log(shallowCopy2);
        
//     }
//     shallowCopy(obj)

// let obj={
//         name:'divya',
//         class:'coding',
//         lang:'JS'
//     }

//     function countindexing(obj){
//         count=0
//         for(i in obj){
//             count++
//         }
//         return count
//     }
//     console.log(countindexing(obj));
    
// function countProperties(obj){
//     return Object.keys(obj).length;
// }
// console.log(countProperties(obj));


// let a=5;
// let b=4;
// function add1(b){
//    return b ;
// }

// function add(a,callback){
//     let sum = a +callback();
//     return sum
// }
// console.log(add(a,()=> add1(b)));


// function hello(){
//     console.log('hello');
//     setTimeout(()=>{
//         sayhello()
//     },2000)
// }
// function sayhello(){
//     console.log('i am divya and your name');
//     setTimeout(()=>{
//         saybye()
//     },2000)
// }

// function saybye(){
//     console.log('i am swati how are you ?');
//     setTimeout(()=>{
//         fine()
//     },2000) 
// }
// function fine(){
//     console.log('i am fine and you ?');
//     setTimeout(() => {
//         fine2()
//     }, 2000);
// }
// function fine2(){
//     console.log('i am also fine !');
//     setTimeout(()=>{
//         bye()
//     },2000)
// }
// function bye(){
//     console.log('bye');
    
// }
// hello()


// const fruits = [
//     ["apples", 300],
//     ["pears", 900],
//     ["bananas", 500]
//   ];
  
//   const myObj = Object.fromEntries(fruits);
//   console.log(myObj);
  

// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 50,
//     eyeColor : "blue"
//   };
  
//   let text = Object.values(person);
//   console.log(text);
  


// let arr=[{name:'swati',age:21},{name:'tripti',age:22},{name:'divya',age:19}]
// let findage =input.questionInt("enter age :-")
// function specific(arr){
// for(let item of arr){
//     if(item.age == findage){
//         console.log(item,item.age);
        
//     }
// }
// }
// specific(arr)


// let person={
//     name:'divya',
//     age:'19',
//     DOB:'1-06-2005',
//     lang:'hindi'
// }
// function findspecifie(person,property){
// let find=person.hasOwnProperty(property);
// console.log(find);

// }
// findspecifie(person,'lang')



// const originalObject = {
//     name: 'John',
//     age: 30,
//     address: {
//         city: 'New York',
//         zip: '10001'
//     }
// };

// // Create a shallow copy of the original object
// const shallowCopy = { ...originalObject };

// // Modify the nested object in the shallow copy
// shallowCopy.address.city = 'Los Angeles';

// console.log("Original Object:", originalObject);
// console.log("Shallow Copy:", shallowCopy);

// let n= input.questionInt("enter num :-")
// function findlastdigit(n){
//  lastnum = n%10
//  return(lastnum)
// }
// console.log(findlastdigit(n));


// function findfirstdigit(n){
// let str = n.toString()
// // let num =  str.split('')

// return str[0]
// }
// console.log(findfirstdigit(n));




// let promise = new Promise((resolve,reject)=>{
// resolve("it's success");
// reject("it's pending -")
// })
// promise.then((value)=>{
//     console.log(value);
    
// })
// .catch((erorr)=>{
//     console.log(erorr);
// } );
    
// let arr=[{name:'swati',age:21},{name:'tripti',age:22},{name:'divya',age:19}]


// function sortByPropertyDescending(array, property) {
//     return array.sort((a, b) => {
//       if (a[property] < b[property]) {
//         return -1; // a comes before b
//       } else if (a[property] > b[property]) {
//         return 1; // a comes after b
//       } else {
//         return 0; // a and b are equal
//       }
//     });
//   }
  
//   // Using the function to sort by age in descending order
//   let sortedPeopleDescending = sortByPropertyDescending(arr, "age");
  
//   console.log(sortedPeopleDescending);

  


// Function to simulate a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function visitRestaurant() {
    console.log('Going to a restaurant');
  
    console.log('Entering the restaurant');
  
    console.log('Ordering the food - Rooti, Paneer, Rice');
    await delay(3000); // Simulate ordering time
  
    console.log('Waiting for the food');
    await delay(5000); // Simulate waiting time
  
    console.log('Delivery of the food');
    await delay(3000); // Simulate delivery time
  
    console.log('Eating the food');
    await delay(10000); // Simulate eating time
  
    console.log('Paying the bill');
    await delay(2000); // Simulate paying time
  
    console.log('Leaving the restaurant');
  }
  
  // Call the function to simulate the restaurant visit
  visitRestaurant();
  