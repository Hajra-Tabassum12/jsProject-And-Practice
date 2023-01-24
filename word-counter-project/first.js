let textbox=document.getElementById('textbox');
textbox.addEventListener('input',function(){
    let text=this.value;
    let x=text.length
    document.getElementById('char').innerHTML=x;


       text=text.trim();         //(ii)   start or end ka space hatane ke liye trim ka use karte:
   let words=text.split(" ");     // (i)  space aya to tod dera character ko or usko 1 word lera
    
   let cleanList= words.filter(function(elm){ //(iii)  bich ke space nhi count hunge ,space ko filter karta uske space ko hata ke hum ko word deta
        return elm != "";
   })


    document.getElementById('word').innerHTML=cleanList.length;
})