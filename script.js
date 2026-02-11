/* ===== SCROLL REVEAL ===== */
const sections = document.querySelectorAll(".glass");

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.2});

sections.forEach(sec=>observer.observe(sec));

/* ===== TYPING EFFECT ===== */
const text = "CSE Student | Frontend Developer | Competition Builder";
const typing = document.querySelector(".typing");
let i = 0;

function type(){
if(i < text.length){
typing.innerHTML += text.charAt(i);
i++;
setTimeout(type,40);
}
}
type();

/* ===== CURSOR GLOW FOLLOWER ===== */
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
glow.style.left = e.clientX+"px";
glow.style.top = e.clientY+"px";
});

/* ===== DARK LIGHT TOGGLE ===== */
const toggle = document.getElementById("themeToggle");

toggle.onclick = ()=>{
document.body.classList.toggle("light");
};

/* ===== 3D TILT EFFECT ===== */
document.querySelectorAll(".tilt").forEach(card=>{
card.addEventListener("mousemove",(e)=>{
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateX = (y/rect.height -0.5)*10;
const rotateY = (x/rect.width -0.5)*-10;

card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener("mouseleave",()=>{
card.style.transform = "rotateX(0) rotateY(0)";
});
});
