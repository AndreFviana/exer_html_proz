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
   helperTextUsuario.innerText = 'Carregando...'
  

    fetch(' https://random-data-api.com/api/v2/userse')
    .then((res)=> res.json())
    .then((data)=> {
        const usuario = document.createElement('div')
            usuario.innerHTML = `
            <figure>
            <img src="${data.avatar}" />
            </figure>
            <figcaption>
            <p><strong>Username:</strong>${" "+data.first_name}, ${data.employment.title}.</p>
            </figcaption>
            <button class="remover">Remover</button>
            
            `
            //adicionando a class css dinamicamente. é melhor adicionar na DOM todos os elementos dinâmicos, como o usuario criado ao click do botão "novo"                                                                                          
            usuario.classList.add('usuario')
            usuario.querySelector('.remover') 
            .addEventListener('click',()=>{
                usuariosContainer.removeChild(usuario)
            })
            usuariosContainer.appendChild(usuario)
             helperTextUsuario.innerText = ''
            console.log(data)
        
    })
    //tratamento de erros
    .catch((error)=>{
        //podemos exibir a mensagem de erro para o usuario usando o INNERTEXT ou ALERT
        helperTextUsuario.innerText = 'Não foi possível carregar o usuário'
        alert('Não foi possível gerar um usuário')
        console.log(error)
    })
}

// 3. Eventos
btnUsuario.addEventListener('click', gerarUsuario)



   