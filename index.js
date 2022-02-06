const navList = document.querySelector('.nav-list')
const burger = document.querySelector('.burger')
const navItems = document.querySelectorAll('.nav-item')



burger.addEventListener('click', openMenu)
navItems.forEach(el => el.addEventListener('click', closeMunu))

function openMenu() {
    burger.classList.toggle('open')
    navList.classList.toggle('open')
}

function closeMunu() {
    burger.classList.remove('open')
    navList.classList.remove('open')
}