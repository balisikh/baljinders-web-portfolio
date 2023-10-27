const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

const contactform = document.getElementById('contactform'); 
contactform.setAttribute('action', 'https:' + '//www./' + 'raibaljindersingh8' + '@' + 'gmail' + '.' + 'com'); 