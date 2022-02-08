const waiting = 100;
const min = 0;
const max = 100;
const size = 10;
const random = makeRandom(min, max);
const bars = getSizes();

function timeout(time) {
    return new Promise(res => setTimeout(res, time));
}

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--){
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

function makeRandomSort(size, random) {
    const arr = Array.from(new Array(size), random);
    return arr;
}

function getSizes() {
    const arr = makeRandomSort(size, random);

    return arr.map(x => ({
        value: x,
        size: x * 20
    }));
}

function start() {

}

function makeVisual(bars) {
    const button = document.getElementById('button');
    const container = document.getElementById('container');
    button.addEventListener("click", start);
    
    bars.forEach(bar => {
        const singleBar = document.createElement('div');
        singleBar.classList.add('single-bar');
        singleBar.style.height = `${bar.size}px`;
        container.appendChild(singleBar);
    });

}

function makeRandom(min, max) {
    return () => Math.floor(Math.random() * (max - min) + min);
}