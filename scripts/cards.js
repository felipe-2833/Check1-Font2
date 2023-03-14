//criação variaveis
let titulo = document.getElementById('name');
let url = document.getElementById('imagem');
let descricao = document.getElementById('description');
let form = document.querySelector('form');

//funcionamento do evento submit do formulario
form.addEventListener('submit', function(event) {
  event.preventDefault();
  let valido = true;

  //loop para resgatar cada elemento e fazer uma verificação dos campos
  for(let i = 0; i < form.elements.length; i++ ){
    let item = form.elements[i];

    //verifica cada campo 
    if(item.type !== "submit"){
        if(item.value === ""){
            mostrarErroPara(item, "Favor preencha o campo com a/o " + item.name)
            valido = false;
        }else{
            tudoCerto(item)
        }
    }
  }

    //add os cards
    if(valido == true){
        let div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
                    <h2>${titulo.value}</h2>
                    <img src="${url.value}">
                    <p>
                        ${descricao.value}
                    </p>
                    `;
        card.appendChild(div);
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
  
    // Adicionar a classe de sucesso
    inputSections.className = "input-sections"
  }