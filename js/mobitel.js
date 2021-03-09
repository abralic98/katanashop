function otvoriDesniBar(){
    let fon=document.getElementById("fon");
    let bar=document.getElementById("desniBar");
    bar.style.display="flex";

    fon.style.animation="livoNestani 1s forwards";
    fon.style.position="absolute";
    
    bar.style.animation="desnoStvoriSe 1s forwards";

    setTimeout(nestaniFon,1000);  
}
function zatvoriDesniBar(broj){
    let fonHeader=document.getElementById("fonHeader");
    let fon=document.getElementById("fon");
    let store=document.getElementById("fonStore");
    let home=document.getElementById("fonHome");
    let bar=document.getElementById("desniBar");
    let faq=document.getElementById("fonFAQ");
    let contact=document.getElementById("fonContact");
    fon.style.display="block";
    if (broj==0){
        home.style.display="block";
        faq.style.display="none";
        contact.style.display="none"
        store.style.display="none";
    }
    if(broj==1){//store
        home.style.display="none";
        faq.style.display="none";
        contact.style.display="none";
        store.style.display="block";
    }
    if (broj==2){//faq  
        home.style.display="none";
        faq.style.display="flex";
        contact.style.display="none"
        store.style.display="none";
    }
    if (broj==3){//contact
        home.style.display="none";
        faq.style.display="none";
        contact.style.display="block"
        store.style.display="none";
    }
    fon.style.animation="livoStvoriSe 1s forwards";
    bar.style.animation="desnoNestani 1s forwards";
    setTimeout(nestaniBar,1000)
    
}
function nestaniFon(){  
    let fon=document.getElementById("fon");
    fon.style.display="none";
}
function nestaniBar(){
    let bar=document.getElementById("desniBar");
    bar.style.display="none";
}
function nestaniFilter(){
    let filter=document.getElementById("desniBarFilter");
    filter.style.display="none";
}

