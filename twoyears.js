const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<200;i++){
    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        radius:Math.random()*1.5,
        speed:Math.random()*0.3
    });
}

function drawStars(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";

    stars.forEach(star=>{
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI*2);
        ctx.fill();

        star.y += star.speed;

        if(star.y > canvas.height){
            star.y = 0;
            star.x = Math.random()*canvas.width;
        }
    });

    requestAnimationFrame(drawStars);
}

drawStars();
ctx.fillStyle="rgba(255,255,255,0.8)";



const car = document.getElementById("car")

function moveCar(){

let x = Math.random() * window.innerWidth
let y = Math.random() * window.innerHeight

car.style.transform = "translate(" + x + "px," + y + "px)"

}

setInterval(moveCar, 3000)

function openEnvelope(){

document.getElementById("envelopeContainer").style.display="block";

createHearts();

}

function createHearts(){

for(let i=0;i<20;i++){

let heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*300+"px";
heart.style.top=Math.random()*200+"px";
heart.style.animationDelay=Math.random()*3+"s";

document.getElementById("envelopeContainer").appendChild(heart);

}

}