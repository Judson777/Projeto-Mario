const formulario = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function cliqueiNoBotao() {
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    mascara.addEventListener("click", function() {
        formulario.style.left = "-100%"
        mascara.style.visibility = "hidden"
    })
}