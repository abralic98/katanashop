// STORE ANIMACIJE
//broj je paramatar u htmlu koji je element kliknut 
//broj2 je parametar vrste metala 0 je default kad stisnes store;
let brojElementa; 
//0 default
//1 1060 modeli
function prebaciStore(){
    let home=document.getElementById("homeDio").style.display="none";
    let faq=document.getElementById("faqDio").style.display="none";
    let contact=document.getElementById("contactDio").style.display="none";
    let store=document.getElementById("storeDio").style.display="flex";
    
    brojElementa=0;
    pozoviKlasuItema(0,12); //da stavi sve na 0 po defaultu
}

function pozoviKlasuItema(broj,brojItema){//broj je 1 2 3..> koju klasu sam izabra brojItema je parametar iz htmla koliko itema ima u toj klasi
    brojElementa=broj;
    let slika=document.querySelectorAll(".pcCrniDioNovi1 .element .slikaElementa .slikaElementaIMG"); //slika element
    let dugme=document.querySelectorAll(".pcCrniDioNovi1 .element .animacijaElementa"); // crveno dugme element
    let ime=document.querySelectorAll(".pcCrniDioNovi1 .element .opisElementa .opisElementaP"); //ime elementa
    let cijena=document.querySelectorAll(".pcCrniDioNovi1 .element .cijenaElementa .cijenaElementaP"); //cijena elementa
    let tekstKlase=document.getElementsByClassName("naslovKlasaSteel");
    for(let i=0; i<8; i++){
        if(i==broj-1){
            tekstKlase[i].style.color="rgb(97, 1, 1)";
        }
        else{
            tekstKlase[i].style.color="white";
        }
    }
    
    if(brojElementa==0){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/novekatane/${i+1}_2.jpg`;
        }
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
    }
    if(brojElementa==1){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/1060/${i+1}_2.jpg`;
        }
        ime[0].innerHTML="1060 Carbon Steel Chinese Dadao Sword With Synthetic Leather Holsters Saya";
        cijena[0].innerHTML="$389";
        ime[1].innerHTML="1060 Carbon Steel Chinese Guandao Sword With Synthetic Leather Holsters Saya";
        cijena[1].innerHTML="$399";
        ime[2].innerHTML="1060 Carbon Steel Chinese Jian Sword With Ebony Wood Saya";
        cijena[2].innerHTML="$249";
        ime[3].innerHTML="1060 Carbon Steel Katana with Engraved Saya";
        cijena[3].innerHTML="$289";
        ime[4].innerHTML="1060 Carbon Steel Tanto Knife With Matt Black Sun Tzu saya";
        cijena[4].innerHTML="$149";
        ime[5].innerHTML="Baton Sword 1060 Carbon Steel With Stainless Steel Saya";
        cijena[5].innerHTML="$289";
        ime[6].innerHTML="Baton Sword 1060 Carbon Steel with Stainless Steel Scabbard and Handle";
        cijena[6].innerHTML="$299";
        ime[7].innerHTML="Battle Ready Katana 1060 Carbon Steel with Sparkle Black Hardwood Saya";
        cijena[7].innerHTML="$279";
        ime[8].innerHTML="Blue Blade Katana 1060 Carbon Steel with Blue Acid Dye with Sythentic Leather Saya & Shoulder Strap";
        cijena[8].innerHTML="$359";
        ime[9].innerHTML="Cane Sword 1060 Carbon Steel With Iron Saya";
        cijena[9].innerHTML="$349";
        ime[10].innerHTML="Chinese Dadao Sword 1060 Carbon Steel With Synthetic Leather Holsters Saya";
        cijena[10].innerHTML="$399";
        ime[11].innerHTML="Chinese Dao 1060 Carbon Steel Synthetic Leather Scabbard Hostler";
        cijena[11].innerHTML="$249";
        
    
        for(let i=brojItema; i<slika.length; i++){//brisi ostatak
            slika[i].style.display="none"
            ime[i].style.display="none";
            cijena[i].style.display="none";
            dugme[i].style.display="none";
        }
    }
    
}

