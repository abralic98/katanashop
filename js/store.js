// STORE ANIMACIJE
//broj je paramatar u htmlu koji je element kliknut 
//broj2 je parametar vrste metala 0 je default kad stisnes store;
let brojElementa=0; 
//0 default
//1 1060 modeli

function prebaciElement(broj){
    let element=document.getElementById("elementDio").style.display="flex"
    let home=document.getElementById("homeDio").style.display="none";
    let faq=document.getElementById("faqDio").style.display="none";
    let contact=document.getElementById("contactDio").style.display="none";
    let store=document.getElementById("storeDio").style.display="none";

    let ime=document.querySelectorAll(".pcCrniDioNovi1 .element .opisElementa .opisElementaP"); //ime elementa  KOJEG KLIKNEMO u store
    let cijena=document.querySelectorAll(".pcCrniDioNovi1 .element .cijenaElementa .cijenaElementaP"); //cijena elementa KOJEG KLIKNEMO u store
    let slika=document.querySelectorAll(".pcCrniDioNovi1 .element .slikaElementa .slikaElementaIMG"); //slika element KOJEGKLIKNEMO u store

    let novoIme=document.getElementById("elementDioIme");
    let novaSlika=document.getElementById("elementDioSlika");
    let novaCijena=document.getElementById("elementDioCijena");

    let manjaSlika1=document.getElementById("manjaSlika1");
    let manjaSlika2=document.getElementById("manjaSlika2");
    let zoomINslika=document.getElementById("zoomINslika");

    //minjanje slika kad stisnem na neki element 
    if(brojElementa==0){
        zoomINslika.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika1.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika2.src=`images/novekatane/${broj+1}_1.jpg`
    }
    if(brojElementa==1){
        zoomINslika.src=`images/1060/${broj+1}_2.jpg`
        manjaSlika1.src=`images/1060/${broj+1}_2.jpg`
        manjaSlika2.src=`images/1060/${broj+1}_1.jpg`
    }
    if(brojElementa==2){
        zoomINslika.src=`images/2klasa/${broj+1}_2.jpg`
        manjaSlika1.src=`images/2klasa/${broj+1}_2.jpg`
        manjaSlika2.src=`images/2klasa/${broj+1}_1.jpg`
    }
    if(brojElementa==3){
        zoomINslika.src=`images/3klasa/${broj+1}_2.jpg`
        manjaSlika1.src=`images/3klasa/${broj+1}_2.jpg`
        manjaSlika2.src=`images/3klasa/${broj+1}_1.jpg`
    }
    if(brojElementa==4){
        zoomINslika.src=`images/4klasa/${broj+1}_2.jpg`
        manjaSlika1.src=`images/4klasa/${broj+1}_2.jpg`
        manjaSlika2.src=`images/4klasa/${broj+1}_1.jpg`
    }
    if(brojElementa==5){
        zoomINslika.src=`images/5klasa/${broj+1}_2.jpg`
        manjaSlika1.src=`images/5klasa/${broj+1}_2.jpg`
        manjaSlika2.src=`images/5klasa/${broj+1}_1.jpg`
    }
    if(brojElementa==6){
        zoomINslika.src=`images/6klasa/${broj+1}_2.jpg`
        manjaSlika1.src=`images/6klasa/${broj+1}_2.jpg`
        manjaSlika2.src=`images/6klasa/${broj+1}_1.jpg`
    }
    if(brojElementa==7){
        zoomINslika.src=`images/7klasa/${broj+1}_2.jpg`
        manjaSlika1.src=`images/7klasa/${broj+1}_2.jpg`
        manjaSlika2.src=`images/7klasa/${broj+1}_1.jpg`
    }
    if(brojElementa==8){
        zoomINslika.src=`images/8klasa/${broj+1}_2.jpg`
        manjaSlika1.src=`images/8klasa/${broj+1}_2.jpg`
        manjaSlika2.src=`images/8klasa/${broj+1}_1.jpg`
    }
    
    novoIme.innerHTML=ime[broj].innerHTML;
    novaSlika.src=slika[broj].src;
    novaCijena.innerHTML=cijena[broj].innerHTML;
  
}

function prebaciElement1(broj){
    let element=document.getElementById("elementDio").style.display="flex"
    let home=document.getElementById("homeDio").style.display="none";
    let faq=document.getElementById("faqDio").style.display="none";
    let contact=document.getElementById("contactDio").style.display="none";
    let store=document.getElementById("storeDio").style.display="none";

    let ime=document.querySelectorAll(".pcCrniDioNovi .element .opisElementa .opisElementaP"); //ime elementa  KOJEG KLIKNEMO u store
    let cijena=document.querySelectorAll(".pcCrniDioNovi .element .cijenaElementa .cijenaElementaP"); //cijena elementa KOJEG KLIKNEMO u store
    let slika=document.querySelectorAll(".pcCrniDioNovi .element .slikaElementa .slikaElementaIMG"); //slika element KOJEGKLIKNEMO u store
    let zoomINslika=document.getElementById("zoomINslika");

    let novoIme=document.getElementById("elementDioIme");
    let novaSlika=document.getElementById("elementDioSlika");
    let novaCijena=document.getElementById("elementDioCijena");

    let manjaSlika1=document.getElementById("manjaSlika1");
    let manjaSlikka2=document.getElementById("manjaSlika2");

    //minjanje slika kad stisnem na neki element 
    if(broj==0){
        zoomINslika.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika1.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika2.src=`images/novekatane/${broj+1}_1.jpg`
    }
    if(broj==1){
        zoomINslika.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika1.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika2.src=`images/novekatane/${broj+1}_1.jpg`
    }
    if(broj==2){
        zoomINslika.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika1.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika2.src=`images/novekatane/${broj+1}_1.jpg`
    }
    if(broj==3){
        zoomINslika.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika1.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika2.src=`images/novekatane/${broj+1}_1.jpg`
    }
    if(broj==4){
        zoomINslika.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika1.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika2.src=`images/novekatane/${broj+1}_1.jpg`
    }
    if(broj==5){
        zoomINslika.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika1.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika2.src=`images/novekatane/${broj+1}_1.jpg`
    }
    if(broj==6){
        zoomINslika.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika1.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika2.src=`images/novekatane/${broj+1}_1.jpg`
    }
    if(broj==7){
        zoomINslika.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika1.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika2.src=`images/novekatane/${broj+1}_1.jpg`
    }
    if(broj==8){
        zoomINslika.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika1.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika2.src=`images/novekatane/${broj+1}_1.jpg`
    }
    if(broj==9){
        zoomINslika.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika1.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika2.src=`images/novekatane/${broj+1}_1.jpg`
    }
    if(broj==10){
        zoomINslika.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika1.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika2.src=`images/novekatane/${broj+1}_1.jpg`
    }
    if(broj==11){
        zoomINslika.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika1.src=`images/novekatane/${broj+1}_2.jpg`
        manjaSlika2.src=`images/novekatane/${broj+1}_1.jpg`
    }
    
    novoIme.innerHTML=ime[broj].innerHTML;
    novaSlika.src=slika[broj].src;
    novaCijena.innerHTML=cijena[broj].innerHTML;
  
}

