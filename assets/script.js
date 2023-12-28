let currentDay = document.querySelector('#current-day');
const divs = document.querySelectorAll('.py-3');
const textAreas = document.querySelectorAll('.description');
const setCurrentTime = dayjs().format('HH:mm');
const saveButton = document.querySelectorAll('.saveBtn');




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



saveButton.forEach((saveButton) => {
    saveButton.addEventListener('click', function(event) {
        event.preventDefault();

        const toDos = {
            input: textAreas.value,
        };
        
        localStorage.setItem('userToDos', JSON.stringify(toDos));
        displayToDos();
    })
})


const displayToDos = () => {
    const textAreas = JSON.parse(localStorage.getItem('userToDos'));
    if (textAreas !== null) {
        textAreas.textContent = toDos
    }
}





// const storeToDos = () => {
//     const toDoItems = document.createElement('p');
//     toDoItems.innerText = '';
//     textAreas.appendChild(toDoItems);
// }








//save things in localStorage
//get value from text input
//save to local storage (also save the time! as an object)