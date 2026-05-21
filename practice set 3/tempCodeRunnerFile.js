let marks = {
    Harry : 98,
    Rohan : 70,
    Karan : 7
}
for (let i = 0; i < Object.keys(marks).length; i++) {
   let key = Object.keys(marks)[i];

  console.log(key + " marks are " + marks[key]); }