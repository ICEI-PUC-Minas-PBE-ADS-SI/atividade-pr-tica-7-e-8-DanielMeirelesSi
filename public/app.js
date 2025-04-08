// Lista de Filmes
const filmes = [
    {
      id: 1,
      titulo: "O Espetacular Homem-Aranha 2",
      descricao: "Peter Parker enfrenta novos inimigos como Homem-Aranha enquanto tenta equilibrar sua vida como herói e namorado.",
      imagem: "imagens/homemaranha.jpg" ,
      categoria: "destaque"
    },
    {
      id: 2,
      titulo: "Círculo de Fogo",
      descricao: "Humanidade luta contra monstros gigantes usando robôs chamados Jaegers.",
      imagem: "imagens/circulodefogo.jpg" ,
      categoria: "recomendado"
    },
    {
      id: 3,
      titulo: "A Origem",
      descricao: "Um ladrão invade sonhos para roubar segredos e enfrenta o maior desafio de sua carreira.",
      imagem: "imagens/aorigem.jpg" ,
      categoria: "recomendado"
    },
    {
      id: 4,
      titulo: "Até o Último Homem",
      descricao: "A história real de um soldado que salvou dezenas de vidas sem disparar uma arma.",
      imagem: "imagens/ultimohomem.jpg" ,
      categoria: "recomendado"
    },
    {
      id: 5,
      titulo: "Clube da Luta",
      descricao: "Um homem insatisfeito cria um clube secreto de luta com um vendedor de sabão.",
      imagem: "imagens/clubdaluta.jpg" ,
      categoria: "recomendado"
    },
    {
      id: 6,
      titulo: "Capitão América 4",
      descricao: "Sam Wilson enfrenta desafios como o novo Capitão América em meio a uma conspiração global.",
      imagem: "imagens/capitaoamerica.jpg" ,
      categoria: "lancamento"
    },
    {
      id: 7,
      titulo: "Divertida Mente 2",
      descricao: "Riley, agora adolescente, lida com novas emoções durante a puberdade.",
      imagem: "imagens/insideout.jpg" ,
      categoria: "lancamento"
    },
    {
      id: 8,
      titulo: "The Batman",
      descricao: "Bruce Wayne enfrenta um serial killer enquanto descobre segredos de Gotham.",
      imagem: "imagens/batman.jpg" ,
      categoria: "lancamento"
    },
    {
      id: 9,
      titulo: "Deadpool & Wolverine",
      descricao: "Deadpool se une a Wolverine em uma missão para salvar seu universo.",
      imagem: "imagens/deadpool.jpg" ,
      categoria: "lancamento"
    }
  ];
  
  // cards funcionais
  function renderizarFilmes(lista, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
  
    lista.forEach(filme => {
      const col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";
  
      col.innerHTML = `
        <article class="filme bg-black p-2 rounded text-center">
          <a href="detalhes.html?id=${filme.id}">
            <img src="${filme.imagem}" alt="${filme.titulo}" class="img-fluid rounded">
          </a>
          <h3 class="text-danger mt-2">${filme.titulo}</h3>
          <p class="text-light">${filme.descricao}</p>
        </article>
      `;
  
      container.appendChild(col);
    });
  }
  
  // Categorias separadas
  const destaque = filmes.find(f => f.categoria === "destaque");
  const recomendados = filmes.filter(f => f.categoria === "recomendado");
  const lancamentos = filmes.filter(f => f.categoria === "lancamento");
  
  //  Preencher banner
  function preencherBanner(filme) {
    const bannerContainer = document.querySelector(".filme-destaque");
    if (!bannerContainer || !filme) return;
  
    bannerContainer.innerHTML = `
    <a href="detalhes.html?id=${filme.id}" class="text-decoration-none text-white">
      <div class="row align-items-center">
        <div class="col-md-6 mb-3 mb-md-0">
          <img src="${filme.imagem}" alt="${filme.titulo}" class="img-fluid rounded">
        </div>
        <div class="col-md-6">

          <h4 class="text-danger">${filme.titulo}</h4>
          <p class="text-light">${filme.descricao}</p>
        </div>
      </div>
    </a>
  `;
  
  }
  
  // Montar tudo
  renderizarFilmes(recomendados, "filmes-recomendados");
  renderizarFilmes(lancamentos, "filmes-lancamentos");
  preencherBanner(destaque);
  