function Converter(){
    var ValorDigitado = window.document.getElementById('ValorDigitado').value;
    var Convertido = window.document.getElementById('Resultado');
    var Dolar = ValorDigitado * 5.38;

    if(Convertido < 0){
        Convertido.innerHTML = `Por Favor Digite um valor válido!`
    }else {
        Convertido.innerHTML = `A conversão dá ${Dolar}`
    }

}