let brojrotiranja1=-1;
function zarotirajStrelicu1(brojStrelice){
    brojrotiranja1++
    let strelica1=document.getElementsByClassName("faqStrelica1");
    let linija1=document.getElementsByClassName("pitanjaLinija1");
    let odgovor1=document.getElementsByClassName("odgovor1");
    console.log(odgovor1.length)
    for(let i=0; i<8; i++){
        if(i!=brojStrelice){
            odgovor1[i].style.display="none";
            if(brojrotiranja1>0){
                strelica1[i].style.animation="strelicaRotateR .5s forwards";
            }
            
        }
    }
    if(linija1[brojStrelice].style.background!="red"){
        strelica1[brojStrelice].style.animation="strelicaRotate .5s forwards";
        odgovor1[brojStrelice].style.display="block";
        console.log("blok")
        
    }else{
        strelica1[brojStrelice].style.animation="strelicaRotateR .5s forwards";
        odgovor1[brojStrelice].style.display="block";
    }
  
}
function sendMail1(){
    let ime=document.getElementById("inputName1").value;
    let mejl=document.getElementById("inputMejl1").value;
    let poruka=document.getElementById("inputPoruka1").value;
    let naslov=document.getElementById("inputSubject1").value;
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

// store dio

function desniMenuFilter(){
    let filter=document.getElementById("desniBarFilter");
    let fon=document.getElementById("fon");
    filter.style.display="flex";
    fon.style.animation="livoNestani 1s forwards";
    fon.style.position="absolute";
    
    filter.style.animation="desnoStvoriSe 1s forwards";

    setTimeout(nestaniFon,1000)   
}
function desniMenuFilterR(){
    let filter=document.getElementById("desniBarFilter");
    let fon=document.getElementById("fon");

    fon.style.display="block";
    fon.style.animation="livoStvoriSe 1s forwards";
    filter.style.position="relative";
    filter.style.animation="desnoNestani 1s forwards";

    setTimeout(nestaniFilter,1000);
}


// klase za fon
let brojElementaFon=0;
function pozoviKlasuItema1(broj,brojItema){//broj je 1 2 3..> koju klasu sam izabra brojItema je parametar iz htmla koliko itema ima u toj klasi
    brojElementaFon=broj;//broj klase
    let slika=document.querySelectorAll(".fonStore .fonCrniDioNovi .element .slikaElementa .slikaElementaIMG"); //slika element
    let ime=document.querySelectorAll(".fonStore .fonCrniDioNovi .element .opisElementa .opisElementaP"); //ime elementa
    let cijena=document.querySelectorAll(".fonStore .fonCrniDioNovi .element .cijenaElementa .cijenaElementaP"); //cijena elementa
    let cijeliElement=document.querySelectorAll(".fonStore .fonCrniDioNovi .element");
    let filter=document.getElementById("filterFon");
    
    //default
    
    if(brojElementaFon==0){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/novekatane/${i+1}_2.jpg`;
        }
        filter.innerHTML="New Models";
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
    if(brojElementaFon==1){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/1060/${i+1}_2.jpg`;
        }
        filter.innerHTML="1060 Carbon Steel";
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
        desniMenuFilterR();
    }
    //klasa 2
    if(brojElementaFon==2){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/2klasa/${i+1}_2.jpg`;
        }
        filter.innerHTML="T10 Clay Tempered Steel";
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
        desniMenuFilterR();
    }
    
    //klasa3
    if(brojElementaFon==3){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/3klasa/${i+1}_2.jpg`;
        }
        filter.innerHTML="T10 Folded Clay Tempered Steel";
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
        desniMenuFilterR();
    }

    //klasa4
    if(brojElementaFon==4){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/4klasa/${i+1}_2.jpg`;
        }
        filter.innerHTML="Tamahagane Steel";
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
        desniMenuFilterR();
        
    }

    //klasa5
    if(brojElementaFon==5){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/5klasa/${i+1}_2.jpg`;
        }
        filter.innerHTML="1060 Folded Steel";
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
        desniMenuFilterR();
    }

    //klasa6
    if(brojElementaFon==6){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/6klasa/${i+1}_2.jpg`;
        }
        filter.innerHTML="1095 Folded Steel";
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
        desniMenuFilterR();
    }

    //klasa7
    if(brojElementaFon==7){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/6klasa/${i+1}_2.jpg`;
        }
        filter.innerHTML="9260 Folded Spring Steel";
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
        desniMenuFilterR();
    }

    //klasa8
    if(brojElementaFon==8){
        for(let i=0; i<brojItema; i++){//stvori slike te kklase
            slika[i].src=`images/8klasa/${i+1}_2.jpg`;
        }
        filter.innerHTML="T10 Folded Steel";
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
        desniMenuFilterR();
    }

}
function velikaSlikaAbsolute(){//da postane absolut
    let velikaSlika=document.getElementById("velikaSlika").style.position="absolute";
}
function velikaSlikaFixed(){
    let velikaSlika=document.getElementById("velikaSlika").style.position="fixed";
}
function fonOtvoriElement(broj){
    let fon=document.getElementById("fon");
    let velikaSlika=document.getElementById("velikaSlika"); // u novom bloku
    let imeElementa=document.getElementById("imeElementaFon"); // u novom bloku
    let cijenaElementa=document.getElementById("cijenaElementaFon"); // u novom bloku
    let slikaElementa=document.getElementById("slikaElementaFon");
    
    let slika=document.querySelectorAll(".fonStore .fonCrniDioNovi .element .slikaElementa .slikaElementaIMG"); //slika element u listi
    let ime=document.querySelectorAll(".fonStore .fonCrniDioNovi .element .opisElementa .opisElementaP"); //ime elementa u listi
    let cijena=document.querySelectorAll(".fonStore .fonCrniDioNovi .element .cijenaElementa .cijenaElementaP"); //cijena elementa u listi

    slikaElementa.src=slika[broj].src;
    imeElementa.innerHTML=ime[broj].innerHTML;
    cijenaElementa.innerHTML=cijena[broj].innerHTML;
    velikaSlika.style.display="flex";
    setTimeout(velikaSlikaAbsolute,1000);

    fon.style.animation="livoNestani 1s forwards";
    fon.style.position="absolute";
    
    velikaSlika.style.animation="desnoStvoriSe 1s forwards";

    setTimeout(nestaniFon,1000);  
}

