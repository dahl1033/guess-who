console.log('Here are all the available people:', people);
console.log(people);
$(document).ready(onReady);

let randomNum = randomNumber(1, 7);

function onReady(){
    displayGame();
    $('.personBlock').on('click', playGame);
// event listeners
    
}

function displayGame(){
    let id =0;
    for (person of people){
        id++;
        $('#personDisplay').append(`
            <button class="personBlock"data-name="${person.name}" data-id="${id}">
            <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of Chris">
            </button>
        `)
    }
    //$('#clickOn').text(`Click on:${$(`button[data-id=${randomNum}]`).name}`)
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}
function playGame(){
    
    let personSelected = $(this).data('id');
    if (personSelected == randomNum){
        alert("Yay!!");
        randomNum = randomNumber(1, 7);
        playGame();
    }
    else if (personSelected != randomNumber){
        alert("Wrong Person! Try Again");
    }
}
// function displayPersonToChoose(){
//     for (elem of people){
//         if (people)
//     }
// }
let vari = $('.personBlock').data("");
console.log(vari);

