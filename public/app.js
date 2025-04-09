const filmes = [
    {
      id: 1,
      titulo: "O Espetacular Homem-Aranha 2",
      descricao: "Peter Parker enfrenta novos inimigos como Homem-Aranha enquanto tenta equilibrar sua vida como herói cidadão.",
      imagem: "imagens/homemaranha.jpg",
      categoria: "destaque",
      autor: "Daniel Meireles",
      data: "2014-05-01",
      trailer: "https://www.youtube.com/embed/F_sG1e3v1cI"
    },
    {
      id: 2,
      titulo: "Círculo de Fogo",
      descricao: "Humanidade luta contra monstros gigantes usando robôs chamados Jaegers.",
      imagem: "imagens/circulodefogo.jpg",
      categoria: "recomendado",
      autor: "Daniel Meireles",
      data: "2013-07-12",
      trailer: "https://www.youtube.com/embed/R7J3RJcxv58"
    },
    {
      id: 3,
      titulo: "A Origem",
      descricao: "Um ladrão invade sonhos para roubar segredos e enfrenta o maior desafio de sua carreira.",
      imagem: "imagens/aorigem.jpg",
      categoria: "recomendado",
      autor: "Daniel Meireles",
      data: "2010-07-16",
      trailer: "https://www.youtube.com/embed/R_VX0e0PX90"
    },
    {
      id: 4,
      titulo: "Até o Último Homem",
      descricao: "A história real de um soldado que salvou dezenas de vidas sem disparar uma arma.",
      imagem: "imagens/ultimohomem.jpg",
      categoria: "recomendado",
      autor: "Daniel Meireles",
      data: "2016-11-04",
      trailer: "https://www.youtube.com/embed/4s4UCxCv_OE"
    },
    {
      id: 5,
      titulo: "Clube da Luta",
      descricao: "Um homem insatisfeito cria um clube secreto de luta com um vendedor de sabão.",
      imagem: "imagens/clubdaluta.jpg",
      categoria: "recomendado",
      autor: "Daniel Meireles",
      data: "1999-10-15",
      trailer: "https://www.youtube.com/embed/BdJKm16Co6M"
    },
    {
      id: 6,
      titulo: "Capitão América 4",
      descricao: "Sam Wilson enfrenta desafios como o novo Capitão América em meio a uma conspiração global.",
      imagem: "imagens/capitaoamerica.jpg",
      categoria: "lancamento",
      autor: "Daniel Meireles",
      data: "2025-07-25",
      trailer: "https://www.youtube.com/embed/U7JG6FMoEdM"
    },
    {
      id: 7,
      titulo: "Divertida Mente 2",
      descricao: "Riley, agora adolescente, lida com novas emoções durante a puberdade.",
      imagem: "imagens/insideout.jpg",
      categoria: "lancamento",
      autor: "Daniel Meireles",
      data: "2025-06-14",
      trailer: "https://www.youtube.com/embed/yAZxx8t9zig"
    },
    {
      id: 8,
      titulo: "The Batman",
      descricao: "Bruce Wayne enfrenta um serial killer enquanto descobre segredos de Gotham.",
      imagem: "imagens/batman.jpg",
      categoria: "lancamento",
      autor: "Daniel Meireles",
      data: "2022-03-04",
      trailer: "https://www.youtube.com/embed/IQaP0hYraMw"
    },
    {
      id: 9,
      titulo: "Deadpool & Wolverine",
      descricao: "Deadpool se une a Wolverine em uma missão para salvar seu universo.",
      imagem: "imagens/deadpool.jpg",
      categoria: "lancamento",
      autor: "Daniel Meireles",
      data: "2025-07-26",
      trailer: "https://www.youtube.com/embed/dEbe0rS4Z2A"
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
  
  // Categoria
  const destaque = filmes.find(f => f.categoria === "destaque");
  const recomendados = filmes.filter(f => f.categoria === "recomendado");
  const lancamentos = filmes.filter(f => f.categoria === "lancamento");
  
  // Banner destaque
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
  
  // Página de detalhes
  function mostrarDetalhesDoFilme() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
  
    if (!id) return;
  
    const filme = filmes.find(f => f.id === id);
  
    if (!filme) {
      document.getElementById("detalhes-filme").innerHTML = "<p class='text-danger'>Filme não encontrado.</p>";
      return;
    }
  
    document.getElementById("detalhes-filme").innerHTML = `
      <img src="${filme.imagem}" alt="${filme.titulo}" class="img-fluid rounded mb-4" style="max-height: 500px;">
      <h2 class="text-danger">${filme.titulo}</h2>
      <p class="text-light fs-5">${filme.descricao}</p>
  
      <div class="my-3 text-start">
        <p><strong>Autor:</strong> ${filme.autor}</p>
        <p><strong>Data de Lançamento:</strong> ${new Date(filme.data).toLocaleDateString("pt-BR")}</p>
      </div>
  
      <div class="ratio ratio-16x9 mb-4">
        <iframe src="${filme.trailer}" title="Trailer de ${filme.titulo}" allowfullscreen></iframe>
      </div>
  
      <a href="index.html" class="btn btn-outline-danger">Voltar para o catálogo</a>
    `;
  }
  
  // Iniciar
  renderizarFilmes(recomendados, "filmes-recomendados");
  renderizarFilmes(lancamentos, "filmes-lancamentos");
  preencherBanner(destaque);
  
  if (window.location.pathname.includes("detalhes.html")) {
    mostrarDetalhesDoFilme();
  }
  