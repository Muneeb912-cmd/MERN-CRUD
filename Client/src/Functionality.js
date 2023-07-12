// import{disp} from './SqlManager.js';
export function CheckVal(){
    var firstname=document.getElementById("firstname").value;
    var lastname=document.getElementById("lastname").value;
    var birthday=document.getElementById("birthday").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;
    var x=document.getElementById("alert");
    if(firstname!==""){
        if(lastname!==""){
            if(birthday!==""){
               if(email!==""||email==="abc@mail.com"){
                if(phone!==""){
                    if(password!==""){
                        if(confirmpassword!==""){
                            if(GetVal(firstname,lastname,birthday,email,password,confirmpassword,phone)===true)
                            {
                                return true;
                            }else{
                                return false;
                            }
                        }else{
                            x.innerHTML="Notice: Confirm Password Missing!";
                           // alert("Confrm Password Missing!");
                        }                        
                    }else{
                        x.innerHTML="Notice: Password Missing!";
                       // alert("Password Missing!");
                    }
                }else{
                    x.innerHTML="Notice: Phone Number Missing!";
                   // alert("Phone Number Missing!");
                }
               }else{
                x.innerHTML="Notice: Email Missing!";
                //alert("Email Missing!");
               }
            }else{
                x.innerHTML="Notice: BirthDay Missing!";
                //alert("BirthDay Missing!");
            }
        }else{
            x.innerHTML="Notice: Last Name Missing!";
           // alert("Last Name Missing!");
        }
    }else{
        x.innerHTML="Notice: First Name Missing!";
        //alert("First Name Missing!");
    }
    
}
export function GetVal(firstname,lastname,birthday,email,password,confirmpassword,phone){    
    var x=document.getElementById("alert")
    if(NameValidaator(firstname)===true){
        if(NameValidaator(lastname)===true){
            if(DateValidator(birthday)===true){
                if(EmailValidator(email)===true){
                    if(PhoneValidator(phone)){
                        if(password===confirmpassword){
                            return true;
                        }else{
                            x.innerHTML="Notice: Passwords Don't Match!";
                            //alert("Passwords Don't Match!");
                        }
                    }else{
                        x.innerHTML="Notice: Phone Number Invalid!";
                        //alert("Phone Number Invalid!");
                    }
                }else{
                    x.innerHTML="Notice: Email Invalid";
                    //alert("Email Invalid");
                }
            }else{
                x.innerHTML="Notice: Date of Birth Invalid!";
                //alert("Date of Birth Inalid!");    
            }
        }else{
            x.innerHTML="Notice: Last Name Invalid!";
            //alert("Last Name Inalid!");
        }
    }else{
        x.innerHTML="Notice: First Name Invalid!";
        //alert("First Name Inalid!");
    }
}
/**************************************************Validators****************************************************/
function NameValidaator(name){  
    const array=Array.from(name);
    var str="";
    var i=0;
    if(array[0]===array[0].toUpperCase()){   
        for(i=1;i<=array.length;i++){
           str+=array[i];
        }
    }else{
        //alert("First letter of Name should be Capital!");
        return false;
    }    
    if(str===str.toLowerCase()){
        return true;
    }else{
        return false;
    }
}
//Age Validator
function DateValidator(){
    var userinput=document.getElementById("birthday").value;
    var dob= new Date(userinput);
    if(userinput!==""){
        var month_diff = Date.now() - dob.getTime(); 
        var age_dt = new Date(month_diff);   
        var year=age_dt.getFullYear();
        var age = Math.abs(year - 1970);  
        //console.log(age);
        if(age<=99 || age>=16)
            return true;
        else
            return false;
    }else{
        alert("Please enter a valit Date of Birth!");
        return false;
    }
}
//Email Validator
function EmailValidator(email){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex))
        return true;  
    else 
        return false;    
}
//Phone Validator
function PhoneValidator(phone){    
    const array=Array.from(phone.value) 
    var i=0;
    var ph="";
    console.log(array[0]+" "+array[1]+" "+array[2]+" "+array[3])
    if(array[0]==="+"&&array[1]==="9"&&array[2]==="2"&&array[3]===" "){               
        for(i=4;i<array.length;i++){
            //onsole.log(array[i]+" "+i);
            ph+=array[i];
        }
    }else{
        return false;
    }
    //console.log(ph.length+ph)
    if(ph.length===10){
        return true;
    }
}
/**************************************************Validators****************************************************/
export function clearemailbox(){
    if(document.getElementById("email").value==="abc@mail.com"){
        document.getElementById("email").value="";
    }
}
export function refilemailbox(){
    if(document.getElementById("email").value===""){
        document.getElementById("email").value="abc@mail.com";
    }
}
