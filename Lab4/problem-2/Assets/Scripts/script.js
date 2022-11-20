const { fromEvent } = rxjs;

const start_btn = document.getElementById('startButton');

const observeStart = fromEvent(start_btn, 'click');

const subscriptionStart = observeStart.subscribe(event => {
    subscriptionStart.unsubscribe();
});