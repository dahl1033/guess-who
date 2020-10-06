let randomPerson = '';

$(document).ready(onReady);

function onReady() {
    //append divs for all in people
    appendPeople();
    pickRandomPerson();
    $('#peopleDisplay').on('click', '.clickPic', clickedPerson)
}

function clickedPerson() {
    let clickedPerson = $(this).data('name');

    if (clickedPerson == randomPerson) {
        alert(`yes! you found ${randomPerson}`);
        pickRandomPerson();
    } else {
        alert('nope! wrong person, try again');
    }

}


function appendPeople() {
    for (let i = 0; i < people.length; i++) {
        $('#peopleDisplay').append(`
            <li data-name=${people[i].name} class="clickPic">
                <img src="https://github.com/${people[i].githubUsername}.png?size=250" 
                alt="Profile image of ${people[i].name}" 
                />
            </li>
        `);
    }
}

function pickRandomPerson() {
    let randomNum = randomNumber(0, people.length - 1);

    randomPerson = people[randomNum].name;
    $('#person').text(randomPerson);
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}
