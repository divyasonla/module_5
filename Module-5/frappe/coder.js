// function FindIntersection(strArr) { 
//     let arr1 = strArr[0].split(',');
//     let arr2 = strArr[1].split(',');
//     let arr3=[]
//     for(let i=0;i<arr1.length;i++){
//       for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//          arr3.push(arr1[i]);
//          break;
//         }
//       }
//     }
//     let removearr = arr3.join(', ')
//    return removearr
 
//  }
//     arr=["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
//  // keep this function call here 
//  console.log(FindIntersection(arr));



// let str = "fun&!a! time";
// let words = str.match(/\w+/g);
// console.log(words);  
//   let max=words[0];

// for(let i=1;i<words.length;i++){
//     if(max.length < words[i].length){
//         max = words[i]
//     }
//     else{
//         max=max
//     }
// }
// console.log(max);

// let text = "The quick brown fox jumps over the lazy dog. The dog was not happy.";
// let matches = text.match(/dog/g);

// console.log(matches); 

// Have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.


// let str="the color re(d))()(()"
// function BracketMatcher(str) { 
//     let c=0;
//     let c1=0;
    
//     for(item of str){
//       if(item ==='('){
//         c++
//       }
//       else if(item ===')'){
//         c1++
//       }
//     }
//     if(c===c1){
//       return 1;
//     }
//     else{
//       return 0;
//     }
//       // code goes here  
    
//     }
       
//     // keep this function call here 
//     console.log(BracketMatcher(str));

// let str = "the color re(d))()(()";
// function brackets(str){
// let openingbrackets = 0;
// for(let item of str){
//     if(item == "("){
//         openingbrackets++;
//     }
//     if(item == ")"){
//         openingbrackets--;
//     }
//     if(openingbrackets < 0){
//         return 0
//     }
// }

// return openingbrackets ===0?1:0;
// }
// console.log(brackets(str));


// Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses. For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). There are 5 total combinations when the input is 3, so your program should return 5.


let strArr = ["ahffaksfajeeubsne", "jefaa"]
