

function retrieveDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json())
        .then(responseJson =>
            printDogImage(responseJson))      
}


function printDogImage(responseJson) {
    console.log(responseJson);
    //replace the existing image with the new one
    $('#dog-image').replaceWith(
        `<img src="${responseJson.message}" id="dog-image">` //the message is undefined
    )
    //display the results section
    $('.results').removeClass('hidden');
}

function submitForm() {
    $('form').submit(event => {
        event.preventDefault();
        printDogImage();
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    submitForm();
});

    retrieveDogImage();
