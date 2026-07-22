// ==============================
// Alpha Grand Beach Resort
// script.js
// ==============================

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});

// Booking Form

const bookingForm = document.querySelector("#booking form");

if(bookingForm){

bookingForm.addEventListener("submit",function(e){

e.preventDefault();

const name=bookingForm.querySelector('input[type="text"]').value;

const phone=bookingForm.querySelector('input[type="tel"]').value;

const email=bookingForm.querySelector('input[type="email"]').value;

if(name==="" || phone==="" || email===""){

alert("Please fill all required booking details.");

return;

}

alert(
`🎉 Booking Confirmed!

Thank you ${name}.

Your booking request has been submitted successfully.

Our reception team will contact you soon.

Thank you for choosing Alpha Grand Beach Resort.`
);

bookingForm.reset();

});

}

// Feedback Form

const feedback=document.querySelector("#feedback form");

if(feedback){

feedback.addEventListener("submit",function(e){

e.preventDefault();

const username=feedback.querySelector('input[type="text"]').value;

if(username===""){

alert("Please enter your name.");

return;

}

alert(
`❤️ Thank You ${username}!

Your feedback has been submitted successfully.

We appreciate your valuable review.

Hope to see you again!`
);

feedback.reset();

});

}

// Sticky Navbar

window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>100){

header.style.background="#002244";

header.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

}else{

header.style.background="rgba(0,0,0,.7)";

header.style.boxShadow="none";

}

});

// Reveal Animation

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition="all .8s ease";

observer.observe(section);

});

// Room Card Animation

document.querySelectorAll(".room-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// Gallery Animation

document.querySelectorAll(".gallery img").forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.08)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});

});

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.background="gold";
topBtn.style.border="none";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Welcome Message

window.onload=function(){

console.log("Welcome to Alpha Grand Beach Resort");

alert("🏨 Welcome to Alpha Grand Beach Resort!");

};
