
// --------------------------------------------------------------
// I modified the mood-shop scripts so that I can 
// easily add more items to my page
import data from './data.js'
const itemsContainer = document.querySelector('#items')


for (let i = 0; i < data.length; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'item'
    const img = document.createElement('img');

    img.src = data[i].image
    img.width = 320
    img.height = 213
    newDiv.appendChild(img)
    console.log(img)
    itemsContainer.appendChild(newDiv)

    const title = document.createElement('h2');
    title.innerText = data[i].title
    newDiv.appendChild(title)
    

    const desc = document.createElement('p');
    desc.innerText = data[i].desc
    newDiv.appendChild(desc)

    const date = document.createElement('p');
    date.innerText = data[i].date
    newDiv.appendChild(date)
    // console.log(date)
    
}
// ----------------------------------------------

let yesCount = 0;
let noCount = 0;
let maybeCount = 0;
const inputYes = document.querySelector("#yes");
const inputNo = document.querySelector('#no');
const inputMaybe = document.querySelector('#maybe');
const messageP = document.querySelector('#message');

const voteButton = document.querySelector('#vote-button');
// event listener
voteButton.addEventListener('click', updateResults);
/*
description: Function to update and show results of radio button poll

parameters:

returns:
*/
function updateResults(e) {
    const isYes = inputYes.checked;
    const isNo = inputNo.checked;
    const isMaybe = inputMaybe.checked;
// make 3 seperate functions instead? plus a display function?
    if (isYes === true) {
        yesCount += 1;
    }
    else if (isNo === true) {
        noCount += 1;
    }
    else if (isMaybe === true) {
        maybeCount += 1;
    }

    console.log(yesCount)
    const totalVotes = yesCount + noCount + maybeCount;
    console.log(totalVotes)
    const yesPercent = (yesCount/totalVotes) * 100;
    const noPercent = (noCount/totalVotes) * 100;
    const maybePercent = (maybeCount/totalVotes) *100;
    
    // Maybe I could use a function to do the calculations.
    messageP.innerHTML = `Results:\nYes: ${yesPercent}%\nNo: ${noPercent}%\nMaybe: ${maybePercent}%`
    return false
    // need to have ?? return false to reset the radio poll


    // Questions:  \n not appearing?
    // I want the votes to keep counting.
    // after pressing submit, the page scrolls to the top, I would like it to 
    // stay where the poll is.

    //------------------------------------------
    //  I could write some code to input names and emails into a dictionary
    
}



 