
//pegando um elemento pelo ID
var formulario = document.getElementById('formulario');
var CEP = document.getElementById('CEP');

//função responsavel por buscar o CEP
function buscarCep(event) {
    //previne o comportamento padrao do formulário
    event.preventDefault();
    //pegando o valor do input de CEP
    var valorDoCep = CEP.value;
    //mostrando o valor valordoCEP no console 



    console.log(valorDoCep);


    //busca o cae no viacep
    fetch(`https://viacep.com.br/ws/${valorDoCep}/json/`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            //pegando o elemento do hatml pelo id
            var resultado = document.getElementById('Resultado');

            //adicionando o valor no html
            resultado.innerText = `CEP: ${data.cep} - ${data.logradouro} , ${data.bairro}, ${data.localidade} - ${data.uf}`;
        })

 
}

function mascaraCep(event) {

event.currentTarget.maxLength = 9
    let value = event.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/^(\d{5})(\d)/, '$1-$2')
    event.currentTarget.value = value
    return e 
}

CEP.addEventListener("keyup",mascaraCep)




//adicionando um evento de (evento) ao formulário
formulario.addEventListener('submit', buscarCep);