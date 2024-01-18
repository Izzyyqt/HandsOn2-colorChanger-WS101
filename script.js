let btn = document.getElementById('btn')
let background = document.getElementById('container')
let stars = document.querySelector('section')
let horizontal = document.getElementById('horizontal')
let vertical = document.getElementById('vertical')
let greetings = document.querySelector('h1')
let windowDiv = document.getElementById('window')

greetings.innerHTML = "Good Day!";
greetings.style.color = 'yellow';
background.style.backgroundColor = 'green'
function changeColor(){
    if (background.style.backgroundColor === 'green'){
        stars.style.display = 'block';
        horizontal.style.backgroundColor = 'rgb(0, 0, 120)';
        vertical.style.backgroundColor = 'rgb(0, 0, 120)';
        greetings.innerHTML = "Goodnight qt<3";
        greetings.style.color = 'orange';
        windowDiv.style.display = 'none'
        background.style.backgroundColor = 'rgb(0, 0, 120)';
        btn.style.backgroundColor = 'rgb(236, 225, 225, 0.2)';
        btn.style.color = 'rgb(0, 0, 120)';
        btn.style.backdropFilter = 'blur(2px)';
        btn.querySelector('img').src = 'moon.png';
    } else {
        stars.style.display = 'none'
        windowDiv.style.display = 'block'
        horizontal.style.backgroundColor = 'green';
        vertical.style.backgroundColor = 'green';
        greetings.innerHTML = "Goodmorning!";
        greetings.style.color = 'yellow';
        background.style.backgroundColor = 'green';
        btn.style.backgroundColor = 'rgba(14, 13, 20, 0.514)';
        btn.style.backdropFilter = 'blur(5px)'
        btn.style.color = 'rgb(236, 225, 225)';
        btn.querySelector('img').src = 'sun.png';
    }
}
btn.addEventListener('click', changeColor)