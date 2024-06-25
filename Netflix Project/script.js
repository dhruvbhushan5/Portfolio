let box = document.createElement("div");
box.id = "box"; // Set id for styling
box.innerText = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week.";

let p = document.getElementById("faqbox");
let boxDisplayed = false;
let plusSignDisplayed = true;

p.addEventListener("click", function() {
    let hugeicon = p.querySelector('.hugeicon');
    
    if (hugeicon) {
        if (plusSignDisplayed) {
            hugeicon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
            plusSignDisplayed = false;
        } else {
            hugeicon.innerHTML = '<img id="img1" src="https://cdn.hugeicons.com/icons/plus-sign-stroke-rounded.svg" alt="plus-sign" width="24" height="24"/>';
            plusSignDisplayed = true;
        }
    }
    
    if (!boxDisplayed) {
        p.after(box);
        boxDisplayed = true;
    } else {
        box.remove();
        boxDisplayed = false;
    }
});




//second part

let secondbox = document.createElement("div");
secondbox.id = "secondbox";
secondbox.innerText = "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.";


let h = document.getElementById("faqbox1");


let secondBoxDisplayed = false;
let plusSignDisplayed2 = true;


h.addEventListener("click", function(){
   
    let hugeicon = h.querySelector('.hugeicon');
    

    
    if (hugeicon) {
       
        if (plusSignDisplayed2) {
            hugeicon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
            plusSignDisplayed2 = false;
        } else {
            hugeicon.innerHTML = '<img id="img1" src="https://cdn.hugeicons.com/icons/plus-sign-stroke-rounded.svg" alt="plus-sign" width="24" height="24"/>';
            plusSignDisplayed2 = true;
        }
    }
    
   
    if (!secondBoxDisplayed) {
        h.after(secondbox);
        secondBoxDisplayed = true;
    } else {
        secondbox.remove();
        secondBoxDisplayed = false;
    }
});





//third
let thirdbox = document.createElement("div");
thirdbox.id = "thirdbox";
thirdbox.innerText = "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.";


let d = document.getElementById("faqbox2");
let thirdboxDisplayed = false;
let plusSignDisplayed3 = true;


d.addEventListener("click", function(){
   
    let hugeicon = d.querySelector('.hugeicon');
    

    
    if (hugeicon) {
        
        if (plusSignDisplayed3) {
            hugeicon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
            plusSignDisplayed3 = false;
        } else {
            hugeicon.innerHTML = '<img id="img1" src="https://cdn.hugeicons.com/icons/plus-sign-stroke-rounded.svg" alt="plus-sign" width="24" height="24"/>';
            plusSignDisplayed3 = true;
        }
    }
    
   
    if (!thirdboxDisplayed) {
        d.after(thirdbox);
        thirdboxDisplayed = true;
    } else {
        thirdbox.remove();
        thirdboxDisplayed = false;
    }
});




//forth
let forthbox = document.createElement("div");
forthbox.id = "forthbox";
forthbox.innerText = "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";


let e = document.getElementById("faqbox3");
let forthboxDisplayed = false;
let plusSignDisplayed4 = true;


e.addEventListener("click", function(){
    
    let hugeicon = e.querySelector('.hugeicon');
    

   
    if (hugeicon) {
      
        if (plusSignDisplayed4) {
            hugeicon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
            plusSignDisplayed4 = false;
        } else {
            hugeicon.innerHTML = '<img id="img1" src="https://cdn.hugeicons.com/icons/plus-sign-stroke-rounded.svg" alt="plus-sign" width="24" height="24"/>';
            plusSignDisplayed4 = true;
        }
    }
    
    
    if (!forthboxDisplayed) {
        e.after(forthbox);
        forthboxDisplayed = true;
    } else {
        forthbox.remove();
        forthboxDisplayed = false;
    }
});



//fifth
let fifthbox = document.createElement("div");
fifthbox.id = "fifthbox";
fifthbox.innerText = "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.";

let f = document.getElementById("faqbox4");
let fifthboxDisplayed = false;
let plusSignDisplayed5 = true;


f.addEventListener("click", function(){
   
    let hugeicon = f.querySelector('.hugeicon');
    

    
    if (hugeicon) {
        
        if (plusSignDisplayed5) {
            hugeicon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
            plusSignDisplayed5 = false;
        } else {
            hugeicon.innerHTML = '<img id="img1" src="https://cdn.hugeicons.com/icons/plus-sign-stroke-rounded.svg" alt="plus-sign" width="24" height="24"/>';
            plusSignDisplayed5 = true;
        }
    }
    
    
    if (!fifthboxDisplayed) {
        f.after(fifthbox);
        fifthboxDisplayed = true;
    } else {
        fifthbox.remove();
        fifthboxDisplayed = false;
    }
});

//sixth
let sixthbox = document.createElement("div");
sixthbox.id = "sixthbox";
sixthbox.innerText = "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.";

let g = document.getElementById("faqbox5");
let sixthboxDisplayed = false;
let plusSignDisplayed6 = true;


g.addEventListener("click", function(){
    
    let hugeicon = g.querySelector('.hugeicon');
    

    if (hugeicon) {
        
        if (plusSignDisplayed6) {
            hugeicon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
            plusSignDisplayed6 = false;
        } else {
            hugeicon.innerHTML = '<img id="img1" src="https://cdn.hugeicons.com/icons/plus-sign-stroke-rounded.svg" alt="plus-sign" width="24" height="24"/>';
            plusSignDisplayed6 = true;
        }
    }
    
    
    if (!sixthboxDisplayed) {
        g.after(sixthbox);
        sixthboxDisplayed = true;
    } else {
        sixthbox.remove();
        sixthboxDisplayed = false;
    }
});