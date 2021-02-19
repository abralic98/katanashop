// hoveranje preko slajdera
function obrisimesutra(){
    
}
function minus3slajd(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[0].style.display="block";
    slideopis[0].style.display="block";
}

function minus3slajdR(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[0].style.display="none";
    slideopis[0].style.display="none";
}

function minus2slajd(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[1].style.display="block";
    slideopis[1].style.display="block";
}

function minus2slajdR(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[1].style.display="none";
    slideopis[1].style.display="none";
}

function minus1slajd(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[2].style.display="block";
    slideopis[2].style.display="block";
}

function minus1slajdR(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[2].style.display="none";
    slideopis[2].style.display="none";
}

function nulaslajd(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[3].style.display="block";
    slideopis[3].style.display="block";
}

function nulaslajdR(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[3].style.display="none";
    slideopis[3].style.display="none";
}

function jedanslajd(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[4].style.display="block";
    slideopis[4].style.display="block";
}

function jedanslajdR(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[4].style.display="none";
    slideopis[4].style.display="none";
}

function dvaslajd(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[5].style.display="block";
    slideopis[5].style.display="block";
}

function dvaslajdR(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[5].style.display="none";
    slideopis[5].style.display="none";
}

function trislajd(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[6].style.display="block";
    slideopis[6].style.display="block";
}

function trislajdR(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[6].style.display="none";
    slideopis[6].style.display="none";
}

function cetslajd(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[7].style.display="block";
    slideopis[7].style.display="block";
}

function cetslajdR(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[7].style.display="none";
    slideopis[7].style.display="none";
}

function petslajd(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[8].style.display="block";
    slideopis[8].style.display="block";
}

function petslajdR(){
    let crno=document.getElementsByClassName("slidecrno");
    let slideopis=document.getElementsByClassName("slideopis");

    crno[8].style.display="none";
    slideopis[8].style.display="none";
}

// HOVERANJE PREKO NOVI MODELA

let brojElementaAnimacije;
function stvoriElementAnimacije(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    animacija[broj].style.display="block";
}

function obrisiElementAnimacije(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    animacija[broj].style.display="none";
}



function prviModel(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    let slika=document.getElementsByClassName("slikaElementaIMG");
    brojElementaAnimacije=0;
    stvoriElementAnimacije(brojElementaAnimacije);
    slika[broj].src="images/novekatane/1_2.jpg"
    animacija[0].style.animation="stvoriElement .3s forwards";
}

function prviModelR(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=0;
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/1_1.jpg"
    animacija[0].style.animation="brisiElement .3s forwards";
    setTimeout(obrisiElementAnimacije(brojElementaAnimacije),1000);
    
}

function drugiModel(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=1;
    stvoriElementAnimacije(brojElementaAnimacije);
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/2_2.jpg"
    animacija[1].style.animation="stvoriElement .3s forwards";
}

function drugiModelR(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=1;
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/2_1.jpg"
    animacija[1].style.animation="brisiElement .3s forwards";
    setTimeout(obrisiElementAnimacije(brojElementaAnimacije),1000);
    
}

function treciModel(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=2;
    stvoriElementAnimacije(brojElementaAnimacije);
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/3_2.jpg"
    animacija[2].style.animation="stvoriElement .3s forwards";
}

function treciModelR(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=2;
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/3_1.jpg"
    animacija[2].style.animation="brisiElement .3s forwards";
    setTimeout(obrisiElementAnimacije(brojElementaAnimacije),1000);
    
}

function cetModel(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=3;
    stvoriElementAnimacije(brojElementaAnimacije);
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/4_2.jpg"
    animacija[3].style.animation="stvoriElement .3s forwards";
}

function cetModelR(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=3;
    animacija[3].style.animation="brisiElement .3s forwards";
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/4_1.jpg"
    setTimeout(obrisiElementAnimacije(brojElementaAnimacije),1000);
    
}

function petModel(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=4;
    stvoriElementAnimacije(brojElementaAnimacije);
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/5_2.jpg"
    animacija[4].style.animation="stvoriElement .3s forwards";
}

