var cel=document.getElementById("cel");
var fah=document.getElementById("fah");

cel.addEventListener('input',function(){
   let c = this.value;
   let f = (c * 9/5) + 32;
   if(!Number.isInteger(f)){
    f=f.toFixed(4)
   }
   fah.value=f
});

fah.addEventListener('input',function(){
   let f= this.value;
   let c=(f - 32)*5/9;
   if(!Number.isInteger);
   c=c.toFixed(4)
   cel.value=c;
});


// mee
//  let cels=document.getElementById('cel');
//  let fahren=document.getElementById('fah');


// cels.addEventListener('input',function(){
//       let c = this.value;
//        let f = (c * 9/5) + 32;
//        if(!Number.isInteger(f)){
//         f1=f.toFixed(4)
//        }
//        fahren.value=f
       
//     });

//  fahren.addEventListener('input',function(){
//    let f=this .value
//    let c=(f-32)* 5/9
//    if(!Number.isInteger){
//       c1=c.toFixed(4);
//    }
//       cels.value=c
   
//  })