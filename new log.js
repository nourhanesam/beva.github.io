let welcome= document.getElementById('welcome');
let register= document.getElementById('register');
let login= document.getElementById('login');
let btncreat= document.getElementsByClassName('creat')[0];
let btnlog= document.getElementsByClassName('log')[0];
let row= document.getElementsByClassName('row')[0];
let arrow=  document.getElementById('arrow');
let arrowlog= document.getElementsByClassName('arrow')[0];
let dark=document.getElementsByClassName('mode-images')[0];
let or= document.getElementById('or');
btncreat.onclick= function(){
    welcome.classList.add('hide');
    register.classList.remove('hide');
    row.style.backgroundColor='rgba(233, 160, 224, 0.99)'; ;
}
btnlog.onclick= function(){
    welcome.classList.add('hide');
    login.classList.remove('hide');
    row.style.backgroundColor='rgba(253, 244, 252, 0.99)';
}
arrow.onclick= function(){ 
    login.classList.add('hide');
    register.classList.add('hide');
    welcome.classList.remove('hide');
    row.style.backgroundColor='rgba(233, 160, 224, 0.99)'; ; 
}
arrowlog.onclick = function(){
    login.classList.add("hide");
    welcome.classList.remove('hide');
    row.style.backgroundColor='rgba(233, 160, 224, 0.99)'; 
}
dark.onclick=function(){
    document.body.style.backgroundColor= '#322f2f';
    row.style.backgroundColor='rgba(233, 160, 224, 0.99)'; 
    or.style.color='white';
}
