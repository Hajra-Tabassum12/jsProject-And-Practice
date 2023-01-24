jackpot=()=>{
const one1=Math.floor(Math.random()*6)+1;
const one1dice=`./dice-${one1}.jpg`;
document.getElementById('check1').setAttribute('src',one1dice);


if(one1==1){
    document.querySelector('h1').innerHTML='you won 100rs'
}else if(one1==2){
    document.querySelector('h1').innerHTML='you won 90rs'
}else if(one1==3){
    document.querySelector('h1').innerHTML='you won 80rs'
}else if(one1==4){
    document.querySelector('h1').innerHTML='you won 70rs'
}else if(one1==5){
    document.querySelector('h1').innerHTML='you won 60rs'
}else if(one1==6){
    document.querySelector('h1').innerHTML='you won jackpot'
}






}