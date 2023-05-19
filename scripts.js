const button = document.querySelector('button-add-task')
const input = document.querySelector('.input-task')

function pegarOValorDoInput(){
   console.log(input.value)
}


button.addEventListener('click', pegarOValorDoInput)

