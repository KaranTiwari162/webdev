let arr =[1,20,36,3];

// let newarr = arr.map((e)=>{
//     return e**2

// }

// )
// console.log(newarr);

function greaterThanSeven(value) {
   return value>70;
    
}
console.log(arr.filter(greaterThanSeven));

let arr2=[1,2,3,4,5,6]
 const red=(a,b) => {
    return a*b;
 }
 console.log(arr2.reduce(red));