//displaying today's date

//dayjs - probs use Now and format, read the docs
//get today's date in the right format and save it to a variable

let currentDay = document.querySelector('#current-day') 


const createDate = () => {
    const p = document.createElement('p')
    p.innerText = dayjs().format('dddd, MMMM D, YYYY')
    currentDay.appendChild(p)
}


createDate()


//console.log that variable
//append to page
    //create an element
    //set innerText to that variable I just made
    //append that to the currentDay div


//use dayjs to get the current hour and store it in a variable
//could use setInterval to make past/present/future dynamic - though not required
const divs = document.querySelectorAll('.py-3'); //this is an array
console.log(divs)
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