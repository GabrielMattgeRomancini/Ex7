let valor1 = document.querySelector("#valor1");


function CalcularMenor(){
    let a = Number(valor1.value);

    if (a % 2 === 1){
        alert("O valor e impar");
    } else{
        alert("O valor e par");
    }

}

botao.onclick = function(){
    CalcularMenor();
}