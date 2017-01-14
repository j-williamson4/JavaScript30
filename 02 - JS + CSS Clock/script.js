const secondHand = document.querySelector('.second-hand');  
const minuteHand = document.querySelector('.min-hand');  
const hourHand = document.querySelector('.hour-hand');    

function setDate() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
    const secToDeg = ((second/60) * 360) + 90;
    const minToDeg = ((minute/60) * 360) + 90;
    const hourToDeg = ((hour/12) * 360) + 90;
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`;   
}

setInterval(setDate, 1000);