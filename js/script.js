const containerLista = document.querySelector('.container-lista');
const sectionProjetos = document.querySelector('.section-projetos');

const itensPorPagina = 4;
let paginaAtual = 1;

const projetos = [
  {
    id: 1,
    titulo: "Consulta ViaCEP",
    descricao: "Aplicação web para Consulta ViaCEP.",
    githubUrl: "https://github.com/devefrens/consumo-api-viacep.git",
    // deployUrl: "https://vercel.app" // opcional
  },
  {
    id: 2,
    titulo: "Pokemon API",
    descricao: "Aplicação web para consulta via API dos Pókemons",
    githubUrl: "https://github.com/devefrens/pokemon-api.git",
    // deployUrl: ""
  },
  {
    id: 3,
    titulo: "Consulta ViaCEP",
    descricao: "Aplicação web para Consulta ViaCEP.",
    githubUrl: "https://github.com/devefrens/consumo-api-viacep.git",
    // deployUrl: "https://vercel.app" // opcional
  },
  {
    id: 4,
    titulo: "Pokemon API",
    descricao: "Aplicação web para consulta via API dos Pókemons",
    githubUrl: "https://github.com/devefrens/pokemon-api.git",
    // deployUrl: ""
  },
  {
    id: 5,
    titulo: "Consulta ViaCEP",
    descricao: "Aplicação web para Consulta ViaCEP.",
    githubUrl: "https://github.com/devefrens/consumo-api-viacep.git",
    // deployUrl: "https://vercel.app" // opcional
  },
  {
    id: 6,
    titulo: "Pokemon API",
    descricao: "Aplicação web para consulta via API dos Pókemons",
    githubUrl: "https://github.com/devefrens/pokemon-api.git",
    // deployUrl: ""
  }
];

// Cria o contêiner da paginação via JS
const paginacaoContainer = document.createElement('div');
paginacaoContainer.className = 'paginacao';
sectionProjetos.appendChild(paginacaoContainer);

function renderizarProjetos(pagina) {
  const inicio = (pagina - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const projetosDaPagina = projetos.slice(inicio, fim);

  containerLista.innerHTML = projetosDaPagina.map((projeto) => `    
      <article class="card-projeto">
          <div>
              <h4>${projeto.titulo}</h4>
              <p>${projeto.descricao}</p>
          </div>
          <div class="links">
              <a href="${projeto.githubUrl}" target="_blank">Ver Projeto no GitHub</a>
              ${
              projeto.deployUrl
                  ? `<a href="${projeto.deployUrl}" target="_blank">Ver Projeto</a>`
                  : ""
              }
          </div>
      </article>
  `).join('');

  renderizarPaginacao();
}

function renderizarPaginacao() {
  const totalPaginas = Math.ceil(projetos.length / itensPorPagina);
  
  // Se tiver 4 ou menos projetos, esconde a paginação
  if (totalPaginas <= 1) {
    paginacaoContainer.innerHTML = '';
    return;
  }

  let botoesHTML = '';
  for (let i = 1; i <= totalPaginas; i++) {
    botoesHTML += `
      <button 
        class="btn-pagina ${i === paginaAtual ? 'ativo' : ''}" 
        onclick="mudarPagina(${i})"
      >
        ${i}
      </button>
    `;
  }
  paginacaoContainer.innerHTML = botoesHTML;
}

window.mudarPagina = function(novaPagina) {
  paginaAtual = novaPagina;
  renderizarProjetos(paginaAtual);
};

// Inicializa na página 1
renderizarProjetos(paginaAtual);

const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

if (menuToggle && navbar) {
    const icone = menuToggle.querySelector('i');

    function fecharMenu() {
        navbar.classList.remove('aberto');
        menuToggle.setAttribute('aria-expanded', 'false');
        icone.className = 'bi bi-list';
    }

    menuToggle.addEventListener('click', () => {
        const aberto = navbar.classList.toggle('aberto');
        menuToggle.setAttribute('aria-expanded', aberto);
        icone.className = aberto ? 'bi bi-x-lg' : 'bi bi-list';
    });

    // Fecha ao clicar em um link
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', fecharMenu);
    });

    // Fecha se a tela voltar para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) fecharMenu();
    });
}
