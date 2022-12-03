const { fromEvent, pipe, observable, map, timer, take, interval} = rxjs;

document.getElementById('secondText').value = "";
document.getElementById('minuteText').value = "";
document.getElementById('hourText').value= "";

const start_btn = document.getElementById('startButton');
const countHTML = document.getElementById('countdownBox')


fromEvent(start_btn, 'click').subscribe(() => {
    let inputSec = (parseInt(document.getElementById('secondText').value));
    let inputMin = (parseInt(document.getElementById('minuteText').value));
    let inputHour = (parseInt(document.getElementById('hourText').value));

    if(!inputSec){
        inputSec = 0;
    };
    
    if(!inputMin){
        inputMin = 0;
    };
    
    if(!inputHour){
        inputHour = 0;
    };
    
    if(!inputSec && !inputMin && !inputHour ){
        alert("Timer will not start until user enters valid numbers!");
    }
    else{
        let timerSec = inputSec;
        let timerMin = inputMin* 60;
        let timerHour = inputHour* 60 * 60;

        let total_time = timerSec + timerMin + timerHour;
        countdown(total_time);
    }

});

const displayTimeUnits = (time) => ({
    hours: Math.floor(time / 3600),
    minutes: Math.floor((time % 3600 / 60)),
    seconds: Math.floor(time % 3600 % 60)
});

function countdown(timer) {
    
    const time = interval(1000); 

        time
        .pipe(take(timer))
        .pipe(map((val) => (timer - 1) - val)) 
        .pipe(map(displayTimeUnits)) 
        .subscribe((time) => {
            let html = "";
            html = `<div id="countdown">${time.hours} : ${time.minutes} : ${time.seconds}</div>`
            countHTML.innerHTML = html;
        });

}



