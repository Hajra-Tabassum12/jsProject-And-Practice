//images=4 (0,1,2,3)//3+1=4  ye hai hi nhi to slideshow mein condition ladaye

let flag=0;

function controller(x){
    flag=flag+x    //left  flag=2+(-1)=1
    slideShow(flag)

}                   //right flag=2+1=3

slideShow(flag);

function slideShow(num){
    let slides=document.getElementsByClassName('slide');
    // console.log(slides);

if(num == slides.length){
      flag=0;
      num=0
}
if(num<0){
    flag=slides.length-1;
    num= slides.length-1;
}

for(let y of slides){
    y.style.display='none';
}

    slides[num].style.display='block'
}