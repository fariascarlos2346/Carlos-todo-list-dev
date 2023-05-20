const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function adicionarNovaTarefas() {
   minhaListaDeItens.push(input.value)

   mostrarTarefas() 
}

function mostrarTarefas() {
   let novaLi = ``

//['compar café', 'estudar programação']

minhaListaDeItens.forEach((tarefa) => {
   novaLi = novaLi + `

      <li class="task">
         <img src="./img/checked.png" alt="check-na-tarefa">
         <p>${tarefa}</p>
         <img src="./img/trash.png" alt="tarefa-para-o-lixo">
      </li>

      `
})

listaCompleta.innerHTML = novaLi

}

button.addEventListener('click', adicionarNovaTarefas)

