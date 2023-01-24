// window.addEventListener('scroll',function(){
// let navbar=document.getElementById('menu-bar')
   

// if(window.pageYOffset >= 191){
//          navbar.classList.add('sticky'); 
//     }else{
//         navbar.classList.remove('sticky')
//     }
// })

//mee
window.addEventListener('scroll',function(){
 let  nav=this.document.getElementById('menu-bar');
 if(window.pageYOffset>=191){
    nav.classList.add('sticky')
 }else{
    nav.classList.remove('sticky')
 }
})