let nav = document.querySelector('nav');
let menu = document.querySelector('#menu');
let asside = document.querySelector('aside');
let overlay = document.querySelector('#overlay');
let dropdown = document.querySelectorAll('.duvida');


menu.addEventListener('click', () => {
    nav.classList.toggle('active');
    asside.classList.toggle('aside');
    overlay.style.display = 'block';
})
overlay.addEventListener('click', function(event) {
    if (event.target.id === "overlay") {
        nav.classList.toggle('active');
        asside.classList.toggle('aside');
        document.getElementById('overlay').style.display = 'none';
    }
    
});
dropdown.forEach(element => {
    
    element.addEventListener('click', () => {
        element.lastElementChild.classList.toggle('active-text');
    })
});
