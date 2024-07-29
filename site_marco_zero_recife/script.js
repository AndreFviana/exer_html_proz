/*function mensagemNoTerminal (){
  
    console.log('Conexão Feita com sucesso!');
    console.log('Conexão Feita com sucesso!');
    console.log('Conexão Feita com sucesso!');
   
}
mensagemNoTerminal();
//DOM
const titulo = document.getElementById("aula")
console.log(titulo)
const  textos = document.getElementsByClassName('h2')
console.log(textos)

console.log(elementoH1.innerHTML)
let elementoMain = document.querySelector('main');
//alterando o html através do DOM

console.log(elementoMain);
let elementoH5 = document.querySelector('h5')
elementoH5.innerHTML = 'referencias'
const elementoH1 = document.querySelector('h1')
elementoH1.innerText = 'Talent Cloud';

//api Chuck Noris
const urlApi = 'https://api.chucknorris.io/jokes/random';

//função para buscar piadas aleatorias
async function buscarPiada(){
    try {
        const response = await fetch(urlApi);
        if (!response.ok){
            throw new error('erro na requisição');
        }
        const data = await response.json();

        displayChuckImg(data.message);
    } catch (error) {
        console.error('error', error);
    }
    }


//função para exigir imagens da api na tela




fetch('https://api.adviceslip.com/advice',{
    method: 'post',
    body: JASON.stringify({
        name: 'andre',
        job: 'doctor'
    }),
    //a maioria das api necessita que vc coloque a chave de autenticação se quiser fazer um 'post', seguido do formato do dado(json ou xml)
    headers:{
        "autorization": "chave-api",
        "Content-Type":"aplication/json"
        
    }
})
//o primeiro then é necessario para converter json em objeto/array
   .then(response => response.json())
   //o segundo then, é para acessar os dados solicitados
   .then(data => console.log(data))
   //aqui é para tratar erros de requisição
   .catch(error =>console.log(error));
   //podemos avisar ao usuario sobre o erro assim:
   .catch(error =>console.error('error:mude pagina!',error);(()=>alert('ocorreu um erro'))();
   )
   */
