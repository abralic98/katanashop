// hoveranje preko slajdera

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


// 3 diva da se pomicu gore na hover

function pomakniGore(a){
    let bar=document.getElementsByClassName("slikaOpis");
    bar[a].style.animation="pomakniGore .5s forwards";
}

function pomakniDole(a){
    let bar=document.getElementsByClassName("slikaOpis");
    bar[a].style.animation="pomakniDole .5s forwards";
}

let brojItemaArray=0;
let cijenaUkupno=0;
// ARRAY SA ITEMIMA

function dodajItem(brojItema){
    brojItemaArray++;
    
    let noviHTML
    let ime=document.getElementsByClassName("opisElementaP");
    let cijena=document.getElementsByClassName("cijenaElementaP");
    let editovanje=document.getElementsByClassName("listaItema"); //cili blok
    let empty=document.getElementsByClassName("addITEMS");
    let finalnaCijena=document.getElementsByClassName("zbrojenaCijena");
    let headerCijena=document.getElementsByClassName("cijenaCart");
    
   
    
    
    
    empty[0].innerHTML="ITEMS: "+brojItemaArray;
    
    let stariHTML=editovanje[0].innerHTML;   
    
    
    let objekt=new item(ime[brojItema].innerHTML,cijena[brojItema].innerHTML);
    items.push(objekt)
    console.log(items);
    let cijenaBez$; 
    cijenaBez$=cijena[brojItema].innerHTML.substring(1);
    for(let i=0; i<items.length; i++){
        noviHTML=stariHTML+
    `<div class="cartItem">
        <p class="imeModela">${items[i].ime}</p>
        <div class="cartLinija">
        </div>
        <p class="cijenaModela">${items[i].cijena}</p>
        <div onclick="obrisiItem(${i},${items[i].cijena.substring(1)})"class="cartX">
            <p> X </p> 
        </div>
    </div>`;
    //console.log(items[i].ime)
    //console.log(brojItema)
    //console.log(noviHTML)
    //console.log("broj puta: "+i)
    }
    
    //console.log(noviHTML)
    editovanje[0].innerHTML=noviHTML;   
    univerz=Number(univerz)+Number(cijenaBez$);
    console.log(univerz)
    finalnaCijena[0].innerHTML="$"+univerz;
    headerCijena[0].innerHTML="$"+univerz;
    headerCijena[1].innerHTML="$"+univerz;
    console.log(items.length)
    
}

function obrisiItem(brojItema,cena){
    brojItemaArray--
    let noviHTML;
    let ime=document.getElementsByClassName("opisElementaP");
    let cijena=document.getElementsByClassName("cijenaElementaP");
    let editovanje=document.getElementsByClassName("listaItema");
    let empty=document.getElementsByClassName("addITEMS");
    let finalnaCijena=document.getElementsByClassName("zbrojenaCijena");
    let headerCijena=document.getElementsByClassName("cijenaCart");
    
    empty[0].innerHTML="ITEMS: "+brojItemaArray;
    let cijenaBez$; 
    let stariHTML="";   
    cijenaBez$=items[brojItema].cijena.substring(1);
    
    if(brojItema>-1){
        items.splice(brojItema,1)
    }
    console.log(items)
    
    //console.log(cijenaBez$+ " OVO JE CIJENA TRENUTNOG ITEMA OBRISANOG")
    //console.log(items.length)
    for(let i=0; i<items.length; i++){
        stariHTML=stariHTML+
    `<div class="cartItem">
        <p class="imeModela">${items[i].ime}</p>
        <div class="cartLinija">
        </div>
        <p class="cijenaModela">${items[i].cijena}</p>
        <div onclick="obrisiItem(${i},${items[i].cijena.substring(1)})"class="cartX">
            <p> X </p> 
        </div>
    </div>`;
    //console.log(items[i].ime)
    //console.log(brojItema)
    //console.log(noviHTML)
    //console.log("broj puta: "+i)
    
    }
    
    cijenaBez$=cena;
    //console.log(cijenaBez$+ " OVO JE CIJENA TRENUTNOG ITEMA OBRISANOG NAKON PETLJE")
    editovanje[0].innerHTML=stariHTML;   
    console.log(cena+ " CENA")
    univerz=Number(univerz)-Number(cijenaBez$);
    console.log(univerz)
    finalnaCijena[0].innerHTML="$"+univerz;
    headerCijena[0].innerHTML="$"+univerz;
    headerCijena[1].innerHTML="$"+univerz;
    

    
}
let items=[];

function item(ime,cijena){
    this.ime=ime;
    this.cijena=cijena;
}

