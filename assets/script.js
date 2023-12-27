let currentDay = document.querySelector('#current-day');
const divs = document.querySelectorAll('.py-3');
const textAreas = document.querySelectorAll('.description');





const setCurrentDate = () => {
    const p = document.createElement('p');
    p.innerText = dayjs().format('dddd, MMMM D, YYYY');
    currentDay.appendChild(p);
}

setCurrentDate()


const setCurrentTime = dayjs().format('HH:mm');


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
    } else if (divHour = currentHour) {
        textDiv.classList.add("present");
    } else if (divHour > currentHour) {
        textDiv.classList.add("future");
    }
}

setBackgrounds()


//use dayjs to get the current hour and store it in a variable
//could use setInterval to make past/present/future dynamic - though not required

// const divs = document.querySelectorAll('.py-3'); //this is an array


//for loop
    //get innerText from each div
    //compare that to the current hour (if statement)
        //if that innerText is less than current hour
        //.setAttribute('class', 'row time-block past')
        //if innerText is equal to the current hour
        //.setAttribue('class', 'row time-block past')
        //...


//save things in localStorage
//get value from text input
//save to local storage (also save the time! as an object)