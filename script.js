const menuWrapper = document.querySelector('.open-menu')
let imgOpenMenu = document.querySelector('.open-menu img')
const checkContentMenu = document.querySelectorAll('main .menu .container')

menuWrapper.addEventListener('click', openMenu)

function openMenu() {
  menuMobile.classList.toggle('open')

  if (menuMobile.classList.contains('open')) {
    imgOpenMenu.src = './assets/closeMenu.svg'
  } else {
    imgOpenMenu.src = './assets/openMenu.svg'
  }
}

function addCheckMenu() {
  checkContentMenu.forEach(element => {
    element.innerHTML +=
      "<span class='buttonChecked'>" +
      "<img src='./assets/checked.svg' alt='Imagem de Checked para compra de café'>" +
      '</span>'
  })
}
addCheckMenu()