function izminiManjeSlike(broj){
    let manjaSlika1=document.getElementById("manjaSlika1");
    let manjaSlika2=document.getElementById("manjaSlika2");
    let zoomINslika=document.getElementById("zoomINslika");
    let novaSlika=document.getElementById("elementDioSlika");
   
    if(broj==0){
        novaSlika.src=manjaSlika1.src;
        zoomINslika.src=manjaSlika1.src;
    }
    if(broj==1){
        novaSlika.src=manjaSlika2.src;
        zoomINslika.src=manjaSlika2.src;
    }
}

function zoomINslika(){
    let zoomBlok=document.getElementsByClassName("zoomSlika");
    zoomBlok[0].style.display="flex"
}
function zoomOUTslika(){
    let zoomBlok=document.getElementsByClassName("zoomSlika");

    zoomBlok[0].style.display="none"
}
function prebaciStore(){
    let home=document.getElementById("homeDio").style.display="none";
    let faq=document.getElementById("faqDio").style.display="none";
    let contact=document.getElementById("contactDio").style.display="none";
    let store=document.getElementById("storeDio").style.display="flex";
    let headerCijena=document.getElementById("cijenaCart")
    let element=document.getElementById("elementDio").style.display="none"
    let cijenaCart=document.getElementById("zbrojenaCijena")
    console.log(headerCijena.innerHTML+ " HEADER CIJENA");
    console.log(cijenaCart.innerHTML+ " CIJENA CART ")
    brojElementa=0;
    
    pozoviKlasuItema(0,12); //da stavi sve na 0 po defaultu
    
}


