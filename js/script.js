let containerPrincipal = document.querySelector('#containerPrincial')
let descricao = document.querySelector('#descricao')

document.querySelector('main').addEventListener("click", event => {
    if (event.target.id === "quemSou") {
        this.containerPrincipal.style = "display: none"
        this.descricao.classList.remove("displayNone")
    }
})

document.querySelector("#voltar").addEventListener("click", () => {
    this.containerPrincipal.style = "display: flex"
    this.descricao.classList.add("displayNone")
})

