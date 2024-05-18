let container = document.querySelector(".container");
let signuppage = document.querySelector(".signuppage");
let btnforsignup = document.querySelector(".btnforsignup");
let loginpage = document.querySelector(".loginpage");
let btnforlogin = document.querySelector(".btnforlogin");

let flag = 0;
let flag2 = 0;

signuppage.classList.add("hide");
btnforsignup.addEventListener("click",function(){
    if(flag == 0){
      container.classList.add("hide");
      signuppage.classList.remove("hide");
    }
})
loginpage.classList.add("hide");
btnforlogin.addEventListener("click",function(){
    if(flag2 == 0){
      container.classList.add("hide");
      loginpage.classList.remove("hide");
    }
})