const timeout = (ms) => {
    return new Promise(res => setTimeout(res, ms));
}

let array = [];
const bars = document.querySelector("#bars");

function createNewArray(barsCount) {
    deletePrevious();

    const array = []

    for (let i = 0; i < barsCount; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);

        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function deletePrevious() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

let arraySize = document.querySelector('#array-size');
arraySize.addEventListener('input', () => {
    createNewArray(parseInt(arraySize.value));
});

const newSort = document.querySelector(".new-sort");
newSort.addEventListener("click", () => { 
    
    createNewArray(arraySize.value);
    

});

function swap(firstElement, secondElement) {
    let temp = firstElement.style.height;
    firstElement.style.height = secondElement.style.height;
    secondElement.style.height = temp;
}

async function bubbleSort() {
    const elements = document.querySelectorAll(".bar");
    for(let i = 0; i < elements.length-1; i++){
        for(let j = 0; j < elements.length-i-1; j++){
            elements[j].style.background = 'blue';
            elements[j+1].style.background = 'blue';
            if(parseInt(elements[j].style.height) > parseInt(elements[j+1].style.height)){
                await timeout(100);
                swap(elements[j], elements[j+1]);
            }
            elements[j].style.background = 'cyan';
            elements[j+1].style.background = 'cyan';
        }
        elements[elements.length-1-i].style.background = 'green';
    }
    elements[0].style.background = 'green';
}


const startSortingButton = document.querySelector(".sorting");
startSortingButton.addEventListener('click', async function(){
    await bubbleSort();
});
