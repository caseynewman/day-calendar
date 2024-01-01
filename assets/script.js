let currentDay = document.querySelector('#current-day');
const divs = document.querySelectorAll('.py-3');
const textAreas = document.querySelectorAll('.description');
const setCurrentTime = dayjs().format('HH:mm');
const saveButtonArr = document.querySelectorAll('button');
// let userToDos = JSON.parse(localStorage.getItem('userToDos'));





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
        localStorage.setItem(i, text)
        console.log(text)
    }

    saveButtonArr[i].addEventListener('click', saveText)
}

for (let i = 0; i < textAreas.length; i++) {
    localStorage.getItem(i, text)

}





// const toDos = {
//     input: userToDos.value
// };

// saveButtonArr.forEach((saveButtonArr) => {
//     saveButtonArr.addEventListener('click', function(event) {
//         event.preventDefault();      
//         localStorage.setItem('userToDos', JSON.stringify(toDos));
//         displayToDos();
//     })
// })

// const displayToDos = () => {
//     if (userToDos !== null) {
//         userToDos.innerText = toDos.input;
//     }
// }


// userToDos.appendChild(toDos)



// const storeToDos = () => {
//     const toDoItems = document.createElement('p');
//     toDoItems.innerText = '';
//     textAreas.appendChild(toDoItems);
// }








//save things in localStorage
//get value from text input
//save to local storage (also save the time! as an object)