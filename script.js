
function mytitle() {
    let topoSite = document.querySelector('#head')
    let titulo = document.querySelector('#title')
    let content = document.querySelector('#conteudo')
    let rodape = document.querySelector('#rodape')

    let sorteio = Math.floor(Math.random() * 2) + 1

    topoSite.style.cssText = `background: url('imagens/${sorteio}.png')`

    titulo.style.cssText = 'color: white;'

    setTimeout(function () {
        topoSite.style.cssText = "background-image: url('/imagens/imagem_fundo.jpg');"
    }, 1000)

    setTimeout(function () {
        topoSite.style.cssText =
            "background-image: url('/imagens/imagem_fundo.jpg');" +
            "margin-bottom: 100px";

        content.style.cssText = "display: contents;"
        rodape.style.cssText = "display: contents;"
    }, 2000)
}