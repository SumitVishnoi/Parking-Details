const hamMenu = document.querySelector('.ham-menu')
const offScreenMenu = document.querySelector('.off-screen-menu')

hamMenu.addEventListener('click', ()=> {
    hamMenu.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
})



var typed = new Typed('.auto-type', {
  strings: ["Smart Tech and Smart Parking !"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100
  });