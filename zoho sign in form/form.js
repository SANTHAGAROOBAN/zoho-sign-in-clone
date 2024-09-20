// window.scrollTo(0,200);

window.onload= function(){
    console.log('hello');
       
}
window.addEventListener('scroll',()=>{
    console.log('mm')
    var a=window.scrollY;
    console.log(a)
})


var mfa=document.querySelector('.rightside_container_two');
var passwordless=document.querySelector('.rightside_container_one');
passwordless.classList.add('slider');

function changePasswordless(){
    mfa.style.visibility='hidden';
    mfa.classList.remove('slider');
    passwordless.classList.add('slider');
    passwordless.style.visibility='visible';
    dot2.classList.remove('increase');
    dot1.classList.add('increase');
    cont2.style.visibility='hidden';
    cont1.style.visibility='visible';
}
function changeMfa(){
    passwordless.style.visibility='hidden';
    passwordless.classList.remove('slider');
    mfa.classList.add('slider');
    mfa.style.visibility='visible'; 
    dot1.classList.remove('increase');
    dot2.classList.add('increase');
    cont1.style.visibility='hidden';
    cont2.style.visibility='visible';
}

var cont1=document.querySelector('.cont1');
var cont2=document.querySelector('.cont2');
var dot1=document.querySelector(".dot1");
var dot2=document.querySelector('.dot2');

cont1.style.visibility='visible';
cont2.style.visibility='hidden';


function outochange(){
    console.log('working')
    if(cont1.style.visibility==='visible'){
        changeMfa();
    }
    else{
        changePasswordless();
    }   
    
}
var sssss=document.querySelectorAll('.nn')
var rm=document.querySelectorAll('.rm');
for(let i=0;i<rm.length;i++){
    rm[i].addEventListener('click',function(){
        // document.querySelector('.n1').style.backgroundColor='#0091FF';
        // document.querySelector('.n2').style.backgroundColor='#0091FF';
        clearInterval(outointerval);
    });
}

var outointerval=setInterval(outochange,4000);
