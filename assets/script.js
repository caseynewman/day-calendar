let currentDay = document.querySelector('#current-day');
const divs = document.querySelectorAll('.py-3');
const textAreas = document.querySelectorAll('.description');
const setCurrentTime = dayjs().format('HH:mm');




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
        console.log (currentHour, divHour)
    } else if (divHour > currentHour) {
        textDiv.classList.add("future");
    }
}

setBackgrounds()


const storeToDos = () => {
    textAreas.innerText = '';
}


//save things in localStorage
//get value from text input
//save to local storage (also save the time! as an object)