let hourNumbers = document.querySelector("#hour-numbers");
let hourHand = document.querySelector("#hourHand");
let minuteHand = document.querySelector("#minuteHand");
let secondHand = document.querySelector("#secondHand");


function eachSecond() {
    setTimeout(() => {
        const date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds  = date.getSeconds();

        let secondHandDegs = 90 + (seconds * 6);
        let minuteHandDegs = 90 + (minutes * 6);
        let hourHandDegs = 90 + (hour * 30);

        secondHand.style.transform = `rotate(${secondHandDegs}deg)`;
        minuteHand.style.transform = `rotate(${minuteHandDegs}deg)`;
        hourHand.style.transform = `rotate(${hourHandDegs}deg)`;

        if(minutes < 10) {
            hourNumbers.innerText = `${hour}:0${minutes}`;
        }
        else{
            hourNumbers.innerText = `${hour}:${minutes}`;
        }
        console.log("ha pasao' un segundo")
        eachSecond()
    },1000)
}

eachSecond();
