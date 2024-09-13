




// function sayHello(callback){
//     setTimeout(()=>{
//     console.log("Hello");
//     callback()
// },5000);
//     // console.log('hello');
    
// }
// function saybay(){
//     console.log("World");

// }
// // saybay(sayHello)

// sayHello(saybay)



// function Atm(){
//     console.log('Enter ATM');
// }
// function ATM (callback){
//     console.log('enter atm');

//     setTimeout(()=>{
//         callback()
//     },2000)
    
// }
// function insert(){
//     console.log('insert card');
//     setTimeout(()=>{
//         console.log('enter pin');
        
//     },2000)
    
// }
// function select(){
//     setTimeout(()=>{
//         console.log('select language');
        
//     },1000)
// }

// // Atm()
// function all(){
//         ATM(()=>{
//             insert(()=>{
//                 // select(());
//             })
//         })

// // select()
// }
// all()



// function ATM (callback){
//         console.log('enter atm');
    
//         setTimeout(()=>{
//             callback()
//         },2000)
        
// }

// function insert(callback){
// console.log('insert card');
// setTimeout(() => {
//     callback()
// }, 2000);

// }
// function enter(callback){
//     console.log('enter pin');
//     setTimeout(() => {
//         callback()
//     }, 1000);
    
// }
// function select(callback){
//     console.log('select language');
//     setTimeout(() => {
//         callback()
//     }, 1000);
// }
// function selectAcc(callback){
//     console.log('select Account');
//     setTimeout(() => {
//         callback()
//     }, 1000);
// }
// function withdraw(callback){
//     console.log('Withdraw Money');
//     setTimeout(() => {
//        callback() 
//     }, 3000);
// }
// function process(callback){
//     console.log('processing waiting for cash');
//     setTimeout(() => {
//         callback()
//     }, 2000);
// }
// function collect(callback){
//     console.log('Collect Cash');
//     setTimeout(() => {
//         callback()
//     }, 2000);
// }
// function remove(callback){
//     console.log('Remove Card');
//     setTimeout(() => {
//         callback()
//     }, 1000);
// }
// function all(){
// ATM(()=>{
// insert(()=>{
//     enter(()=>{
//         select(()=>{
//             selectAcc(()=>{
//                 withdraw(()=>{
//                     process(()=>{
//                        collect(()=>{
//                         remove(()=>{
//                             console.log('Exit');
//                         })
//                        })
//                     })
//                 })
//             })
//         })
//     })
// })
// })
// }
// all()



// // select()
// }
// all()



// function ATM (){
//         console.log('enter atm');
    
//         setTimeout(()=>{
//             insert()
//         },2000)
        
// }

// function insert(){
// console.log('insert card');
// setTimeout(() => {

// enter()
// }, 2000);

// }
// function enter(){
//     console.log('enter pin');
//     setTimeout(() => {
// select()
//     }, 1000);
    
// }
// function select(){
//     console.log('select language');
//     setTimeout(() => {
//         selectAcc()
//     }, 1000);
// }
// function selectAcc(){
//     console.log('select Account');
//     setTimeout(() => {
//        withdraw()
//     }, 1000);
// }
// function withdraw(){
//     console.log('Withdraw Money');
//     setTimeout(() => {
//         process()
//     }, 3000);
// }
// function process(){
//     console.log('processing waiting for cash');
//     setTimeout(() => {
// collect()
//     }, 2000);
// }
// function collect(){
//     console.log('Collect Cash');
//     setTimeout(() => {
//         remove()
//     }, 2000);
// }
// function remove(){
//     console.log('Remove Card');
//     setTimeout(() => {
//         console.log('Exit');
        
//     }, 1000);
// }
// ATM()
////////////////////////////////////////////////////////////////////////


// function going(){
//     console.log('Going to a restaurant');
//     return Promise.resolve();

// }

// function enter(){
//   console.log(' Enetering the restaurant');
//   return Promise.resolve();

// }

// function order(){
//     console.log('Ordering the food ');
//     return new Promise((resolve) => {

//     setTimeout(() => {
//         console.log('Rooti, Paneer, Rice');
//         resolve()
//     }, 3000);
// });
// }

// function wait(){
//     return new Promise((resolve) => {

//     setTimeout(()=>{
//         console.log('Waiting for the food');
//         resolve();
//     },5000)
// });
    
// }

// function delivery(){
//     return new Promise((resolve) => {

//     setTimeout(() => {
//        console.log('delivery the food');
//         resolve();
//     }, 3000);
// });
// }

// function eating(){
//     return new Promise((resolve) => {

//     setTimeout(() => {
//         console.log('Eating the food ');
//         resolve()
//     }, 10000);
// });
// }

// function pay(){
//     return new Promise((resolve) => {

//     setTimeout(() => {
//         console.log('Paying the bill ');
//         resolve()
//     }, 2000);
// });
// }
// function leave(){
//     console.log('Leaving the restaurant');
//     return Promise.resolve();

// }

// async function all(){
//     await going()
//     await enter()
//     await order()
//     await wait()
//     await delivery()
//     await eating()
//     await pay()
//     await leave()
// }
// all()

////////////////////////////////////////////////////////////////////////


// setTimeout(() => {
//     fetch(`https://api.restful-api.dev/objects`)
//       .then(response => response.json())  // Convert response to JSON
//       .then(data => console.log(data))    // Log the actual data
//       .catch(error => console.error('Error:', error));  // Handle any errors
// }, 2000);
////////////////////////////////////////////////////////////////////////


// setTimeout(()=>{
//      fetch(`https://api.restful-api.dev/objects`)
//     .then(response => response.json())
//     .then(data => console.log(data[0].name))
//     .catch(error => console.log('error:',error)
//     )
// },2000)

// setTimeout(() => {
// }, 1000);

////////////////////////////////////////////////////////////////////////


// async function fetchdata(){
//     let data = fetch(`https://api.restful-api.dev/objects`)
//     data.then(response => response.json())
//     data.then(data => console.log(data))
//     data.catch(error => console.log('error:',error))
//     console.log(data);    
// }
//  fetchdata()





////////////////////////////////////////////////////////////////////////
// async function fetchdata(){
//   let response =  await fetch(`https://api.restful-api.dev/objects`)
// let data  = await response.json();
// data.map((object)=>{
//     console.log(object.data?.color);
    
// })
// // console.log(data);

// }
// fetchdata()






