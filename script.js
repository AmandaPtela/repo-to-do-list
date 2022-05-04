const botaoCriar = document.querySelector('#criar-tarefa');
const botaoApagarTudo = document.querySelector('#apaga-tudo');
// const botaoApagarFinalizados = document.querySelector('#remover-finalizados');
const listaTarefas = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
// const itenss = document.getElementsByClassName('item');

// ok 5botao com id criar-tarefa ; qnd clica adiciona um item na lista e limpa o input
function criarItemLista() {
  const itemNovo = document.createElement('li');
  itemNovo.innerText = input.value;
  listaTarefas.appendChild(itemNovo);
  itemNovo.className = 'item';
  input.value = '';
}
botaoCriar.addEventListener('click', criarItemLista);

// ok 6ordenar itens por ordem de criação

// ok 7 clicar num item muda bg pra cinza rgb(128 128 128)
function mudarbg(ev) {
  const selecionados = document.querySelector('.selected');
  ev.target.classList.add('selected');
  selecionados.classList.remove('selected');
}
listaTarefas.addEventListener('click', mudarbg);

// ok 10 botao id apaga-tudo limpa a lista
function apagarTudo() {
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
}
botaoApagarTudo.addEventListener('click', apagarTudo);

// ok 9 clicar duas vezes marcar como concluído(riscar item) e clicar duas vezes p desfazer a ação
// pesquisei no mdn. Toggle alterna a classe (on/off)
