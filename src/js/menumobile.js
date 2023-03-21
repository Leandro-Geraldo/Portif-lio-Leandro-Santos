function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector(".nav")
    nav.classList.toggle("active");
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active)

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

const btnMobile = document.getElementById("btn-mobile")

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);


const habilidades = document.querySelectorAll('.habilidade')

habilidades.forEach(habilidade=>{
    habilidade.addEventListener('mouseenter',()=>{
        const habilidadeAtiva = document.querySelector('.ativo')
        habilidadeAtiva.classList.remove('ativo')
        
        habilidade.classList.add('ativo')


    })
})