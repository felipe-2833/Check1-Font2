let titulo = document.getElementById('name');
let url = document.getElementById('imagem');
let descricao = document.getElementById('description');

let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  let valido = true;

  for(let i = 0; i < form.elements.length; i++ ){
    let item = form.elements[i];

    if(item.type !== "submit"){
        if(item.value == ""){
            valido = false;
        }
    }

  }
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