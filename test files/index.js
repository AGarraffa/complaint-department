// just testing some fe logic

const body = document.getElementsByTagName('body');

function clicker(event) {

    console.log(event.target.value);

}

document.addEventListener('click', clicker);