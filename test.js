let random_no = Math.floor(Math.random()*6 + 1);//random number between 1-6
console.log(random_no);


let max=100;
let min=50;
let random_ = Math.floor(Math.random()* (max-min) + min);//random number between 1-6
console.log(random_);

const result = document.getElementById("checkbox1");
mysubmit.onclick=function(){/*work if only we click on the butoon label*/
    if(checkbox1.checked)
    {
        message1.textContent = `You have subscribed using Nayapay`;
    }
    else if(checkbox2.checked)
    {
        message1.textContent = `You have not subscribed using Paypal`;
    }
    else
    {
        message1.textContent = `Check some box to further proceed`;
    }
}

let username="broscode";
console.log(username.charAt(7));
console.log(username.indexOf("o")); 

/* string slicing*/
let emial="nasirmahmoodx@gmail.com"
console.log(emial.slice(0,emial.indexOf("@")));
console.log(emial.slice(emial.indexOf("g")));
