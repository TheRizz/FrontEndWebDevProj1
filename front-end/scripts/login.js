var x = document.getElementById('login'); // X is the login line 
var y = document.getElementById('register'); //Y is the password line 
var z = document.getElementById('btn'); //Z is the button 

// There is two forms, a log in form and a register form. The following functions below move the postion of the forms 
// in order for them to become visible in the log in box (white box). It is just shifting the postions. 
function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}