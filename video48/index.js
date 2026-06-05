function nice(name) {
  console.log (" hey " + name + " you are great");
  console.log (" hey " + name + " you are great");
  console.log (" hey " + name + " you are great");
  console.log (" hey " + name + " you are great");
   
    
}
nice("Karan");
nice(" Shri Madhu ji ");

// function sum(a,b) {
    
//     console.log(a+b);
// }
// sum(1,3);

function sum(a,b) {
    
    return  a + b
}
result= sum(1,6);
console.log("the sum of these no. is ", result);

function sum(a, b, c = 3) {
  //console.log(a + b)
  console.log(a,b,c);
  return a + b + c
  }
result1 =sum(3, 2)
result2 =sum(7, 5)
result3 =sum(3, 13, 1)
console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

const func1 = (x)=>{
  console.log("I am an arrow function", x)
  }
  func1(34);
  func1(66);
  func1(84);