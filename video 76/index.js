// function getdata() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(599)
//         }, 4000);
//     })
// }

// async function getdata() {
//     // Simulate getting data from a server
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') 
//     let data= await x.json()
//     console.log(data)
//     return 599
// }

async function getdata() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}

async function main() {

console.log("loading modules");
console.log("loading data");
let data= await getdata()
console.log(data)
console.log("process data");
console.log("task 2 gobar nikalo");
    
}
main()



// other method for wait
// data.then ((v) => {
// console.log(data)
// console.log("process data");
// console.log("task 2 gobar nikalo");
// })