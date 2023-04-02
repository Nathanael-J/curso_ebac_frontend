const A = document.getElementById('A')
const B = document.getElementById('B')
let formEValido = false
const containerSucesso = document.querySelector('.sucess-message')

function Comparar(a,b){
    const c = a.value>b.value
    return c
}

document.getElementById('form-comparador').addEventListener('submit', function(e){
    e.preventDefault()

    formEValido=Comparar(A,B)
    if (formEValido){
        containerSucesso.innerHTML = `<b>Sucesso:</b> O número <b>${A.value}</b> é maior que o número <b>${B.value}</b>.`
        containerSucesso.style.display = 'block'
        A.classList.remove('error')
        document.querySelector('.error-msg').style.display = 'none'

        A.value=''
        B.value=''
    } else {
        A.classList.add('error')
        document.querySelector('.error-msg').style.display = 'block'
        containerSucesso.style.display = 'none'
} 
})