function pozoviKlasuItema(broj,brojItema){//broj je 1 2 3..> koju klasu sam izabra brojItema je parametar iz htmla koliko itema ima u toj klasi
    brojElementa=broj;//broj klase
    
    let slika=document.querySelectorAll(".pcCrniDioNovi1 .element .slikaElementa .slikaElementaIMG"); //slika element
    let dugme=document.querySelectorAll(".pcCrniDioNovi1 .element .animacijaElementa"); // crveno dugme element
    let ime=document.querySelectorAll(".pcCrniDioNovi1 .element .opisElementa .opisElementaP"); //ime elementa
    let cijena=document.querySelectorAll(".pcCrniDioNovi1 .element .cijenaElementa .cijenaElementaP"); //cijena elementa
    let cijeliElement=document.querySelectorAll(".pcCrniDioNovi1 .element");
    let tekstKlase=document.getElementsByClassName("naslovKlasaSteel");
    for(let i=0; i<8; i++){//za minjanje boje klase
        if(i==broj-1){
            tekstKlase[i].style.color="rgb(97, 1, 1)";
        }
        else{
            tekstKlase[i].style.color="white";
        }
    }
    
    //default
    
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
    //klasa 1
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
        
    
        for(let i=0; i<slika.length; i++){//brisi ostatak
            if(i<brojItema){
                cijeliElement[i].style.display="block";
            }else{
                cijeliElement[i].style.display="none";
            }
        }
        
    }
    //klasa 2
    if(brojElementa==2){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/2klasa/${i+1}_2.jpg`;
        }
        ime[0].innerHTML="Battle Ready Katana Choji Hamon T10 Clay Tempered Steel with Hadori Polish";
        cijena[0].innerHTML="$549";
        ime[1].innerHTML="Battle Ready Katana Samurai Sword T10 Clay Tempered Steel with Black Acid Dye";
        cijena[1].innerHTML="$349";
        ime[2].innerHTML="Battle Ready Katana Sword T10 Clay Tempered Steel Blue Acid Dye with Black Saya";
        cijena[2].innerHTML="$429";
        ime[3].innerHTML="Battle Ready Katana Sword T10 Clay Tempered Steel Blue Acid Dye with White Saya";
        cijena[3].innerHTML="$369";
        ime[4].innerHTML="Battle Ready Katana T10 Clay Tempered Steel with Gold Acid Dye";
        cijena[4].innerHTML="$469";
        ime[5].innerHTML="Battle Ready Katana T10 Clay Tempered Steel with Hadori Polish and Red acid Dye";
        cijena[5].innerHTML="$799";
        ime[6].innerHTML="Battle Ready Katana T10 Clay Tempered Steel with Special White Marble Pattern Saya";
        cijena[6].innerHTML="$399";
        ime[7].innerHTML="Battle Ready Ninjato T10 Clay Tempered Steel with Red Gold Line Saya";
        cijena[7].innerHTML="$349";
        ime[8].innerHTML="Battle Ready Shirasaya Katana T10 Clay Tempered Steel with White Maple Wood Saya";
        cijena[8].innerHTML="$370";

        for(let i=0; i<slika.length; i++){//brisi ostatak
            if(i<brojItema){
                cijeliElement[i].style.display="block";
            }else{
                cijeliElement[i].style.display="none";
            }
        }
    }
    
    //klasa3
    if(brojElementa==3){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/3klasa/${i+1}_2.jpg`;
        }
        ime[0].innerHTML="Battle Ready Katana Sword T10 Folded Clay Tempered Steel with Feather Hadori Polish Sparkle Black Hardwood Saya";
        cijena[0].innerHTML="$779";
        ime[1].innerHTML="Battle Ready Katana Sword T10 Folded Clay Tempered Steel with Red Acid Dye & Hadori Polish";
        cijena[1].innerHTML="$889";
        ime[2].innerHTML="Battle Ready Katana T10 Folded Clay Tempered Steel with Hadori Polish";
        cijena[2].innerHTML="$849";
        ime[3].innerHTML="Battle Ready Katana T10 Folded Clay Tempered Steel with Hadori Polish and Full Ray Skin Saya";
        cijena[3].innerHTML="$899";
        ime[4].innerHTML="Battle Ready Katana T10 Folded Clay Tempered Steel with Purple Acid Dye & Hadori Polish";
        cijena[4].innerHTML="$799";
        ime[5].innerHTML="Battle Ready Shirasaya Katana T10 Folded Clay Tempered Steel Gloss Black Sun Tzu Saya";
        cijena[5].innerHTML="$469";
        ime[6].innerHTML="Battle Ready Wakizashi T10 Folded Clay Tempered Steel with Hadori Polish";
        cijena[6].innerHTML="$599";
        ime[7].innerHTML="Chinese Dao Sword T10 Folded Clay Tempered Steel Hadori Polish With Full Authentic Red Ray Skin";
        cijena[7].innerHTML="$1199";
        ime[8].innerHTML="Chinese Jian Sword 1095 Folded Steel With Ebony Wood Saya";
        cijena[8].innerHTML="$639";
        ime[9].innerHTML="Battle Ready Katana Blade T10 Folded Clay Tempered Steel Seashell Bird Saya with Real Buffalo Horn";
        cijena[9].innerHTML="$529";

        for(let i=0; i<slika.length; i++){//brisi ostatak
            if(i<brojItema){
                cijeliElement[i].style.display="block";
            }else{
                cijeliElement[i].style.display="none";
            }
        }
        
    }

    //klasa4
    if(brojElementa==4){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/4klasa/${i+1}_2.jpg`;
        }
        ime[0].innerHTML="Katana Tamahagane Steel with Hadori Polish Rosewood Saya With Buffalo Horn";
        cijena[0].innerHTML="$3499";
        ime[1].innerHTML="Katana Tamahagane Steel with Hadori Polish, Hand Painted Dragon Saya With Black Buffalo Horn";
        cijena[1].innerHTML="$3799";
        ime[2].innerHTML="Tamahagane Steel Katana Sword with Hadori Polish";
        cijena[2].innerHTML="$3599";
        ime[3].innerHTML="Top Quality Tamahagane Steel Katana with Hadori Polish";
        cijena[3].innerHTML="$3599";
       

        for(let i=0; i<slika.length; i++){//brisi ostatak
            if(i<brojItema){
                cijeliElement[i].style.display="block";
            }else{
                cijeliElement[i].style.display="none";
            }
        }
        
    }

    //klasa5
    if(brojElementa==5){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/5klasa/${i+1}_2.jpg`;
        }
        ime[0].innerHTML="Broadsword 1060 Folded Steel Ebony Wood Sheath";
        cijena[0].innerHTML="$379";
        ime[1].innerHTML="Chinese Broadsword 1060 Folded Steel with Red acid Dye & Red Wood Scabbard";
        cijena[1].innerHTML="$349";
        ime[2].innerHTML="Full Tang Katana 1060 Folded Steel with Hand Painted Flowers Saya";
        cijena[2].innerHTML="$679";
        ime[3].innerHTML="Katana 1060 Folded Steel with Full Green Ray Skin Saya";
        cijena[3].innerHTML="$639";
        ime[4].innerHTML="Ninjato 1060 Folded Steel with Red Acid Dye and Gold Inscription Saya";
        cijena[4].innerHTML="$499";
        ime[5].innerHTML="Purple Blade Ninjato 1060 Folded Carbon Steel with Glossy Black Engraved Saya";
        cijena[5].innerHTML="$449";
        ime[6].innerHTML="Straight Blade Ninjato 1060 Folded Steel with Red acid Dye and Saya with Gold Inscription";
        cijena[6].innerHTML="$399";
        

        for(let i=0; i<slika.length; i++){//brisi ostatak
            if(i<brojItema){
                cijeliElement[i].style.display="block";
            }else{
                cijeliElement[i].style.display="none";
            }
        }
        
    }

    //klasa6
    if(brojElementa==6){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/6klasa/${i+1}_2.jpg`;
        }
        ime[0].innerHTML="1095 Folded Steel Tanto Blade with Black & Red Semi Ray Skin Saya With Buffalo Horn";
        cijena[0].innerHTML="$429";
        ime[1].innerHTML="Chinese Broadsword 1095 Folded Steel With Blackwood Saya";
        cijena[1].innerHTML="$449";
        ime[2].innerHTML="Chinese Dao 1095 Folded Steel with Rosewood Scabbard";
        cijena[2].innerHTML="$349";
        ime[3].innerHTML="Chinese Jian 1095 Folded Steel";
        cijena[3].innerHTML="$389";
        ime[4].innerHTML="Chinese Jian 1095 Folded Steel with Red Acid Dye and Ebony Wood Scabbard";
        cijena[4].innerHTML="$649";
        ime[5].innerHTML="Chinese Jian Sword 1095 Folded Steel";
        cijena[5].innerHTML="$569";
        ime[6].innerHTML="Chinese Jian Sword 1095 Folded Steel with High Quality Ebony Wood Scabbard";
        cijena[6].innerHTML="$629";
        ime[7].innerHTML="Chinese Jian Sword 1095 Folded Steel with Red Acid Dye and Ebony Wood Scabbard";
        cijena[7].innerHTML="$599";
        ime[8].innerHTML="Damascus Steel Katana 1095 Folded Steel Red Acid Dye";
        cijena[8].innerHTML="$499";
        ime[9].innerHTML="Damascus Steel Katana 1095 Folded Steel with Purple Acid Dye";
        cijena[9].innerHTML="$319";
        ime[10].innerHTML="Damascus Steel Katana 1095 Folded Steel with Purple Acid Dye and Full Ray Skin Saya with Buffalo Horn Tips";
        cijena[10].innerHTML="$599";
        
        
    
        for(let i=0; i<slika.length; i++){//brisi ostatak
            if(i<brojItema){
                cijeliElement[i].style.display="block";
            }else{
                cijeliElement[i].style.display="none";
            }
        }
        
    }

    //klasa7
    if(brojElementa==7){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/6klasa/${i+1}_2.jpg`;
        }
        ime[0].innerHTML="Ninjato Sword 9260 Folded Spring Steel With Black Saya";
        cijena[0].innerHTML="$379";
        ime[1].innerHTML="Shirasaya Katana 9260 Folded Spring Steel";
        cijena[1].innerHTML="$589";
        ime[2].innerHTML="Shirasaya Katana 9260 Folded Spring Steel with Rosewood Saya & Buffalo Horn tips";
        cijena[2].innerHTML="$489";
       
 
        for(let i=0; i<slika.length; i++){//brisi ostatak
            if(i<brojItema){
                cijeliElement[i].style.display="block";
            }else{
                cijeliElement[i].style.display="none";
            }
        }
        
    }

    //klasa8
    if(brojElementa==8){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/8klasa/${i+1}_2.jpg`;
        }
        ime[0].innerHTML="Chinese Jian Sword T10 Folded Steel with Ebony Wood Scabbard";
        cijena[0].innerHTML="$589";
        ime[1].innerHTML="Damascus Steel Katana T10 Folded Steel with Purple Acid Dye";
        cijena[1].innerHTML="$619";
        ime[2].innerHTML="Folded Steel Katana T10 Folded Steel with Rosewood Saya & Buffalo Horn Fittings";
        cijena[2].innerHTML="$499";
        ime[3].innerHTML="Folded T10 Steel Tanto Knife With Rosewood Saya";
        cijena[3].innerHTML="$249";
        ime[4].innerHTML="Hand forged Katana T10 Folded Steel with Purple Acid Dye with twisted grain";
        cijena[4].innerHTML="$699";
        ime[5].innerHTML="Hand made Shirasaya Tanto T10 Folded Steel with Sparkle Black Hardwood Saya With Brass Fittings";
        cijena[5].innerHTML="$360";
        ime[6].innerHTML="Short Jian T10 Folded Steel with Red Acid Dye & Ebony Wood Scabbard";
        cijena[6].innerHTML="$329";
        ime[7].innerHTML="Tactical Katana Blade T10 Folded Steel with Red & Black Semi Rayskin Saya With Authentic Buffalo Horn tips";
        cijena[7].innerHTML="$599";
        ime[8].innerHTML="Tanto Knife T10 Folded Steel With Rosewood Saya";
        cijena[8].innerHTML="$259";
       
        
    
        for(let i=0; i<slika.length; i++){//brisi ostatak
            if(i<brojItema){
                cijeliElement[i].style.display="block";
            }else{
                cijeliElement[i].style.display="none";
            }
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

function storeModelSlika(broj,broj2){//kad hoveram prebacuje sliku 
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

    if(brojElementa==2){
        if(broj==0){
            slika[broj].src="images/2klasa/1_1.jpg"; //minjanje slike   
            
        }
    
        if(broj==1){
            slika[broj].src="images/2klasa/2_1.jpg"; //minjanje slike 
        }
    
        if(broj==2){
            slika[broj].src="images/2klasa/3_1.jpg";
        }
    
        if(broj==3){
            slika[broj].src="images/2klasa/4_1.jpg";
        }
    
        if(broj==4){
            slika[broj].src="images/2klasa/5_1.jpg";
        }
    
        if(broj==5){
            slika[broj].src="images/2klasa/6_1.jpg";
        }
    
        if(broj==6){
            slika[broj].src="images/2klasa/7_1.jpg";
        }
    
        if(broj==7){
            slika[broj].src="images/2klasa/8_1.jpg";
        }
    
        if(broj==8){
            slika[broj].src="images/2klasa/9_1.jpg";
        }
    
    }

    if(brojElementa==3){
        if(broj==0){
            slika[broj].src="images/3klasa/1_1.jpg"; //minjanje slike   
            
        }
    
        if(broj==1){
            slika[broj].src="images/3klasa/2_1.jpg"; //minjanje slike 
        }
    
        if(broj==2){
            slika[broj].src="images/3klasa/3_1.jpg";
        }
    
        if(broj==3){
            slika[broj].src="images/3klasa/4_1.jpg";
        }
    
        if(broj==4){
            slika[broj].src="images/3klasa/5_1.jpg";
        }
    
        if(broj==5){
            slika[broj].src="images/3klasa/6_1.jpg";
        }
    
        if(broj==6){
            slika[broj].src="images/3klasa/7_1.jpg";
        }
    
        if(broj==7){
            slika[broj].src="images/3klasa/8_1.jpg";
        }
    
        if(broj==8){
            slika[broj].src="images/3klasa/9_1.jpg";
        }
    
    }

    if(brojElementa==4){
        if(broj==0){
            slika[broj].src="images/4klasa/1_1.jpg"; //minjanje slike   
            
        }
    
        if(broj==1){
            slika[broj].src="images/4klasa/2_1.jpg"; //minjanje slike 
        }
    
        if(broj==2){
            slika[broj].src="images/4klasa/3_1.jpg";
        }
    
        if(broj==3){
            slika[broj].src="images/4klasa/4_1.jpg";
        }
    
  
    }

    if(brojElementa==5){
        if(broj==0){
            slika[broj].src="images/5klasa/1_1.jpg"; //minjanje slike   
            
        }
    
        if(broj==1){
            slika[broj].src="images/5klasa/2_1.jpg"; //minjanje slike 
        }
    
        if(broj==2){
            slika[broj].src="images/5klasa/3_1.jpg";
        }
    
        if(broj==3){
            slika[broj].src="images/5klasa/4_1.jpg";
        }
    
        if(broj==4){
            slika[broj].src="images/5klasa/5_1.jpg";
        }
    
        if(broj==5){
            slika[broj].src="images/5klasa/6_1.jpg";
        }
    
        if(broj==6){
            slika[broj].src="images/5klasa/7_1.jpg";
        }
   
    
    }

    if(brojElementa==6){
        if(broj==0){
            slika[broj].src="images/6klasa/1_1.jpg"; //minjanje slike   
            
        }
    
        if(broj==1){
            slika[broj].src="images/6klasa/2_1.jpg"; //minjanje slike 
        }
    
        if(broj==2){
            slika[broj].src="images/6klasa/3_1.jpg";
        }
    
        if(broj==3){
            slika[broj].src="images/6klasa/4_1.jpg";
        }
    
        if(broj==4){
            slika[broj].src="images/6klasa/5_1.jpg";
        }
    
        if(broj==5){
            slika[broj].src="images/6klasa/6_1.jpg";
        }
    
        if(broj==6){
            slika[broj].src="images/6klasa/7_1.jpg";
        }
    
        if(broj==7){
            slika[broj].src="images/6klasa/8_1.jpg";
        }
    
        if(broj==8){
            slika[broj].src="images/6klasa/9_1.jpg";
        }

        if(broj==9){
            slika[broj].src="images/6klasa/10_1.jpg";
        }

        if(broj==10){
            slika[broj].src="images/6klasa/11_1.jpg";
        }
    
    }
    
    if(brojElementa==7){
        if(broj==0){
            slika[broj].src="images/7klasa/1_1.jpg"; //minjanje slike   
            
        }
    
        if(broj==1){
            slika[broj].src="images/7klasa/2_1.jpg"; //minjanje slike 
        }
    
        if(broj==2){
            slika[broj].src="images/7klasa/3_1.jpg";
        }
    
    
    }

    if(brojElementa==8){
        if(broj==0){
            slika[broj].src="images/8klasa/1_1.jpg"; //minjanje slike   
            
        }
    
        if(broj==1){
            slika[broj].src="images/8klasa/2_1.jpg"; //minjanje slike 
        }
    
        if(broj==2){
            slika[broj].src="images/8klasa/3_1.jpg";
        }
    
        if(broj==3){
            slika[broj].src="images/8klasa/4_1.jpg";
        }
    
        if(broj==4){
            slika[broj].src="images/8klasa/5_1.jpg";
        }
    
        if(broj==5){
            slika[broj].src="images/8klasa/6_1.jpg";
        }
    
        if(broj==6){
            slika[broj].src="images/8klasa/7_1.jpg";
        }
    
        if(broj==7){
            slika[broj].src="images/8klasa/8_1.jpg";
        }
    
        if(broj==8){
            slika[broj].src="images/8klasa/9_1.jpg";
        }

    }
}

function storeModelSlikaR(broj){//kad maknem hover vraca na staru sliku
    let slika=document.querySelectorAll(".pcCrniDioNovi1 .element .slikaElementa .slikaElementaIMG");
    let dugme=document.querySelectorAll(".pcCrniDioNovi1 .element .animacijaElementa");
    
    setTimeout(obrisiElementAnimacijeStore(broj),1000)
    
    if(brojElementa==0){
        if(broj==0){
            slika[broj].src="images/novekatane/1_1.jpg"; //minjanje slike
            
        }
    
        if(broj==1){
            slika[broj].src="images/novekatane/2_1.jpg"; //minjanje slike
            
        }
    
        if(broj==2){
            slika[broj].src="images/novekatane/3_1.jpg"; //minjanje slike
            
        }
    
        if(broj==3 ){
            slika[broj].src="images/novekatane/4_1.jpg"; //minjanje slike
            
        }
    
        if(broj==4){
            slika[broj].src="images/novekatane/5_1.jpg"; //minjanje slike
            
        }
    
        if(broj==5){
            slika[broj].src="images/novekatane/6_1.jpg"; //minjanje slike
            
        }
    
        if(broj==6 ){
            slika[broj].src="images/novekatane/7_1.jpg"; //minjanje slike
            
        }
    
        if(broj==7){
            slika[broj].src="images/novekatane/8_1.jpg"; //minjanje slike
            
        }
    
        if(broj==8 ){
            slika[broj].src="images/novekatane/9_1.jpg"; //minjanje slike
            
        }
    
        if(broj==9){
            slika[broj].src="images/novekatane/10_1.jpg"; //minjanje slike
            
        }
    
        if(broj==10){
            slika[broj].src="images/novekatane/11_1.jpg"; //minjanje slike
            
        }
    
        if(broj==11){
            slika[broj].src="images/novekatane/12_1.jpg"; //minjanje slike
            i
        }
    }

    if(brojElementa==1){
        for(let i=0; i<12; i++){
            slika[i].src=`images/1060/${i+1}_1.jpg`;
        }
    }

    if(brojElementa==2){
        for(let i=0; i<9; i++){
            slika[i].src=`images/2klasa/${i+1}_2.jpg`;
        }
    }

    if(brojElementa==3){
        for(let i=0; i<10; i++){
            slika[i].src=`images/3klasa/${i+1}_2.jpg`;
        }
    }

    if(brojElementa==4){
        for(let i=0; i<4; i++){
            slika[i].src=`images/4klasa/${i+1}_2.jpg`;
        }
    }

    if(brojElementa==5){
        for(let i=0; i<7; i++){
            slika[i].src=`images/5klasa/${i+1}_2.jpg`;
        }
    }

    if(brojElementa==6){
        for(let i=0; i<11; i++){
            slika[i].src=`images/6klasa/${i+1}_2.jpg`;
        }
    }
    
    if(brojElementa==7){
        for(let i=0; i<3; i++){
            slika[i].src=`images/7klasa/${i+1}_2.jpg`;
        }
    }

    if(brojElementa==8){
        for(let i=0; i<9; i++){
            slika[i].src=`images/8klasa/${i+1}_2.jpg`;
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

//addtocart store

let brojItemaArrayStore=0;
let cijenaUkupnoStore=0;
// ARRAY SA ITEMIMA

function dodajItemStore(brojItema){
    brojItemaArrayStore++;
    let noviHTML;
    let ime=document.getElementsByClassName("opisElementaP");
    let cijena=document.getElementsByClassName("cijenaElementaP");
    let editovanje=document.getElementsByClassName("listaItema"); //cili blok
    let empty=document.getElementsByClassName("addITEMS");
    let finalnaCijena=document.getElementsByClassName("zbrojenaCijena");
    let headerCijena=document.getElementById("cijenaCart");
    
    
    
    empty[0].innerHTML="ITEMS: "+brojItemaArrayStore;
    
    let stariHTML=editovanje[0].innerHTML;   
    if(brojElementa==1){
        
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
   
    }
    //klasa 2
    if(brojElementa==2){
    
        ime[0].innerHTML="Battle Ready Katana Choji Hamon T10 Clay Tempered Steel with Hadori Polish";
        cijena[0].innerHTML="$549";
        ime[1].innerHTML="Battle Ready Katana Samurai Sword T10 Clay Tempered Steel with Black Acid Dye";
        cijena[1].innerHTML="$349";
        ime[2].innerHTML="Battle Ready Katana Sword T10 Clay Tempered Steel Blue Acid Dye with Black Saya";
        cijena[2].innerHTML="$429";
        ime[3].innerHTML="Battle Ready Katana Sword T10 Clay Tempered Steel Blue Acid Dye with White Saya";
        cijena[3].innerHTML="$369";
        ime[4].innerHTML="Battle Ready Katana T10 Clay Tempered Steel with Gold Acid Dye";
        cijena[4].innerHTML="$469";
        ime[5].innerHTML="Battle Ready Katana T10 Clay Tempered Steel with Hadori Polish and Red acid Dye";
        cijena[5].innerHTML="$799";
        ime[6].innerHTML="Battle Ready Katana T10 Clay Tempered Steel with Special White Marble Pattern Saya";
        cijena[6].innerHTML="$399";
        ime[7].innerHTML="Battle Ready Ninjato T10 Clay Tempered Steel with Red Gold Line Saya";
        cijena[7].innerHTML="$349";
        ime[8].innerHTML="Battle Ready Shirasaya Katana T10 Clay Tempered Steel with White Maple Wood Saya";
        cijena[8].innerHTML="$370";

    }
    
    //klasa3
    if(brojElementa==3){
        
        ime[0].innerHTML="Battle Ready Katana Sword T10 Folded Clay Tempered Steel with Feather Hadori Polish Sparkle Black Hardwood Saya";
        cijena[0].innerHTML="$779";
        ime[1].innerHTML="Battle Ready Katana Sword T10 Folded Clay Tempered Steel with Red Acid Dye & Hadori Polish";
        cijena[1].innerHTML="$889";
        ime[2].innerHTML="Battle Ready Katana T10 Folded Clay Tempered Steel with Hadori Polish";
        cijena[2].innerHTML="$849";
        ime[3].innerHTML="Battle Ready Katana T10 Folded Clay Tempered Steel with Hadori Polish and Full Ray Skin Saya";
        cijena[3].innerHTML="$899";
        ime[4].innerHTML="Battle Ready Katana T10 Folded Clay Tempered Steel with Purple Acid Dye & Hadori Polish";
        cijena[4].innerHTML="$799";
        ime[5].innerHTML="Battle Ready Shirasaya Katana T10 Folded Clay Tempered Steel Gloss Black Sun Tzu Saya";
        cijena[5].innerHTML="$469";
        ime[6].innerHTML="Battle Ready Wakizashi T10 Folded Clay Tempered Steel with Hadori Polish";
        cijena[6].innerHTML="$599";
        ime[7].innerHTML="Chinese Dao Sword T10 Folded Clay Tempered Steel Hadori Polish With Full Authentic Red Ray Skin";
        cijena[7].innerHTML="$1199";
        ime[8].innerHTML="Chinese Jian Sword 1095 Folded Steel With Ebony Wood Saya";
        cijena[8].innerHTML="$639";
        ime[9].innerHTML="Battle Ready Katana Blade T10 Folded Clay Tempered Steel Seashell Bird Saya with Real Buffalo Horn";
        cijena[9].innerHTML="$529";

        
    }

    //klasa4
    if(brojElementa==4){
        
        ime[0].innerHTML="Katana Tamahagane Steel with Hadori Polish Rosewood Saya With Buffalo Horn";
        cijena[0].innerHTML="$3499";
        ime[1].innerHTML="Katana Tamahagane Steel with Hadori Polish, Hand Painted Dragon Saya With Black Buffalo Horn";
        cijena[1].innerHTML="$3799";
        ime[2].innerHTML="Tamahagane Steel Katana Sword with Hadori Polish";
        cijena[2].innerHTML="$3599";
        ime[3].innerHTML="Top Quality Tamahagane Steel Katana with Hadori Polish";
        cijena[3].innerHTML="$3599";
       

        
    }

    //klasa5
    if(brojElementa==5){
        
        ime[0].innerHTML="Broadsword 1060 Folded Steel Ebony Wood Sheath";
        cijena[0].innerHTML="$379";
        ime[1].innerHTML="Chinese Broadsword 1060 Folded Steel with Red acid Dye & Red Wood Scabbard";
        cijena[1].innerHTML="$349";
        ime[2].innerHTML="Full Tang Katana 1060 Folded Steel with Hand Painted Flowers Saya";
        cijena[2].innerHTML="$679";
        ime[3].innerHTML="Katana 1060 Folded Steel with Full Green Ray Skin Saya";
        cijena[3].innerHTML="$639";
        ime[4].innerHTML="Ninjato 1060 Folded Steel with Red Acid Dye and Gold Inscription Saya";
        cijena[4].innerHTML="$499";
        ime[5].innerHTML="Purple Blade Ninjato 1060 Folded Carbon Steel with Glossy Black Engraved Saya";
        cijena[5].innerHTML="$449";
        ime[6].innerHTML="Straight Blade Ninjato 1060 Folded Steel with Red acid Dye and Saya with Gold Inscription";
        cijena[6].innerHTML="$399";
        
        
    }

    //klasa6
    if(brojElementa==6){
        
        ime[0].innerHTML="1095 Folded Steel Tanto Blade with Black & Red Semi Ray Skin Saya With Buffalo Horn";
        cijena[0].innerHTML="$429";
        ime[1].innerHTML="Chinese Broadsword 1095 Folded Steel With Blackwood Saya";
        cijena[1].innerHTML="$449";
        ime[2].innerHTML="Chinese Dao 1095 Folded Steel with Rosewood Scabbard";
        cijena[2].innerHTML="$349";
        ime[3].innerHTML="Chinese Jian 1095 Folded Steel";
        cijena[3].innerHTML="$389";
        ime[4].innerHTML="Chinese Jian 1095 Folded Steel with Red Acid Dye and Ebony Wood Scabbard";
        cijena[4].innerHTML="$649";
        ime[5].innerHTML="Chinese Jian Sword 1095 Folded Steel";
        cijena[5].innerHTML="$569";
        ime[6].innerHTML="Chinese Jian Sword 1095 Folded Steel with High Quality Ebony Wood Scabbard";
        cijena[6].innerHTML="$629";
        ime[7].innerHTML="Chinese Jian Sword 1095 Folded Steel with Red Acid Dye and Ebony Wood Scabbard";
        cijena[7].innerHTML="$599";
        ime[8].innerHTML="Damascus Steel Katana 1095 Folded Steel Red Acid Dye";
        cijena[8].innerHTML="$499";
        ime[9].innerHTML="Damascus Steel Katana 1095 Folded Steel with Purple Acid Dye";
        cijena[9].innerHTML="$319";
        ime[10].innerHTML="Damascus Steel Katana 1095 Folded Steel with Purple Acid Dye and Full Ray Skin Saya with Buffalo Horn Tips";
        cijena[10].innerHTML="$599";
      
        
    }

    //klasa7
    if(brojElementa==7){
       
        ime[0].innerHTML="Ninjato Sword 9260 Folded Spring Steel With Black Saya";
        cijena[0].innerHTML="$379";
        ime[1].innerHTML="Shirasaya Katana 9260 Folded Spring Steel";
        cijena[1].innerHTML="$589";
        ime[2].innerHTML="Shirasaya Katana 9260 Folded Spring Steel with Rosewood Saya & Buffalo Horn tips";
        cijena[2].innerHTML="$489";
    
    }

    //klasa8
    if(brojElementa==8){
       
        ime[0].innerHTML="Chinese Jian Sword T10 Folded Steel with Ebony Wood Scabbard";
        cijena[0].innerHTML="$589";
        ime[1].innerHTML="Damascus Steel Katana T10 Folded Steel with Purple Acid Dye";
        cijena[1].innerHTML="$619";
        ime[2].innerHTML="Folded Steel Katana T10 Folded Steel with Rosewood Saya & Buffalo Horn Fittings";
        cijena[2].innerHTML="$499";
        ime[3].innerHTML="Folded T10 Steel Tanto Knife With Rosewood Saya";
        cijena[3].innerHTML="$249";
        ime[4].innerHTML="Hand forged Katana T10 Folded Steel with Purple Acid Dye with twisted grain";
        cijena[4].innerHTML="$699";
        ime[5].innerHTML="Hand made Shirasaya Tanto T10 Folded Steel with Sparkle Black Hardwood Saya With Brass Fittings";
        cijena[5].innerHTML="$360";
        ime[6].innerHTML="Short Jian T10 Folded Steel with Red Acid Dye & Ebony Wood Scabbard";
        cijena[6].innerHTML="$329";
        ime[7].innerHTML="Tactical Katana Blade T10 Folded Steel with Red & Black Semi Rayskin Saya With Authentic Buffalo Horn tips";
        cijena[7].innerHTML="$599";
        ime[8].innerHTML="Tanto Knife T10 Folded Steel With Rosewood Saya";
        cijena[8].innerHTML="$259";
       
        
    }
    
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
        <div onclick="obrisiItemStore(${i},${items[i].cijena.substring(1)})"class="cartX">
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
    cijenaUkupnoStore=Number(cijenaUkupnoStore)+Number(cijenaBez$);
    finalnaCijena[0].innerHTML="$"+cijenaUkupnoStore;
    headerCijena.innerHTML="$"+cijenaUkupnoStore;
    console.log(items.length)
    
}

function obrisiItemStore(brojItema,cena){
    brojItemaArrayStore--
    let noviHTML;
    let ime=document.getElementsByClassName("opisElementaP");
    let cijena=document.getElementsByClassName("cijenaElementaP");
    let editovanje=document.getElementsByClassName("listaItema");
    let empty=document.getElementsByClassName("addITEMS");
    let finalnaCijena=document.getElementsByClassName("zbrojenaCijena");
    let headerCijena=document.getElementById("cijenaCart");
    
    empty[0].innerHTML="ITEMS: "+brojItemaArrayStore;
    
    let stariHTML="";   
    
    if(brojItema>-1){
        items.splice(brojItema,1)
    }
    console.log(items)
    let cijenaBez$; 
    
    cijenaBez$=cijena[brojItema].innerHTML.substring(1);
    //console.log(cijenaBez$+ " OVO JE CIJENA TRENUTNOG ITEMA OBRISANOG")
    //console.log(items.length)
    for(let i=0; i<items.length; i++){
        stariHTML=stariHTML+
    `<div class="cartItem">
        <p class="imeModela">${items[i].ime}</p>
        <div class="cartLinija">
        </div>
        <p class="cijenaModela">${items[i].cijena}</p>
        <div onclick="obrisiItemStore(${i},${items[i].cijena.substring(1)})"class="cartX">
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
    console.log("CENA "+cena)
    cijenaUkupnoStore=Number(cijenaUkupnoStore)-Number(cijenaBez$);
    finalnaCijena[0].innerHTML="$"+cijenaUkupnoStore;
    headerCijena.innerHTML="$"+cijenaUkupnoStore;
    
}

