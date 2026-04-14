
//tema
const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("claro");

  if (document.body.classList.contains("claro")) {
    temaBtn.innerHTML = '<i class="bi bi-moon"></i> Escuro';
  } else {
    temaBtn.innerHTML = '<i class="bi bi-sun"></i> Claro';
  }
});

//projetos
const projetosSecao = document.getElementById('projetos');

const titulo = document.createElement('h2');
titulo.textContent = "Meus Projetos";
projetosSecao.appendChild(titulo);

const projetos = [
  { titulo: "Projeto 01 - Portifólio", descricao: "Portifólio profissional. Feito com HTML, CSS e JavaScript. Além de demonstrar minhas habilidades e experiências.", link:"https://github.com/profadanielemelo" },
  { titulo: "Projeto 02 - Site Institucional", descricao: "Site institucional responsivo para empresa local. Que visa planejamento estratégico, execução de projetos.", link:"https://github.com/profadanielemelo" },
  { titulo: "Projeto 03 - Oficina Química", descricao: "Sistema de cadastro de equipamentos de um laboratório com integração a banco de dados.", link:"https://github.com/profadanielemelo" }
];

const projetosContainer = document.createElement('div');
projetosContainer.classList.add('grid-projetos');

projetos.forEach(p => {
  const card = document.createElement('div');
  card.classList.add('projeto');
  card.innerHTML = `<h4>${p.titulo}</h4><p>${p.descricao}</p>`;
  card.innerHTML = `
    <h4>${p.titulo}</h4>
    <p>${p.descricao}</p>
    <a href="${p.link}" target="_blank">Ver no GitHub</a>
  `;
  projetosContainer.appendChild(card);
   
});

projetosSecao.appendChild(projetosContainer);


//formulário
const contatoSecao = document.getElementById('contato');
contatoSecao.innerHTML = "<h2>Contato</h2>";

const form = document.createElement('form');

const campos = [
  { label: "Nome", type: "text", id: "nome" },
  { label: "Email", type: "email", id: "email" },
  { label: "Envie sua mensagem", type: "textarea", id: "mensagem" }
];

campos.forEach(c => {
  const label = document.createElement('label');
  label.setAttribute('for', c.id);
  label.textContent = c.label + ":";

  let input;
  if (c.type === "textarea") {
    input = document.createElement('textarea');
    input.rows = 5;
  } else {
    input = document.createElement('input');
    input.type = c.type;
  }
  input.id = c.id;
  input.name = c.id;
  input.required = true;

  form.appendChild(label);
  form.appendChild(input);
});

const botao = document.createElement('button');
botao.type = "submit";
botao.textContent = "Enviar";
form.appendChild(botao);

contatoSecao.appendChild(form);
