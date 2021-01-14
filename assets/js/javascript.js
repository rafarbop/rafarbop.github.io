
for (let i=1;i<=5;i++){
    mostrarCodigo = document.getElementById('desafio0'+i)

    mostrarCodigo.onclick = () => {
        document.getElementById('code0'+i).style.display = "block"
        document.getElementById("button-code0"+i).style.display = "block"
        document.querySelector("div.container-code").style.display = "block"
    }
    hideCodigo = document.getElementById("button-code0"+i)
    hideCodigo.onclick = () => {
        document.getElementById('code0'+i).style.display = "none"
        document.getElementById("button-code0"+i).style.display = "none"
        document.querySelector("div.container-code").style.display = "none"
    }
}

