let stopwatch = {
    time: 0,
    interval: null,
    start: function(){
        this.interval = setInterval(() => {
            this.time++;
            console.log(this.time);
        }, 1000);
    },
    stop: function(){
        clearInterval(this.interval);
        this.interval = null;
    },
    reset: function(){
        if(this.interval){
            clearInterval(this.interval);
            this.interval = null;
        }
        this.time = 0;
    }
}
// console.log("start first time");
// stopwatch.start();

// setTimeout(() => {
//     console.log("stop first time");
//     stopwatch.stop();
// }, 5000);

// setTimeout(() => {
//     console.log("Start second time");
//     stopwatch.start();
// }, 8000);
// setTimeout(() => {
//     console.log("Reset first time");
//     stopwatch.reset();
// }, 10000);
// setTimeout(() => {
//     console.log("start last time");
//     stopwatch.start();
// }, 12000);

let [start,stop,reset] = (function (){
    let time = 0;
    let interval = null;
    function start(){
        setInterval(() => {
            time++;
            console.log(time);
        }, 1000);
    }
    function stop(){
        clearInterval();
        interval = null;
    }
    function reset(){
        if(interval){
            clearInterval(interval);
            interval = null;
        }
        time = 0;
    }
    return [
        start,
        stop,
        reset
    ]
})()
// console.log("start first time");
// start()

// setTimeout(() => {
//     console.log("stop first time");
//     stop();
// }, 5000);

// setTimeout(() => {
//     console.log("Start second time");
//     start();
// }, 8000);
// setTimeout(() => {
//     console.log("Reset first time");
//     reset();
// }, 10000);
// setTimeout(() => {
//     console.log("start last time");
//     start();
// }, 12000);

let {start: pocni,stop: zastani,reset: resetiraj} = (function (){
    let time = 0;
    let interval = null;
    function start(){
        setInterval(() => {
            time++;
            console.log(time);
        }, 1000);
    }
    function stop(){
        clearInterval();
        interval = null;
    }
    function reset(){
        if(interval){
            clearInterval(interval);
            interval = null;
        }
        time = 0;
    }
    return {
        start,
        stop,
        reset
    }
})()