function stvoriElementAnimacijeStore(broj){
    let animacija=document.querySelectorAll(".pcCrniDioNovi1 .element .animacijaElementa")
    animacija[broj].style.display="block"; 
}
function obrisiElementAnimacijeStore(broj){
    let animacija=document.querySelectorAll(".pcCrniDioNovi1 .element .animacijaElementa")
    animacija[broj].style.display="none";
}

function storeModelSlika(broj,broj2){
    let slika=document.querySelectorAll(".pcCrniDioNovi1 .element .slikaElementa .slikaElementaIMG"); //slika element
    let dugme=document.querySelectorAll(".pcCrniDioNovi1 .element .animacijaElementa"); // crveno dugme element
    let ime=document.querySelectorAll(".pcCrniDioNovi1 .element .opisElementa .opisElementaP"); //ime elementa
    let cijena=document.querySelectorAll(".pcCrniDioNovi1 .element .cijenaElementa .cijenaElementaP"); //cijena elementa
    stvoriElementAnimacijeStore(broj); //da se stvori crveno dugme
    dugme[broj].style.animation="stvoriElement .3s forwards" //animacija crveno dugme
    
    //provjera jel default 0 ili je odabrana neka klasa metala od modela

    if(brojElementa==0){
        if(broj==0){
            slika[broj].src="images/novekatane/1_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Tanto Knife 1060 Carbon Steel With Matt Black Saya";
            cijena[broj].innerHTML="$149";
            
        }
    
        if(broj==1){
            slika[broj].src="images/novekatane/2_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Battle Ready Katana Sword T10 Clay Tempered Steel Blue Acid Dye with White Saya";
            cijena[broj].innerHTML="$349";
        }
    
        if(broj==2){
            slika[broj].src="images/novekatane/3_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Battle Ready Katana Choji Hamon T10 Clay Tempered Steel with Hadori Polish";
            cijena[broj].innerHTML="$549";
        }
    
        if(broj==3){
            slika[broj].src="images/novekatane/4_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Japanese Tanto Blade 1095 Folded Steel";
            cijena[broj].innerHTML="$239";
        }
    
        if(broj==4){
            slika[broj].src="images/novekatane/5_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Battle Ready Katana 1060 Carbon Steel with Sparkle Black Hardwood Saya";
            cijena[broj].innerHTML="$279";
        }
    
        if(broj==5){
            slika[broj].src="images/novekatane/6_2.jpg"; //minjanje slike
            ime[broj].innerHTML="1060 Carbon Steel Tanto Knife With Matt Black Sun Tzu saya";
            cijena[broj].innerHTML="$179";
        }
    
        if(broj==6){
            slika[broj].src="images/novekatane/7_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Battle Ready Shirasaya Katana T10 Folded Clay Tempered Steel Gloss Black Sun Tzu Saya";
            cijena[broj].innerHTML="$469";
        }
    
        if(broj==7){
            slika[broj].src="images/novekatane/8_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Japanese Katana T10 Folded Clay Tempered Steel with Hadori Polish";
            cijena[broj].innerHTML="$799";
        }
    
        if(broj==8){
            slika[broj].src="images/novekatane/9_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Shirasaya Tanto 1095 Folded Steel with Ebony Wood Saya";
            cijena[broj].innerHTML="$329";
        }
    
        if(broj==9){
            slika[broj].src="images/novekatane/10_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Battle Ready Katana Samurai Sword T10 Clay Tempered Steel with Black Acid Dye";
            cijena[broj].innerHTML="$429";
        }
    
        if(broj==10){
            slika[broj].src="images/novekatane/11_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Hexagon Rosewood Shirasaya T10 Clay Tempered Steel Kiriha Zukuri";
            cijena[broj].innerHTML="$429";
        }
    
        if(broj==11){
            slika[broj].src="images/novekatane/12_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Samurai Nodachi Sword 1060 Carbon Steel with White Saya";
            cijena[broj].innerHTML="$349";
        }
    }
    
    if(brojElementa==1){
        if(broj==0){
            slika[broj].src="images/1060/1_2.jpg"; //minjanje slike
            ime[broj].innerHTML="1060 Carbon Steel Chinese Dadao Sword With Synthetic Leather Holsters Saya";
            cijena[broj].innerHTML="$389";
        }
    
        if(broj==1){
            slika[broj].src="images/1060/2_2.jpg"; //minjanje slike
            ime[broj].innerHTML="1060 Carbon Steel Chinese Guandao Sword With Synthetic Leather Holsters Saya";
            cijena[broj].innerHTML="$399";
        }
    
        if(broj==2){
            slika[broj].src="images/1060/3_2.jpg"; //minjanje slike
            ime[broj].innerHTML="1060 Carbon Steel Chinese Jian Sword With Ebony Wood Saya";
            cijena[broj].innerHTML="$249";
        }
    
        if(broj==3 ){
            slika[broj].src="images/1060/4_2.jpg"; //minjanje slike
            ime[broj].innerHTML="1060 Carbon Steel Katana with Engraved Saya";
            cijena[broj].innerHTML="$289";
        }
    
        if(broj==4){
            slika[broj].src="images/1060/5_2.jpg"; //minjanje slike
            ime[broj].innerHTML="1060 Carbon Steel Tanto Knife With Matt Black Sun Tzu saya";
            cijena[broj].innerHTML="$149";
        }
    
        if(broj==5){
            slika[broj].src="images/1060/6_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Baton Sword 1060 Carbon Steel With Stainless Steel Saya";
            cijena[broj].innerHTML="$289";
        }
    
        if(broj==6 ){
            slika[broj].src="images/1060/7_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Baton Sword 1060 Carbon Steel with Stainless Steel Scabbard and Handle";
            cijena[broj].innerHTML="$299";
        }
    
        if(broj==7){
            slika[broj].src="images/1060/8_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Battle Ready Katana 1060 Carbon Steel with Sparkle Black Hardwood Saya";
            cijena[broj].innerHTML="$279";
        }
    
        if(broj==8 ){
            slika[broj].src="images/1060/9_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Blue Blade Katana 1060 Carbon Steel with Blue Acid Dye with Sythentic Leather Saya & Shoulder Strap";
            cijena[broj].innerHTML="$359";
        }
    
        if(broj==9){
            slika[broj].src="images/1060/10_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Cane Sword 1060 Carbon Steel With Iron Saya";
            cijena[broj].innerHTML="$349";
        }
    
        if(broj==10){
            slika[broj].src="images/1060/11_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Chinese Dadao Sword 1060 Carbon Steel With Synthetic Leather Holsters Saya";
            cijena[broj].innerHTML="$399";
        }
    
        if(broj==11){
            slika[broj].src="images/1060/12_2.jpg"; //minjanje slike
            ime[broj].innerHTML="Chinese Dao 1060 Carbon Steel Synthetic Leather Scabbard Hostler";
            cijena[broj].innerHTML="$249";
        }

    
    }

    
}

