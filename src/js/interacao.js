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