function cancel(){
    let blok=document.getElementsByClassName("pcCartBar");
    blok[0].style.animation="cartNestani 1s forwards";
    setTimeout(displayNoneCart,2000);
   
}

function cartStvori(){
    let blok=document.getElementsByClassName("pcCartBar");
    blok[0].style.display="block";
    blok[0].style.animation="cartStvoriSe 1s forwards";
}

function displayNoneCart(){
    let blok=document.getElementsByClassName("pcCartBar");
    blok[0].style.display="none";
}


// FAQ DIO

let brojrotiranja=-1;

function prebaciHOME(){
    cijenaUkupno=cijenaUkupnoStore;
    let home=document.getElementById("homeDio").style.display="block";
    let faq=document.getElementById("faqDio").style.display="none";
    let contact=document.getElementById("contactDio").style.display="none";
    let store=document.getElementById("storeDio").style.display="none";
    let element=document.getElementById("elementDio").style.display="none"
    brojElementa=0;
    let ime=document.getElementsByClassName("opisElementaP");
    let cijena=document.getElementsByClassName("cijenaElementaP");

        ime[0].innerHTML="Tanto Knife 1060 Carbon Steel With Matt Black Saya";
        cijena[0].innerHTML="$149";
        ime[1].innerHTML="Battle Ready Katana Sword T10 Clay Tempered Steel Blue Acid Dye with White Saya";
        cijena[1].innerHTML="$349";
        ime[2].innerHTML="Battle Ready Katana Choji Hamon T10 Clay Tempered Steel with Hadori Polish";
        cijena[2].innerHTML="$549";
        ime[3].innerHTML="Japanese Tanto Blade 1095 Folded Steel";
        cijena[3].innerHTML="$239"
        ime[4].innerHTML="Battle Ready Katana 1060 Carbon Steel with Sparkle Black Hardwood Saya";
        cijena[4].innerHTML="$279";
        ime[5].innerHTML="1060 Carbon Steel Tanto Knife With Matt Black Sun Tzu saya";
        cijena[5].innerHTML="$179";
        ime[6].innerHTML="Battle Ready Shirasaya Katana T10 Folded Clay Tempered Steel Gloss Black Sun Tzu Saya";
        cijena[6].innerHTML="$469";
        ime[7].innerHTML="Japanese Katana T10 Folded Clay Tempered Steel with Hadori Polish";
        cijena[7].innerHTML="$799";
        ime[8].innerHTML="Shirasaya Tanto 1095 Folded Steel with Ebony Wood Saya";
        cijena[8].innerHTML="$329";
        ime[9].innerHTML="Battle Ready Katana Samurai Sword T10 Clay Tempered Steel with Black Acid Dye";
        cijena[9].innerHTML="$429";
        ime[10].innerHTML="Hexagon Rosewood Shirasaya T10 Clay Tempered Steel Kiriha Zukuri";
        cijena[10].innerHTML="$429";
        ime[11].innerHTML="Samurai Nodachi Sword 1060 Carbon Steel with White Saya";
        cijena[11].innerHTML="$349";
    pozoviKlasuItema(0,12);
}


function prebaciFAQ(){
    let home=document.getElementById("homeDio").style.display="none";
    let faq=document.getElementById("faqDio").style.display="block";
    let contact=document.getElementById("contactDio").style.display="none";
    let store=document.getElementById("storeDio").style.display="none";
    let element=document.getElementById("elementDio").style.display="none"
}

function prebaciContact(){
    let home=document.getElementById("homeDio").style.display="none";
    let faq=document.getElementById("faqDio").style.display="none";
    let contact=document.getElementById("contactDio").style.display="flex";
    let store=document.getElementById("storeDio").style.display="none";
    let element=document.getElementById("elementDio").style.display="none"
}

function zarotirajStrelicu(brojStrelice){
    brojrotiranja++
    let strelica=document.getElementsByClassName("faqStrelica");
    let linija=document.getElementsByClassName("pitanjaLinija");
    let odgovor=document.getElementsByClassName("odgovor");
    for(let i=0; i<linija.length; i++){
        if(i!=brojStrelice){
            linija[i].style.background="white";
            odgovor[i].style.display="none";
            if(brojrotiranja>0){
                strelica[i].style.animation="strelicaRotateR .5s forwards";
            }
            
        }
    }
    if(linija[brojStrelice].style.background!="red"){
        strelica[brojStrelice].style.animation="strelicaRotate .5s forwards";
        linija[brojStrelice].style.background="red";
        odgovor[brojStrelice].style.display="block";
        
    }else{
        strelica[brojStrelice].style.animation="strelicaRotateR .5s forwards";
        linija[brojStrelice].style.background="white";
        odgovor[brojStrelice].style.display="none";
    }
  
}






