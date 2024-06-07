var secondHand = document.querySelector('.second-hand');
var minsHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');
var digi = document.getElementById('digital');

var digi = document.getElementById("digital");




function setDate() {
    var now = new Date();
    var seconds = now.getSeconds();
    var secondsDegree = ((seconds / 60 ) * 360 ) + 90 ;
    secondHand.style.transform = `rotate(${secondsDegree}deg)` ;

    var mins = now.getMinutes();
    var minsDegree = ((mins / 60 ) * 360 ) + 90 ;
    minsHand.style.transform = `rotate(${minsDegree}deg)` ;

    var hour = now.getHours();
    var hourDegree = ((hour / 12 ) * 360 ) + 90 ;
    hourHand.style.transform = `rotate(${hourDegree}deg)` ;

   
 digi.innerHTML = hour + ":" + mins + ":" + seconds;
}

setInterval(setDate,1000);








