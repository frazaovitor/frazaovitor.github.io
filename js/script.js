let displayNone = document.querySelectorAll(".displayNone")

document.querySelector('main').addEventListener("click", event => {
    let ID = event.target.id

    containerPrincipal.style = "display: none"

    switch (ID) {
        case "quemSou":
            descricao.classList.remove("displayNone")
            break;

        case "formacao":
            formAcadem.classList.remove("displayNone")
            break;

        case "expProfissional":
            expProf.classList.remove("displayNone")
            break;

        case "habilidades":
            habProf.classList.remove("displayNone")
            break;

        case "estudando":
            estudAtual.classList.remove("displayNone")
            break;

        case "procurando":
            procPor.classList.remove("displayNone")
            break;
    }
})

document.querySelector("#voltar").addEventListener("click", () => {
    displayNone.forEach(elemento => {
        elemento.classList.add("displayNone")
    })
    containerPrincipal.style = "display: flex"
})

