let paragrafo = document.getElementById("ed")

function alterartexto(){
 paragrafo.innerHTML = "xdwqeq";
}

function alterarestilo(){
    paragrafo.style.backgroundColor = "gray"
}
function alterarestilo2(){
    paragrafo.style.backgroundColor = ""
}

paragrafo.addEventListener("mouseover",alterarestilo)
paragrafo.addEventListener("mouseout",alterarestilo2)

/////


let lista = document.getElementById("lista")
let input = document.getElementById("input")

function adicionar(){
        lista.innerHTML += `<li>${input.value}</li>`
}


