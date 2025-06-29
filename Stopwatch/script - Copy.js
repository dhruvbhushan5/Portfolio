const playbutton = document.getElementsByClassName("play")[0];
const lapbutton = document.getElementsByClassName("lap")[0];
const resetbutton = document.getElementsByClassName("reset")[0];
const clearbutton = document.getElementsByClassName("laps-clear")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const centisecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];
const bg = document.getElementsByClassName("outer-circle")[0];


let isplay = false;
let seccounter = 0;
let sec;
let centisec;
let centicounter = 0;
let min;
let mincounter = 0;
let isreset = false;
let lapitem = 0;

const togglebutton = () => {
    lapbutton.classList.remove("hidden")
    resetbutton.classList.remove("hidden")
}
const play = () => {
    if (!isplay && !isreset) {
        playbutton.innerHTML = 'Pause';
        bg.classList.add("animation-bg");
        min = setInterval(() => {

            minute.innerHTML = `${++mincounter} :`;
        }, 60 * 1000);
        sec = setInterval(() => {
            if (seccounter === 60) {
                seccounter = 0;
            }
            second.innerHTML = `&nbsp;${++seccounter} :`;
        }, 1000);
        centisec = setInterval(() => {
            if (centicounter === 100) {
                centicounter = 0;
            }
            centisecond.innerHTML = `&nbsp;${++centicounter}`;

        }, 10);
        isplay = true;
        isreset = true;
    } else {
        playbutton.innerHTML = 'Play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centisec);
        isplay = false;
        isreset = false;
        bg.classList.remove("animation-bg");
    }
    togglebutton();
}
const reset = () => {
    isreset = true;
    mincounter = 0;
    seccounter = 0;
    centicounter = 0;
    play();
    lapbutton.classList.add("hidden");
    resetbutton.classList.add("hidden");
    minute.innerHTML = '0 :';
    second.innerHTML = '&nbsp;0 :';
    centisecond.innerHTML = '&nbsp;0 ';
    clearall();
}


const lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timestamp = document.createElement("span");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    timestamp.setAttribute("class", "time-stamp");
    number.innerText = `#${++lapitem}`
    number.style.color = "white";

    timestamp.innerHTML = `${mincounter} : ${seccounter} : ${centicounter}`;
    li.append(number, timestamp);
    laps.append(li);
    clearbutton.classList.remove("hidden");
}
const clearall = () => {
    laps.innerHTML = '';
    laps.append(clearbutton);
    clearbutton.classList.add("hidden");
    lapitem = 0;
}
playbutton.addEventListener("click", play);
resetbutton.addEventListener("click", reset);
lapbutton.addEventListener("click", lap);
clearbutton.addEventListener("click", clearall)