var modal=document.getElementById("modal");var signUp=document.getElementById("sign-up");var signForm=document.getElementById("sign-up-form")
var logIn=document.getElementById("log-in")
var logForm=document.getElementById("log-in-form")
var sMsg=document.getElementsByClassName("message")[0];var lMsg=document.getElementsByClassName("message")[1];var span=document.getElementsByClassName("close")[0];var pmodal=document.getElementById("pmodal");if(signUp){signUp.onclick=function(){modal.style.display="block";signForm.style.display="block";logForm.style.display="none";}}
if(logIn){logIn.onclick=function(){modal.style.display="block";signForm.style.display="none";logForm.style.display="block";}}
span.onclick=function(){modal.style.display="none";pmodal.style.display="none";if(sMsg){sMsg.remove();lMsg.remove();}}
window.onclick=function(event){if(event.target==modal){modal.style.display="none";if(sMsg){sMsg.remove();lMsg.remove();}}
if(event.target==pmodal){pmodal.style.display="none";}}
function submitForm(){modal.style.display="none";}
function checkModals(modalNum){if(modalNum===1){modal.style.display="block";signForm.style.display="block";logForm.style.display="none";}else if(modalNum===2){modal.style.display="block";signForm.style.display="none";logForm.style.display="block";}}
function postClick(image,title,caption,user){pmodal.style.display="block";document.getElementById("puser").innerHTML=user;document.getElementById("pimg").src=image;document.getElementById("pimg").alt=title;document.getElementById("ptitle").innerHTML=title;document.getElementById("pcaption").innerHTML=caption;document.getElementById("puser").href='/user/'+user;}