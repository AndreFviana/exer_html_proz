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
  

     fetch(' https://random-data-api.com/api/v2/users')
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
            // se quisermos que o ultimo usuario adicionado apareça na parte de cima, usamos o PREPEND, e não o APPENDECHILD
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
btnUsuario.addEventListener('click',gerarUsuario)


//utilizando outra api para gerar posts, como em redes sociais
const postTitle = document.getElementById('post-title')
const postBody = document.getElementById('post-body')
const btnPost = document.getElementById('btn-post')
const postConteiner = document.getElementById('posts-container')

function gerarPost(evento){
evento.preventDefault()
postTitle.value
postBody.value

const jsonBody = JSON.stringify({
    titulo: postTitle.value ,
    mensagem: postBody.value
})
console.log(jsonBody)
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'post',
    headers:{
        "Content-Type": "application/json",
    },
    body: jsonBody
})
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data)
        const post = document.createElement('div')
        post.innerHTML = `
        <h3>${data.id} - ${data.titulo}</h3>
        <p>${data.mensagem}</p>
        `
//para que o ultimo post aprecça no topo, usamos o PREPEND, e não o APPENCHILD.
        postConteiner.prepend(post)
    })
}

btnPost.addEventListener('click',gerarPost)