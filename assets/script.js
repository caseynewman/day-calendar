let currentDay = document.querySelector('#current-day');
const divs = document.querySelectorAll('.py-3');
const textAreas = document.querySelectorAll('.description');
const setCurrentTime = dayjs().format('HH:mm');
const saveButtonArr = document.querySelectorAll('button');


const setCurrentDate = () => {
    const p = document.createElement('p');
    p.innerText = dayjs().format('dddd, MMMM D, YYYY');
    currentDay.appendChild(p);
}

setCurrentDate()

const setBackgrounds = () => {
    for (let i = 0; i < divs.length; i++) {
        let hourDiv = divs[i];
        let textDiv = textAreas[i];
        changeBackgroundColor(hourDiv, textDiv);
    }
}

const changeBackgroundColor = (hourDiv, textDiv) => {
    let divHour = parseInt(hourDiv.innerText);
    let currentHour = parseInt(setCurrentTime);
    if (divHour < currentHour) {
        textDiv.classList.add("past");
    } else if (divHour === currentHour) {
        textDiv.classList.add("present");
    } else if (divHour > currentHour) {
        textDiv.classList.add("future");
    }
}

setBackgrounds()

for (let i = 0; i < saveButtonArr.length; i++) {
    const saveText = () => {
        const text = textAreas[i].value;
        localStorage.setItem(i, text);
    }
    saveButtonArr[i].addEventListener('click', saveText)
}

for (let i = 0; i < textAreas.length; i++) {
    textAreas[i].value = localStorage.getItem(i);
}