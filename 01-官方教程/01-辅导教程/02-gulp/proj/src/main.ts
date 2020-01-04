// function hello(compiler:string){
//     console.log(`Hello from ${compiler}`);
// }

import {sayHello} from "./greet";

function showHello(divName:string,name:string){
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}
const pr = function(){
    return new Promise((resolve,reject)=>{
        console.log(123)
        resolve()
    })
}

pr()

// console.log(sayHello("TypeScript"));
showHello("greeting","TypeScript");