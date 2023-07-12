import{
    CheckVal,clearemailbox,refilemailbox
} from './Functionality.js';

window.onload = function() {
    document.getElementById("phone").value="+92 "
    document.getElementById("email").value="abc@mail.com"
}

window.onclick_SignUp=onclick_SignUp;
window.fillemail=fillemail;
window.clear_email=clear_email;
function onclick_SignUp(){
   if(CheckVal()===true){
    var x=document.getElementById("alert")   
    x.innerHTML=""; 
    document.getElementById("signup_Form").reset();
   }
}
function fillemail(){
    refilemailbox()
}
function clear_email(){
    clearemailbox()
}
