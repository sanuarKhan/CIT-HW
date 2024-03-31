let user;
let batch;
 user = prompt("are you Student of CIT?");
 batch = prompt("what's your batch?");

if(user === "yes"){
    document.write('<h2>Welcome to CIT Campus🏡</h2>');
     
    if(batch === "mern2308"){
        document.write('<h3>Same batch!! Aho Batija aho</h3>')
    } else{
        document.write('<h3>This page is only for MERN2308</h3>')
    }
}else{
    document.write('<h2>Sorry!😥 Access denied.</h2>');
}

let styles = `
color: red;
background: #140459ab;
text-align: center;`

const body = document.querySelector('body');
console.log(body)

body.style  = styles;