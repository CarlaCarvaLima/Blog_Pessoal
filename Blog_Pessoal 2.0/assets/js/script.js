/*
- Formas de acesssar o DOM: 
por Tag: getElementByTagName()
por ID:  getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

function validaNome() {
    let txt = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txt.innerHTML = "Nome inválido"
        txt.style.color = "red"
    }else{
        txt.innerHTML - "Nome válido"
        txt.style.color = "green"
        nomeOk = true
    }
}
function validaEmail() {
    let txt = document.querySelector("#txtEmail")
        if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
            txt.innerHTML = "E-mail inválido"
            txt.style.color = "red"
        }else{
            txt.innerHTML - "Email válido"
            txt.style.color = "green"
            emailOk = true
        }    
}   
function validaAssunto() {
    let txt = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txt.innerHTML = "Assunto inválido. Digite no máximo 100 caracteres."
        txt.style.color = "red"
        txt.style.display = "block"
        assuntoOk = false
    }else{
        txt.style.display = "none"
        assuntoOk = true
    }
}  
function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Formulário inválido. Preencha todos os campos corretamente.")
    }        
}   
function mapaZoom() {
    mapa.style.width = "700px"
    mapa.style.height = "500px"
}
function mapaNormal(){
    mapa.style.width = "450px"
    mapa.style.height = "300px"
}