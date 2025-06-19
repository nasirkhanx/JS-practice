
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