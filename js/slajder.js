let broj=3;



function uLivo(){   
    broj--;
    console.log(broj);
    if(broj<0){
        broj=0;
        return
    }
    const livoDugme=document.getElementById("a");
    const desnoDugme=document.getElementById("pcDesnoDugme");

    let slides=document.getElementsByClassName("slide");

    for(let i=0; i<slides.length; i++){
        slides[i].style.transform=`translate(${-broj*100}%)`;
    }

}

function uDesno(){

    broj++;
    console.log(broj);
    if(broj>6){
        broj=6;
        return;
    }
    const livoDugme=document.getElementById("a");
    const desnoDugme=document.getElementById("pcDesnoDugme");

    let slides=document.getElementsByClassName("slide");
    for(let i=0; i<slides.length; i++){
        slides[i].style.transform=`translate(${-broj*100}%)`;
    }

}