// zoom cart

function dodajItemStoreZoom(){
    brojItemaArrayStore++;
    let noviHTML;
    let ime=document.getElementById("elementDioIme");
    let cijena=document.getElementById("elementDioCijena");
    let editovanje=document.getElementsByClassName("listaItema"); //cili blok
    let empty=document.getElementsByClassName("addITEMS");
    let finalnaCijena=document.getElementsByClassName("zbrojenaCijena");
    let headerCijena=document.getElementById("cijenaCart");
    let pcDugme=document.getElementById("dugmeKupide5").style.background="rgb(0, 126, 48)";
    let pcDugmeP=document.getElementById("dugmeKupide5p").innerHTML="Added"
    setTimeout(dugmeTextPc,300);
    empty[0].innerHTML="ITEMS: "+brojItemaArrayStore;
    
    let stariHTML=editovanje[0].innerHTML;   
    
    
    let objekt=new item(ime.innerHTML,cijena.innerHTML);
    items.push(objekt)
    console.log(items);
    let cijenaBez$; 
    cijenaBez$=cijena.innerHTML.substring(1);
    for(let i=0; i<items.length; i++){
        noviHTML=stariHTML+
    `<div class="cartItem">
        <p class="imeModela">${items[i].ime}</p>
        <div class="cartLinija">
        </div>
        <p class="cijenaModela">${items[i].cijena}</p>
        <div onclick="obrisiItemStore(${i},${items[i].cijena.substring(1)})"class="cartX">
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
    cijenaUkupnoStore=Number(cijenaUkupnoStore)+Number(cijenaBez$);
    finalnaCijena[0].innerHTML="$"+cijenaUkupnoStore;
    headerCijena.innerHTML="$"+cijenaUkupnoStore;
    console.log(items.length)
    
}

function obrisiItemStoreZoom(brojItema,cena){
    brojItemaArrayStore--
    let noviHTML;
    let ime=document.getElementsByClassName("opisElementaP");
    let cijena=document.getElementsByClassName("cijenaElementaP");
    let editovanje=document.getElementsByClassName("listaItema");
    let empty=document.getElementsByClassName("addITEMS");
    let finalnaCijena=document.getElementsByClassName("zbrojenaCijena");
    let headerCijena=document.getElementById("cijenaCart");
    
    empty[0].innerHTML="ITEMS: "+brojItemaArrayStore;
    
    let stariHTML="";   
    
    if(brojItema>-1){
        items.splice(brojItema,1)
    }
    console.log(items)
    let cijenaBez$; 
    
    cijenaBez$=cijena[brojItema].innerHTML.substring(1);
    //console.log(cijenaBez$+ " OVO JE CIJENA TRENUTNOG ITEMA OBRISANOG")
    //console.log(items.length)
    for(let i=0; i<items.length; i++){
        stariHTML=stariHTML+
    `<div class="cartItem">
        <p class="imeModela">${items[i].ime}</p>
        <div class="cartLinija">
        </div>
        <p class="cijenaModela">${items[i].cijena}</p>
        <div onclick="obrisiItemStore(${i},${items[i].cijena.substring(1)})"class="cartX">
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
    console.log("CENA "+cena)
    cijenaUkupnoStore=Number(cijenaUkupnoStore)-Number(cijenaBez$);
    finalnaCijena[0].innerHTML="$"+cijenaUkupnoStore;
    headerCijena.innerHTML="$"+cijenaUkupnoStore;
    
}


//iz contacta da prebaci samo na store kad stisnem npr katanu prvenstveno je trebalo da kad stisnem samo katane da mi u store izadju samo katane
//al posto nisam radia na optimalan nacin klase elemenata to nije moguce pa nek stoji ovako sad

function contactStore(broj){
    prebaciStore();
}

function dugmeTextPc(){
    let pcDugme=document.getElementById("dugmeKupide5").style.background="rgb(112, 0, 0)";
    let pcDugmeP=document.getElementById("dugmeKupide5p").innerHTML="Add To Cart"
}

//email smptjs
function sendMail(){
    let ime=document.getElementById("inputName").value;
    let mejl=document.getElementById("inputMejl").value;
    let poruka=document.getElementById("inputPoruka").value;
    let naslov=document.getElementById("inputSubject").value;
    Email.send({
        Host : "smtp.gmail.com",
        Username : "jojokatanashop@gmail.com",
        Password : "k3ch3ri619",
        To : mejl,
        From : "jojokatanashop@gmail.com",
        Subject : "Your Delivery",
        Body : `Pozdrav ${ime} Primili smo narudzbu-- ${poruka}-- stize za 2 dana,
        jojokatanashop.com`
    }).then(
      message => alert("PogledajderMejl")
    );
}





