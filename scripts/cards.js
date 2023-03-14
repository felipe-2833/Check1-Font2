//criação variaveis
let titulo = document.getElementById('name');
let url = document.getElementById('url');
let descricao = document.getElementById('descricao');
let botao = document.querySelector("button")
let form = document.getElementById('form');


//funcionamento do evento submit do formulario
form.addEventListener('submit', function(event) {
  event.preventDefault();
  let valido = true;

  //loop para resgatar cada elemento e fazer uma verificação dos campos
  for(let i = 0; i < form.elements.length; i++ ){
    let item = form.elements[i];

    //verifica cada campo 
    if(item.type !== "submit"){
       if (item.name == "nome" && item.value.length < 4) {
            mostrarErroPara(item, "O nome precisa ter no mínimo 4 caracteres");
            valido = false;
          }else if (item.name == "descricao" && item.value.length < 4) {
            mostrarErroPara(item, "A descrição precisa ter no mínimo 4 caracteres");
            valido = false;
          }else{
            tudoCerto(item);
        }
    }
  }
    //add os cards
    if(valido == true){
        let div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<img src="${url.value}">
                        <h2>${titulo.value}</h2>
                        <p>${descricao.value}</p>`;
        cards.appendChild(div);
    }
});

   //função que muda a classe da div pai e add mensagem ao small
   function mostrarErroPara(input, menssagem){
    let inputSections = input.parentElement;
    let small = inputSections.querySelector("small")
    
    //mensagem small
    small.innerText = menssagem;
    
    //muda classe div
    inputSections.className = "input-sections error";
    }

    function tudoCerto(input) {
        const inputSections = input.parentElement;
    
        //mantem com a mesma classe
        inputSections.className = "input-sections"
    }

    //função do evento onchange, desabilita e abilita o botão de input
    function mudarBotao(){
      if(titulo.value && url.value && descricao.value){
        botao.disabled = false
        return
      }
      botao.disabled = true
      
    }
