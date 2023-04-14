let quadros = [];
let numQuadros = 0;

function gerarCorAleatoria() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
function criarQuadro() {
  const texto = prompt("Digite o título do quadro:");
  if (texto) {

    // const divnova = document.createElement("div");
    // divnova.style.display = "fixed";
    // divnova.style.position = "absolute";
    // divnova.style.backgroundColor = "red";
    // divnova.style.width = "200px";
    // divnova.style.height = "200px";

    // document.body.appendChild(divnova)

    const cor = gerarCorAleatoria();
    const quadro = document.createElement("div");
    quadro.classList.add("quadro");
    quadro.style.width = "210px";
    quadro.style.height = "130px";
    quadro.style.marginLeft = "5px";
    quadro.style.backgroundColor = cor;
    quadro.addEventListener("click", () => {
        
      const divCentro = document.createElement("div");
      divCentro.classList.add("divCentro")

      const criar = document.createElement("button")
      criar.textContent = "Criar atividade"
      criar.addEventListener("click", criarAtividade)

      let atividade = []
      let numAtividade = 0

      function criarAtividade(){
        const atividades = document.createElement("div")
      
        const titulo = prompt("Digite o titulo")
      
        const texto = document.createElement("textarea")
      
        const tituloatividade = document.createElement("h2")
        tituloatividade.textContent = titulo
      
        const remover = document.createElement("button")
        remover.textContent = "Remover Atividadr"
        remover.addEventListener("click", () =>{
          atividades.remove()
        })
      
        atividades.appendChild(titulo)
        atividades.appendChild(texto)
        atividades.appendChild(titulo-atividades)
        atividades.appendChild(remover)
        divCentro.appendChild(atividades)
      }

      let image = new Image();
      image.src = 'imagens/fechar.png'
      image.style.position = "absolute"
      image.style.right = "0%"

      image.addEventListener("click", () =>{
        divCentro.remove()
      })

      divCentro.appendChild(image)
      document.body.appendChild(divCentro);
    })

    

    divCentro.appendChild(criar)

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir quadro";
    botaoExcluir.addEventListener("click", () => {
      quadro.remove();
      numQuadros--;
      quadros = quadros.filter((q) => q.titulo !== texto);
      salvarQuadros();
    });

    quadro.appendChild(botaoExcluir);

    const titulo = document.createElement("h2");
    titulo.textContent = texto;

    quadro.appendChild(titulo);

    const container = document.querySelector("#tarefas");
    container.style.flexWrap = "wrap";
    container.appendChild(quadro);

    quadros.push({ titulo: texto, cor: cor });
    numQuadros++;

    salvarQuadros();
  }
}

function renderizarQuadros() {
  const container = document.querySelector("#tarefas");
  container.style.flexWrap = "wrap";

  quadros.forEach((quadroInfo) => {
    const quadro = document.createElement("div");
    quadro.classList.add("quadro");
    quadro.style.width = "210px";
    quadro.style.height = "130px";
    quadro.style.marginLeft = "5px";
    quadro.style.backgroundColor = quadroInfo.cor;

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir quadro";
    botaoExcluir.addEventListener("click", () => {
      quadro.remove();
      numQuadros--;
      quadros = quadros.filter((q) => q !== quadroInfo);
      salvarQuadros();
    });

    const titulo = document.createElement("h2");
    titulo.textContent = quadroInfo.titulo;

    quadro.appendChild(botaoExcluir);
    quadro.appendChild(titulo);

    container.appendChild(quadro);
  });
}

function salvarQuadros() {
  const json = JSON.stringify(quadros);
  localStorage.setItem("quadros", json);
}

function carregarQuadros() {
  fetch('quadros.json')
    .then((response) => response.json())
    .then((data) => {
      quadros = data;
      numQuadros = quadros.length;
      renderizarQuadros();
    });

  const quadrosJSON = localStorage.getItem("quadros");
  if (quadrosJSON) {
    quadros = JSON.parse(quadrosJSON);
    numQuadros = quadros.length;
    renderizarQuadros();
  }
}

const botaoCriarQuadro = document.querySelector("#add");
botaoCriarQuadro.addEventListener("click", criarQuadro);

window.addEventListener("load", carregarQuadros);

function excluirall() {
  if (confirm("Tem certeza que deseja excluir todos os quadros?")) {
    const quadros = document.querySelectorAll(".quadro");
    for (let i = 0; i < quadros.length; i++) {
      quadros[i].remove();
    }
    numQuadros = 0;
    quadros.length = 0; 
    localStorage.clear();
  }
}


