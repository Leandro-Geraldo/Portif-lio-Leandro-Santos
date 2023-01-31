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