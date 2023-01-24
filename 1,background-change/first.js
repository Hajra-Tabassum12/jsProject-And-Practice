function background(color){
    document.body.style.backgroundColor=color;

    if(color=='black'){
        let bb=document.getElementsByClassName('btnb')
        for(let elm of bb){
            elm.style.color="white";
        }
    }else{
            elm.style.color="black"
        }
    }
