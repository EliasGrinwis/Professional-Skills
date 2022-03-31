
let button = document.getElementById('button-form');
let username = document.getElementById('naam');
console.log(username)

button.addEventListener('click', function () {
    button.style.backgroundColor = 'green';
    button.style.fontSize = "large";
    button.innerHTML = 'Verzonden'
})

