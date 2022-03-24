//Adicionar Tarefa
//acionar botao
//adicionar item com conteúdo do input

//limpar lista
//acionar botao
//remover item selecionado

//limpar tarefas concluidas
//remover tarefas com classe 'concluida'
const botoes = document.getElementsByTagName("button");
const listaTarefas = document.getElementsByClassName("item");


for(i=0; i < listaTarefas.length; i +=1){
  listaTarefas[i].style.color="blue";
  listaTarefas[3].innerText="Aula ao vivo";
  listaTarefas[4].innerText="Feedback fim do dia";
  listaTarefas[5].innerText="Praticar";
}


