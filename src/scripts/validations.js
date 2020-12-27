$("#submitForm").click(validateForm)

async function validateForm(){
    const inputName = $("#inputName").val();
    const inputDtNasc = $("#inputDtNasc").val();
    const inputEmail = $("#inputEmail").val();
    const inputCep = $("#inputCEP").val();
    const inputAddress = $("#inputAddress").val();
    const inputAddressNumber = $("#inputAddressNumber").val();
    const inputAddress2 = $("#inputAddress2").val();
    const inputBairro = $("#inputBairro").val();
    const inputCity = $("#inputCity").val();
    const inputEstado = $("#inputEstado").val();

    if (!inputName || inputName.length <= 10){
        showMessage("warning", "Atenção", "Nome deve ser preenchido e maior que 10 caracteres.");
        return false;
    }

    const cepDetails = await validaCep(inputCep)
    if (!cepDetails) {
        showMessage("warning", "Atenção", "CEP não encontrado");
        return false;
    }

    console.log("Dados Corretos: " + inputName, inputDtNasc, inputEmail, inputCep, inputAddress, inputAddressNumber, inputAddress2, inputBairro, inputCity, inputEstado);
    
}

