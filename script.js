
const passwordBox=document.getElementById("pass");

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmmnopqrstuvwxyz";
const num="1234567890";
const symbol="!@#$%^&*(){}|:;";

let length=12;
const allChar=upperCase+lowerCase+num+symbol;


let  generatePassword=(()=>{
   let password="";
   password+=upperCase[Math.floor(Math.random()*upperCase.length)];
   password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
   password+=num[Math.floor(Math.random()*num.length)];
   password+=symbol[Math.floor(Math.random()*symbol.length)];
 
   while(length>password.length){
    password+=allChar[Math.floor(Math.random()*allChar.length)];
   }


   passwordBox.value=password

})

document.querySelector("button").addEventListener("click",(()=>{
    generatePassword();
}))


let copyPass=(()=>{
    passwordBox.select()
    document.execCommand("copy");
})

document.querySelector(".display img").addEventListener("click",(()=>{
    copyPass();
}))