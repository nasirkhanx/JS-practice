let inputelement = document.getElementById("enter");

mysubmit.onclick=function()
{
let number = parseInt(inputelement.value);//this wil actually get the number entered by the user

if(!isNaN(number))
    if (checkbox1.checked)
    {
        let F = Math.floor(number*(9/5)+32);
        message1.textContent=F + "℉";
    }
    else if(checkbox2.checked)
    {
        let C = Math.floor((number-32)*(5/9));
        message1.textContent=C + "℃";
    }
    else{
        message1.textContent="Enter a number";
    }
}

const button = document.getElementById('mysubmit'); //this is the submitt button ID
const Animate = document.getElementById('animating');//this is the div we want to animate
const enter_no = document.getElementById('enter');//the element we used to enter the number

button.addEventListener("click",function(){
    Animate.classList.add("active");//this function will apply the CSS if the submitt button is clicked
});

enter_no.addEventListener("click",function(){//when we start to enter the number in the field then the div will start to fade away
    Animate.classList.remove("active");
})


