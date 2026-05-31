const Callback= (args , fn) => {
    console.log(args);
    fn()
}


const loadScript=(src,Callback) =>{
    let sc = document.createElement("script")
    sc.src= src;
    sc.onload= Callback("Karan", "fn")
    document.head.append(sc);

}

loadScript("https://www.youtube.com/watch?v=9JaDBYPmiJ0&t=1111s", Callback )
