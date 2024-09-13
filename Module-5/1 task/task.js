// const mypromise= new Promise((resolve,reject)=>{
//     let success=true;

//     if(success){
//         resolve("task is complete !")
//     }
//     else{
//         reject("task in not complete ")
//     }
// });
// mypromise.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// });



// ################################################################


// let yourpromise =new Promise((resolve,reject)=>{
//     let jaidost=true
//     // let kisiorkadost=jaidost

//     if(jaidost){
//         reject("tumne mere liye chocalate liya ta but tumne mujhe nhi diya!")

//     }
//     else{
//         resolve("tumne mere liye chocalate liya ta!")

//     }
// });

// yourpromise.catch((error)=>{
//     console.log(error);
// }).then((message)=>{
//     console.log(message);
// })

// ################################################################



// const promise =new Promise((resolve,reject)=>{
//     let friend=true;

//     if(friend){
//         reject("but tumne ho promise toda diya! isliye ab mai gar chale jahungi to ab vapas nhi aahungi ?")

//     }else{
//         resolve("tumne mujhe promise kiya ta! ki jo chocalate mera hai ho mera hi rhega !")
//     }
// });
// console.log("tumne mujhe promise kiya ta! ki jo chocalate mera hai ho mera hi rhega !")

// promise.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// });


// ################################################################



// const myPromise = new Promise((resolve, reject) => {
//     resolve(10);
//   });
  
//   myPromise
//     .then(num => {
//       console.log(num); // 10
//       return num * 2;
//     })
//     .then(num => {
//       console.log(num); // 20
//       return num * 3;
//     })
//     .then(num => {
//       console.log(num); // 60
//     });
  
// ################################################################



// const myPromise = new Promise((resolve,reject)=>{
//     let wokeup=true;

//     if(wokeup){
//         resolve('agar tum mere dost ho to agle bar se ye yaad rakna ki jo mere liye hai ho hamesa mere liye rakna agr tum mere dost ho to ')
//     }else{
//         reject('agr tum mere dost nhi ho to tum kuch bi karo merko fark nhi padne wala')
//     }
// });

// myPromise.then((dost)=>{
//     console.log(dost);
// }).catch((nofriend)=>{
//     console.log(nofriend);
// });


// ################################################################


// function getnumber(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(56);
//         },2000);
//     });
// }
// async function fetchnumber(){
//     const number=await getnumber();
//     console.log(number);
// }
// fetchnumber()

// ################################################################



// function getResult(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let result=false;
//             if(result){
//               resolve("your pass the in this test!")
//             }else{
//                 reject("your not pass in this test can you give again")
//             }
//         },2000);
//     });
// }
// console.log('ruko jara sabr karo tumra result mil jayega sabr ka pal bahut meeta hota hai ');
// async function rukojara(){
//     try{
//         let pass=await getResult()
//         console.log(pass);
//     } catch(error){
//         console.log(error);
//     }
// }

// rukojara()

// ################################################################


// function getResult(){
//     return new Promise((resolve)=>setTimeout(resolve,2000,'I Am '))
// }
// function getResult1(){
//     return new Promise((resolve)=> setTimeout(resolve,3000,'Waiting for '))
// }
// function getResult2(){
//     return new Promise ((resolve)=>setTimeout(resolve,4000,'Your Call '))
// }
// function getResult3(){
//     return new Promise((resolve)=>setTimeout(resolve,5000,'KEEP SMILE MY DEAR FRIEND !'))
// }
// async function getpast(){
//     let result=await Promise.all([getResult(),getResult1(),getResult2(),getResult3()]);
//     console.log(result.join(""));
// }
// getpast()

// ################################################################

// async function fetchWith(url,attempts){
//     for(let i=0 ; i<attempts ; i++){
//         try{
//             const response=await fetch(url);
//             if(!response.ok) throw new Error('Fetch failed');
//             const data=await response.json();
//             return data;

//         } catch(error){
//             console.log(`Attempt ${i+1} failed. Retrying...`);
//         }
//     }
//     throw new Error("All attempts Failed");
// }

// (async()=>{
//     try{
//         const data=await fetchWith('https://jsonplaceholder.typicode.com/posts/1', 3);
//         console.log(data);
//     } catch(error){
//         console.log(error);
//     }
// })();


// ################################################################


// async function fetchAllSettled(){
//     const promise = [
//         Promise.resolve('Success'),
//         Promise.reject('Error'),
//         Promise.resolve('Another Success')
//     ];

//     const results = await Promise.allSettled(promise);
//     console.log(results);
// }

// fetchAllSettled()

// #######Object-oriented programming#########################################################


// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// const person1 = new person('Jai',19);
// console.log(person1.name);
// console.log(person1.age);

// ################################################################


// class Person{
//     constructor(name,name2){
//         this.name=name;
//         this.name2=name2;
//     }

//     greet(){
//         console.log(`Hello my Dear Friend ${this.name} your bestfriend name is ${this.name2}!`);
//     }
// }
// let Person1=new Person('Jai','somda');
// Person1.greet()


// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     greet(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// class Student extends person{
//     constructor(name,age,grade){
//         super(name,age);
//         this.grade=grade;
//     }
//     study() {
//         console.log(`${this.name} is studying.`);
//       }
// }

// const student = new Student("divya",19,'A');
// student.greet();
// student.study();
// console.log(student.grade);


// class Animal{
//     constructor(name){
//         this.name=name;
//     }

//     speak(){
//         console.log(`${this.name} makes a sound.`);
//     }
// }

// class Dog extends Animal{
//     speak(){
//         console.log(`${this.name} is barks.`);
//     }
// }

// const dog1 = new Dog("Sweeti");
// dog1.speak();



// class Animal {
//     speak() {
//       console.log("Animal makes a sound.");
//     }
//   }
  
//   class Dog extends Animal {
//     speak() {
//       console.log("Dog barks.");
//     }
//   }
  
//   class Cat extends Animal {
//     speak() {
//       console.log("Cat meows.");
//     }
//   }
  
//   function makeAnimalSpeak(animal) {
//     animal.speak();
//   }
  
//   const animal= new Animal()
//   const dog = new Dog();
//   const cat = new Cat();
  
// //   Animal()
//   animal.speak();
//   makeAnimalSpeak(dog); // Dog barks.
//   makeAnimalSpeak(cat); // Cat meows.
  


// class person{
//     constructor(name,age){
//         let _age=age;

//         this.gatname=function(){
//             return name;
//         };
//         this.getage=function(){
//             return _age;
//         }
//         this.setAge=function(newAge){
//             if(newAge>0){
//                 _age=newAge;
//             }
//         };

//     }
// }
// let person1=new person("Jai",19);
// console.log(person1.gatname());
// console.log(person1.getage());
// person1.setAge(20);
// console.log(person1.getage());


// class Car{
//     start(){
//         console.log('car ia starting....');
//     }
//     drive(){
//         console.log('car is driving...');
//     }
//     stop(){
//         console.log('car is stoping because there are vary rainy today.');
//     }
// }

// let mycar=new Car();
// console.log('Their are Cars can you test ------ yes yes why not i can test ----');
// mycar.start();
// mycar.drive();
// mycar.stop();


