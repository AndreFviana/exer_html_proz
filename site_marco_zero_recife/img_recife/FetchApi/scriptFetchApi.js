// -------- Gerador de usuarios -------- //
// 1. Captura de elementos
const btnUsuario = document.getElementById('btn-usuario')
const usuariosContainer = document.getElementById('usuarios-container')
const helperTextUsuario = document.getElementById('helper-text-usuario')

// 2. Funções
function gerarUsuario(){
   /*MANEIRA DIDÁTICA
    let resposta = fetch(' https://random-data-api.com/api/v2/users')
    console.log(resposta) 

    let tratamentoDeResposta = resposta.then((res)=>{
console.log(res)
//aqui estamos convertendo JSON para OBJETO. é o mesmo que usar o JSON.parse, só que para usar o Fetch, temos que escrever do jeito a baixo
return res.json()
    })

    tratamentoDeResposta.then((data)=>{
        console.log(data)
    })
    */
    
    //MANEIRA SIMPLIFICADA DE FAZER A MESMA COISA QUE FEZ O CÓDIGO ACIMA
    fetch(' https://random-data-api.com/api/v2/users')
    .then((res)=> res.json())
    .then((data)=> console.log(data))
}

// 3. Eventos
btnUsuario.addEventListener('click', gerarUsuario)



   