function storeModelSlikaR(broj){
    let slika=document.querySelectorAll(".pcCrniDioNovi1 .element .slikaElementa .slikaElementaIMG");
    let dugme=document.querySelectorAll(".pcCrniDioNovi1 .element .animacijaElementa");
    setTimeout(obrisiElementAnimacijeStore(broj),1000)
    
    if(brojElementa==0){
        if(broj==0){
            slika[broj].src="images/novekatane/1_1.jpg"; //minjanje slike
            ime[broj].innerHTML="Tanto Knife 1060 Carbon Steel With Matt Black Saya";
            cijena[broj].innerHTML="$149";
        }
    
        if(broj==1){
            slika[broj].src="images/novekatane/2_1.jpg"; //minjanje slike
            ime[broj].innerHTML="Battle Ready Katana Sword T10 Clay Tempered Steel Blue Acid Dye with White Saya";
            cijena[broj].innerHTML="$349";
        }
    
        if(broj==2){
            slika[broj].src="images/novekatane/3_1.jpg"; //minjanje slike
            ime[broj].innerHTML="Battle Ready Katana Choji Hamon T10 Clay Tempered Steel with Hadori Polish";
            cijena[broj].innerHTML="$549";
        }
    
        if(broj==3 ){
            slika[broj].src="images/novekatane/4_1.jpg"; //minjanje slike
            ime[broj].innerHTML="Japanese Tanto Blade 1095 Folded Steel";
            cijena[broj].innerHTML="$239";
        }
    
        if(broj==4){
            slika[broj].src="images/novekatane/5_1.jpg"; //minjanje slike
            ime[broj].innerHTML="Battle Ready Katana 1060 Carbon Steel with Sparkle Black Hardwood Saya";
            cijena[broj].innerHTML="$279";
        }
    
        if(broj==5){
            slika[broj].src="images/novekatane/6_1.jpg"; //minjanje slike
            ime[broj].innerHTML="1060 Carbon Steel Tanto Knife With Matt Black Sun Tzu saya";
            cijena[broj].innerHTML="$179";
        }
    
        if(broj==6 ){
            slika[broj].src="images/novekatane/7_1.jpg"; //minjanje slike
            ime[broj].innerHTML="Battle Ready Shirasaya Katana T10 Folded Clay Tempered Steel Gloss Black Sun Tzu Saya";
            cijena[broj].innerHTML="$469";
        }
    
        if(broj==7){
            slika[broj].src="images/novekatane/8_1.jpg"; //minjanje slike
            ime[broj].innerHTML="Japanese Katana T10 Folded Clay Tempered Steel with Hadori Polish";
            cijena[broj].innerHTML="$799";
        }
    
        if(broj==8 ){
            slika[broj].src="images/novekatane/9_1.jpg"; //minjanje slike
            ime[broj].innerHTML="Shirasaya Tanto 1095 Folded Steel with Ebony Wood Saya";
            cijena[broj].innerHTML="$329";
        }
    
        if(broj==9){
            slika[broj].src="images/novekatane/10_1.jpg"; //minjanje slike
            ime[broj].innerHTML="Battle Ready Katana Samurai Sword T10 Clay Tempered Steel with Black Acid Dye";
            cijena[broj].innerHTML="$429";
        }
    
        if(broj==10){
            slika[broj].src="images/novekatane/11_1.jpg"; //minjanje slike
            ime[broj].innerHTML="Hexagon Rosewood Shirasaya T10 Clay Tempered Steel Kiriha Zukuri";
            cijena[broj].innerHTML="$429";
        }
    
        if(broj==11){
            slika[broj].src="images/novekatane/12_1.jpg"; //minjanje slike
            ime[broj].innerHTML="Samurai Nodachi Sword 1060 Carbon Steel with White Saya";
            cijena[broj].innerHTML="$349";
        }
    }

    if(brojElementa==1){
        for(let i=0; i<12; i++){
            slika[i].src=`images/1060/${i+1}_1.jpg`;
        }
    }
    
}
function storeCartDugme(broj){
    let dugme=document.querySelectorAll(".pcCrniDioNovi1 .element .dugmeKupide");
    let tekst=document.querySelectorAll(".pcCrniDioNovi1 .element .addToCart");

    dugme[broj].style.animation="bojanjeDugme 1s forwards";
    tekst[broj].style.animation="bojanjeCart 1s forwards";
}

function storeCartDugmeR(broj){
    let dugme=document.querySelectorAll(".pcCrniDioNovi1 .element .dugmeKupide");
    let tekst=document.querySelectorAll(".pcCrniDioNovi1 .element .addToCart");

    dugme[broj].style.animation="bojanjeDugmeR 1s forwards";
    tekst[broj].style.animation="bojanjeCartR 1s forwards";
}
