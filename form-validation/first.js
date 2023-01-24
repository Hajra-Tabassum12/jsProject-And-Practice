let username=document.getElementById('uname');
let password=document.getElementById('passwd');
let flag=1;
function  validateForm(){
    // return true;             //validate function ager return  true pass hua to submit ager false hua unsubmit
if(username.value==""){
  document.getElementById("userError").innerHTML='user name is empty';
   flag=0
}else if(username.value.length<3){
    document.getElementById("userError").innerHTML='user name required three character';
flag=0
}else{
    document.getElementById("userError").innerHTML='';
    flag=1
}
 if(password.value ==""){
    document.getElementById('pError').innerHTML="password is empty";
    flag=0
 }else{
    document.getElementById('pError').innerHTML="";
    flag=1
 }
  if(flag){
    return true;
  }else{
    return false;
  }

}