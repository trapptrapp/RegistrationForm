async function loadUf() {
    return new Promise((resolve, reject) => {
        axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
            .then(result => resolve(result.data))
            .catch(error => reject(error));
    });
}

async function validaCep(cep) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.postmon.com.br/v1/cep/${cep}`)
            .then(result => resolve(result.data))
            .catch(error => {
                resolve(null);
            });
    });
}