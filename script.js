let email=document.querySelector("#email");
let paswrd=document.querySelector("#password");
let frm=document.querySelector("#frm");


 
frm.addEventListener("submit",function(dets){
    dets.preventDefault();

 document.querySelector("#emailerror").textContent="";
 document.querySelector("#passerror").textContent="";
isvalid=true;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



let emailans=emailRegex.test(email.value);//return the value by true or false
let paswrdans=passwordRegex.test(paswrd.value);

if(!emailans){
    document.querySelector("#emailerror").textContent="your email is incorrect";
    document.querySelector("#emailerror").style.display="initial";
    isvalid=false;
}

if(!paswrdans){
    document.querySelector("#passerror").textContent="your password is incorrect";
    document.querySelector("#passerror").style.display="initial";
    isvalid=false;
}

if(isvalid){
    document.querySelector(".resultmassg").textContent="Everything is correct";
}else{
        document.querySelector(".resultmassg").textContent="Check your email and password ";

}

email.value="";
paswrd.value="";
});