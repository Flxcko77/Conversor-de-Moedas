    // -------------> Selecionando Elementos <---------------------
     // -------------> Selecionando input com valor digitado <---------------------
       function Converter(){
        let Real = window.document.getElementById('ValorDigitado').value 
        let MoedaConvertida = window.document.getElementById('Resultado')
        let Dolar = Real * 0.18;
        let DolarFormatado = Dolar.toLocaleString("en-US", {style: "currency", currency: "USD"})

        MoedaConvertida.innerHTML = `Moeda Convertida USD ${DolarFormatado}`

        if(Real < 0){
            MoedaConvertida.innerHTML = `Por favor Digite um valor válido`
        }
       }



