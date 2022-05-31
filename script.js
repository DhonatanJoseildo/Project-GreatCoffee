const menuWrapper = document.querySelector('.open-menu')
let imgOpenMenu = document.querySelector('.open-menu img')
menuWrapper.addEventListener('click', openMenu)

function openMenu() {

  menuMobile.classList.toggle('open')

  if (menuMobile.classList.contains('open')) {
    imgOpenMenu.src = './assets/closeMenu.svg'
  }else{
    imgOpenMenu.src = './assets/OpenMenu.svg'
  }
  
  
}
const logoImg = document.querySelector('nav.navigation-menu .logo img')

function toggleImg() {
  if (s) {
    
  }
}