function fonZatvoriElement(){
    let fon=document.getElementById("fon");
    let velikaSlika=document.getElementById("velikaSlika");
    velikaSlika.style.animation="desnoNestani 1s forwards";
    fon.style.display="block";
    fon.style.animation="livoStvoriSe 1s forwards";
    velikaSlikaFixed();

}

function otvoriFonCart(){
    let fon=document.getElementById("fon");
    let cart=document.getElementById("fonCartBar");  
    cart.style.display="flex";
    fon.style.animation="desnoNestani 1s forwards";
    cart.style.animation="livoStvoriSe 1s forwards";
    setTimeout(nestaniFon,1000); 
}
function cartAbsolute(){
    let cart=document.getElementById("fonCartBar");  
    cart.style.position="absolute";
    let dugmici=document.getElementsByClassName("cartBarDugmici");
    dugmici[1].style.position="relative";
}

function zatvoriCartFon(){
    let fon=document.getElementById("fon");
    let cart=document.getElementById("fonCartBar")

    fon.style.display="block";
    fon.style.animation="desnoStvoriSe 1s forwards";
    cart.style.animation="livoNestani 1s forwards";
    setTimeout(nestaniCart,1000)
}

function nestaniCart(){
    let cart=document.getElementById("fonCartBar").style.display="none";
}


