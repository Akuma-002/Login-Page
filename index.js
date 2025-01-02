
let pageL = 0;
let pageS = 0;

let user ;
let pass;


//veriable ;
let main = document.querySelector(".main");
let singUp = document.querySelector(".singUp");
let singUpForm = document.querySelector(".singUpForm");
let singUpInputu = document.querySelector(".singUpForm .username");
let singUpInputp = document.querySelector(".singUpForm .password");

let body = document.querySelector("body");

let login = document.querySelector(".login");
let loginForm = document.querySelector(".loginForm");
let loginInputu = document.querySelector(".loginForm .username");
let loginInputp = document.querySelector(".loginForm .password");



loginInputu.setAttribute("id", "hid");
loginInputp.setAttribute("id", "hid");


singUpInputu.setAttribute("id", "hid");
singUpInputp.setAttribute("id", "hid");

singUp.classList.add("deaf");
login.classList.add("deaf");




singUpForm.addEventListener("submit", async(event)=>{
    event.preventDefault();
    if(pageS == 0){
        singUp.classList.remove("deaf");
        login.classList.remove("deaf");
        singUp.classList.remove("cur2");
        singUp.classList.add("cur");
        login.classList.remove("cur");
        login.classList.add("cur2");
        loginInputu.setAttribute("id", "hid");
        loginInputp.setAttribute("id", "hid");
        setTimeout(() => {
            singUpInputu.setAttribute("id", "");
            singUpInputp.setAttribute("id", "");
            
            pageS++;
        }, 700); 
        if(pageL != 0){
            pageL--;
        }
        
    }
    else{
        
    }
});


loginForm.addEventListener("submit", async(event)=>{
    event.preventDefault();
    if(pageL == 0){
        singUp.classList.remove("deaf");
        login.classList.remove("deaf");
        login.classList.remove("cur2");
        login.classList.add("cur");
        singUp.classList.remove("cur");
        singUp.classList.add("cur2");
        singUpInputu.setAttribute("id", "hid");
        singUpInputp.setAttribute("id", "hid");

        setTimeout(() => {
            loginInputu.setAttribute("id", "");
            loginInputp.setAttribute("id", "");
            pageL++;
        }, 700)
        if(pageS != 0){
            pageS--;
        }
    
        
    }

    else if(pageL == 1){
        user = loginInputu.value;
        pass = loginInputp.value;
        if(user.toUpperCase() == "SAHIL" && pass == 123){
            body.classList.remove("bodyRed");
            window.location.href="main.html";

        }
        else{
            body.classList.add("bodyRed");
            alert("Wrong Input!");
        }
    }
});




const express = require("express");
const app = express();
const port = 8080;


app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});