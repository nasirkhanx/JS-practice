
/* ---------------now making a small increment and decrement counter*/
let no=0;
document.getElementById("b1").onclick = function INCREMENT_(){
    no++;
    document.getElementById("number").textContent = no;
}
document.getElementById("b2").onclick = function decrement_(){
    no--;
    document.getElementById("number").textContent = no;
}
document.getElementById("b3").onclick = function reverte(){
    no=0;
    document.getElementById("number").textContent = no;
}

/* -----------random number-------*/
let random_no = Math.floor(Math.random()*6 + 1);//random number between 1-6
console.log(random_no);
 
let max=100;
let min=50;
let random_ = Math.floor(Math.random()* (max-min) + min);//random number between 1-6
console.log(random_);