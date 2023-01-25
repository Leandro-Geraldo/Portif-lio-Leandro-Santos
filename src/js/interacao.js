//DARK MODE

const mudarTemaBtn = document.querySelector("#mudar-tema");

function toggleDarkMode(){
    document.body.classList.toggle("dark")
}

function carregarTema(){
    const darkMode = localStorage.getItem('dark');

    if (darkMode) {
        toggleDarkMode()
    }
}

carregarTema()

mudarTemaBtn.addEventListener("change", ()=>{
    toggleDarkMode()

    localStorage.removeItem("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1)
    }

});



const output = document.querySelector(".titulo");
const text = 'Seja Bem Vindo ao meu Portifólio!'

function digitarTitulo(output, text){
    const fragText = text.split("").reverse();

    const imprimirText = setInterval(() => {
        if (!fragText.length) {
            return clearInterval(imprimirText)
        }

        const next = fragText.pop();

        output.innerHTML += next
    }, 75);
}

digitarTitulo(output, text)