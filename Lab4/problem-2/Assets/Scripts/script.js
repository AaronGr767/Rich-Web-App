const { fromEvent, pipe, observable, map, timer, take, interval} = rxjs;

//const counter$ = interval(1000); // rxjs creation operator - will fire every second
const numberOfSeconds = 10;

const start_btn = document.getElementById('startButton');

const observeStart = fromEvent(start_btn, 'click');
let html = "";

let repoHTML = document.getElementById("countdownBox");

// const time = 5 // 5 seconds
// var timer$ = rxjs.Observable.interval(1000) // 1000 = 1 second     

// const subscriptionStart = observeStart.subscribe(event => {

//     const start = 10;
// timer$
//   .timer(100, 100) // timer(firstValueDelay, intervalBetweenValues)
//   .map(i => start - i)
//   .take(start + 1)
//   .subscribe(html += `<h3>${i}</h3>`)
//   .subscribe(repoHTML.innerHTML = html);
//     counter$.pipe(
//         scan((accumulator, current) => accumulator - 1, numberOfSeconds),
//         startWith(numberOfSeconds), // scan will not run the first time!
//         take(numberOfSeconds + 1),
//         html += `<h3>${numberOfSeconds}</h3>`,
//         repoHTML.innerHTML = html,
    
//         // optional
//         finalize(() => console.log(
//           'something to do, if you want to, when 0 is emitted and the observable completes'
//         ))
//     )
//     subscriptionStart.unsubscribe();
// });



