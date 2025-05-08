let welcome= document.getElementById('welcome');
let register= document.getElementById('register');
let login= document.getElementById('login');
let btncreat= document.getElementsByClassName('creat')[0];
let btnlog= document.getElementsByClassName('log')[0];
let row= document.getElementsByClassName('row')[0];
let arrow=  document.getElementById('arrow');
let arrowlog= document.getElementsByClassName('arrow')[0];
btncreat.onclick= function(){
    welcome.classList.add('hide');
    register.classList.remove('hide');
    row.style.backgroundColor='rgba(247, 228, 245, 0.65)';
}
btnlog.onclick= function(){
    welcome.classList.add('hide');
    login.classList.remove('hide');
    row.style.backgroundColor='rgba(247, 228, 245, 0.65)';
}
arrow.onclick= function(){ 
    login.classList.add('hide');
    register.classList.add('hide');
    welcome.classList.remove('hide');
    row.style.backgroundColor='rgba(170, 17, 117, 0.333)'; 
}
arrowlog.onclick = function(){
    login.classList.add("hide");
    welcome.classList.remove('hide');
    row.style.backgroundColor='rgba(170, 17, 117, 0.333)'; 
}