function petModelR(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=4;
    animacija[4].style.animation="brisiElement .3s forwards";
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/5_1.jpg"
    setTimeout(obrisiElementAnimacije(brojElementaAnimacije),1000);
    
}

function sestModel(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=5;
    stvoriElementAnimacije(brojElementaAnimacije);
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/6_2.jpg"
    animacija[5].style.animation="stvoriElement .3s forwards";
}

function sestModelR(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=5;
    animacija[5].style.animation="brisiElement .3s forwards";
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/6_1.jpg"
    setTimeout(obrisiElementAnimacije(brojElementaAnimacije),1000);
    
}

function sedamModel(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=6;
    stvoriElementAnimacije(brojElementaAnimacije);
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/7_2.jpg"
    animacija[6].style.animation="stvoriElement .3s forwards";
}

function sedamModelR(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=6;
    animacija[6].style.animation="brisiElement .3s forwards";
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/7_1.jpg"
    setTimeout(obrisiElementAnimacije(brojElementaAnimacije),1000);
    
}

function osamModel(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=7;
    stvoriElementAnimacije(brojElementaAnimacije);
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/8_2.jpg"
    animacija[7].style.animation="stvoriElement .3s forwards";
}

function osamModelR(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=7;
    animacija[7].style.animation="brisiElement .3s forwards";
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/8_1.jpg"
    setTimeout(obrisiElementAnimacije(brojElementaAnimacije),1000);
    
}

function devetModel(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=8;
    stvoriElementAnimacije(brojElementaAnimacije);
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/9_2.jpg"
    animacija[8].style.animation="stvoriElement .3s forwards";
}

function devetModelR(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=8;
    animacija[8].style.animation="brisiElement .3s forwards";
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/9_1.jpg"
    setTimeout(obrisiElementAnimacije(brojElementaAnimacije),1000);
    
}

function desetModel(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=9;
    stvoriElementAnimacije(brojElementaAnimacije);
    animacija[9].style.animation="stvoriElement .3s forwards";
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/10_2.jpg"
}

function desetModelR(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=9;
    animacija[9].style.animation="brisiElement .3s forwards";
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/10_1.jpg"
    setTimeout(obrisiElementAnimacije(brojElementaAnimacije),1000);
    
}

function jedanaestModel(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=10;
    stvoriElementAnimacije(brojElementaAnimacije);
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/11_2.jpg"
    animacija[10].style.animation="stvoriElement .3s forwards";
}

function jedanaestModelR(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=10;
    animacija[10].style.animation="brisiElement .3s forwards";
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/11_1.jpg"
    setTimeout(obrisiElementAnimacije(brojElementaAnimacije),1000);
    
}

function dvanaestModel(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=11;
    stvoriElementAnimacije(brojElementaAnimacije);
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/12_2.jpg"
    animacija[11].style.animation="stvoriElement .3s forwards";
}

function dvanaestModelR(broj){
    let animacija=document.getElementsByClassName("animacijaElementa");
    brojElementaAnimacije=11;
    animacija[11].style.animation="brisiElement .3s forwards";
    let slika=document.getElementsByClassName("slikaElementaIMG");
    slika[broj].src="images/novekatane/12_1.jpg"
    setTimeout(obrisiElementAnimacije(brojElementaAnimacije),1000);
    
}

// dugme add to cart
// skonta sam da mogu dodat parametar u html olaksalo sve
function prvoDugme(broj){
    let dugme=document.getElementsByClassName("dugmeKupide");
    let tekst=document.getElementsByClassName("addToCart");

    dugme[broj].style.animation="bojanjeDugme 1s forwards";
    tekst[broj].style.animation="bojanjeCart 1s forwards";
}

function prvoDugmeR(broj){
    let dugme=document.getElementsByClassName("dugmeKupide");
    let tekst=document.getElementsByClassName("addToCart");

    dugme[broj].style.animation="bojanjeDugmeR 1s forwards";
    tekst[broj].style.animation="bojanjeCartR 1s forwards";
}