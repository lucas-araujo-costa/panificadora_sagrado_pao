/*========== Configurações do menu==========*/

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/*========== Ao clicar em um dos ícones, fechar o menu ========== */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/*========== Ao rolar o scroll, exibir a sombra no header da página ========== */

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    }
    else {
        header.classList.remove('scroll')
    }
})

/*========== Swiper - animação dos depoimentos ========== */

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      767: {
        slidesPerView: 1,
        setWrapperSize: true
      }
    }
  })

/*========== Scroll Reveal - animação de mostrar os elementos quando der scroll na página ========== */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 500,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text, 
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, 
    { interval: 100 }
)

/*========== Menu ativo de acordo com a seção visível ========== */
const sections = document.querySelectorAll('main section[id]')

function ActivateMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']' ).classList.add('active')
        }
        else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']' ).classList.remove('active')

        }


    }
    
}

/*========== Botão que quando pressionado, voltar para o topo ========== */

const backToTopButton = document.querySelector('.back-to-top')

window.addEventListener('scroll', function() {
    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    }
    else {
        backToTopButton.classList.remove('show')
    }
    ActivateMenuAtCurrentSection()
})