function dodajItemFon(brojItema){
    
    let noviHTML="";
    let stariHTML="";
    let ime=document.querySelectorAll(".fon .fonCrniDioNovi .element .opisElementa .opisElementaP"); //ime elementa
    let cijena=document.querySelectorAll(".fon .fonCrniDioNovi .element .cijenaElementa .cijenaElementaP"); //cijena elementa
    let cijeliElement=document.querySelectorAll(".fon .fonCrniDioNovi .element");
    let editovanje=document.getElementById("listaItema1"); //cili blok
    let finalnaCijena=document.getElementsByClassName("zbrojenaCijenaFon");//block cijena
    let headerCijena=document.getElementById("cijenaCartFon");//home cijena
    setTimeout(cartAbsolute,1000);

    noviHTML.innerHTML=editovanje.innerHTML
    if(brojElementaFon==1){
        
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
    if(brojElementaFon==2){
    
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
    if(brojElementaFon==3){
        
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
    if(brojElementaFon==4){
        
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
    if(brojElementaFon==5){
        
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
    if(brojElementaFon==6){
        
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
    if(brojElementaFon==7){
       
        ime[0].innerHTML="Ninjato Sword 9260 Folded Spring Steel With Black Saya";
        cijena[0].innerHTML="$379";
        ime[1].innerHTML="Shirasaya Katana 9260 Folded Spring Steel";
        cijena[1].innerHTML="$589";
        ime[2].innerHTML="Shirasaya Katana 9260 Folded Spring Steel with Rosewood Saya & Buffalo Horn tips";
        cijena[2].innerHTML="$489";
    
    }

    //klasa8
    if(brojElementaFon==8){
       
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
        noviHTML+=
    `<div class="cartItem">
        <p class="imeModela">${items[i].ime}</p>
        <p class="cijenaModela">${items[i].cijena}</p>
        <div onclick="obrisiItemStoreFon(${i},${items[i].cijena.substring(1)})"class="cartX">
            <p> X </p> 
        </div>
    </div>
    <div class="cartLinija">
        </div>`;
    
    //console.log(items[i].ime)
    //console.log(brojItema)
    //console.log(noviHTML)
    //console.log("broj puta: "+i)
    }
    
    //console.log(noviHTML)
    editovanje.innerHTML=noviHTML;  

    cijenaUkupnoStore=Number(cijenaUkupnoStore)+Number(cijenaBez$);
    finalnaCijena[0].innerHTML="$"+cijenaUkupnoStore;
    headerCijena.innerHTML="$"+cijenaUkupnoStore;
    console.log(items.length)
    
}

function obrisiItemStoreFon(brojItema,cena){
    let stariHTML="";
    let ime=document.querySelectorAll(".fon .fonCrniDioNovi .element .opisElementa .opisElementaP"); //ime elementa
    let cijena=document.querySelectorAll(".fon .fonCrniDioNovi .element .cijenaElementa .cijenaElementaP"); //cijena elementa
    let cijeliElement=document.querySelectorAll(".fon .fonCrniDioNovi .element");
    let editovanje=document.getElementById("listaItema1"); //cili blok
    let headerCijena=document.getElementById("cijenaCartFon");//home cijena
    let finalnaCijena=document.getElementsByClassName("zbrojenaCijenaFon");//block cijena
    
    
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
        
        <p class="cijenaModela">${items[i].cijena}</p>
        <div onclick="obrisiItemStoreFon(${i},${items[i].cijena.substring(1)})"class="cartX">
            <p> X </p> 
        </div>
    </div>
    <div class="cartLinija">
        </div>`;

    }
    cijenaBez$=cena;

    editovanje.innerHTML=stariHTML;   
    cijenaUkupnoStore=Number(cijenaUkupnoStore)-Number(cijenaBez$);
    finalnaCijena[0].innerHTML="$"+cijenaUkupnoStore;
    headerCijena.innerHTML="$"+cijenaUkupnoStore;
    console.log(headerCijena)
    
}

function dugmeText(){//zeleno crveno add to cart
    let fonDugme=document.getElementById("fonDugme").style.background="rgb(112, 0, 0)";
    let fonDugmeP=document.getElementById("fonDugmeP").innerHTML="Add To Cart"
}

function addToCartFon1(){ //  dodavanje u store sa bara di je jedan element i velikka slika
    let ime=document.getElementById("imeElementaFon");
    let noviHTML="";
    let cijena=document.getElementById("cijenaElementaFon");
    let editovanje=document.getElementById("listaItema1"); //cili blok
    let finalnaCijena=document.getElementsByClassName("zbrojenaCijenaFon");//block cijena
    let headerCijena=document.getElementById("cijenaCartFon");//home cijena
    let fonDugme=document.getElementById("fonDugme").style.background="rgb(0, 126, 48)";
    let fonDugmeP=document.getElementById("fonDugmeP").innerHTML="Added"
    setTimeout(dugmeText,500)
    let objekt=new item(ime.innerHTML,cijena.innerHTML);
    items.push(objekt);
    noviHTML.innerHTML=editovanje.innerHTML;
    let cijenaBez$; 
    cijenaBez$=cijena.innerHTML.substring(1);
    for(let i=0; i<items.length; i++){
        noviHTML+=
    `<div class="cartItem">
        <p class="imeModela">${items[i].ime}</p>
        <p class="cijenaModela">${items[i].cijena}</p>
        <div onclick="obrisiItemStoreFon(${i},${items[i].cijena.substring(1)})"class="cartX">
            <p> X </p> 
        </div>
    </div>
    <div class="cartLinija">
        </div>`;
    }
    editovanje.innerHTML=noviHTML;
    cijenaUkupnoStore=Number(cijenaUkupnoStore)+Number(cijenaBez$);
    finalnaCijena[0].innerHTML="$"+cijenaUkupnoStore;
    headerCijena.innerHTML="$"+cijenaUkupnoStore;
}

function slajder(){
    let store=document.getElementById("fonStore");
    let home=document.getElementById("fonHome");  
    let faq=document.getElementById("fonFAQ");
    let contact=document.getElementById("fonContact");
    home.style.display="none";
    faq.style.display="none";
    contact.style.display="none";
    store.style.display="block";
}