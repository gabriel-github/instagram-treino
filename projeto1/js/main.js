/*let nome = 'Gabriel Ferreira'
let idade = 18
let idade2 = 10
let frase = 'Japão é o melhor time do mundo'
//alert(`Nome: ${nome} tem ${idade} anos`)
//alert(idade + idade2)

console.log(nome)
console.log(idade + idade2)
console.log(frase.replace('Japão', 'Brasil'))
console.log(frase.toUpperCase())
console.log(frase.toLowerCase()) 
*/

/*
let lista = ['maça', 'pera', 'laranja']
//lista.push('uva')
//lista.pop()

console.log(lista)

console.log(lista.toString())
console.log(lista.join(" | "))*/


//let frutas = [{ nome: 'maça', cor: 'vermelha'}, { nome: 'pera', cor: 'verde'} ]
//console.log(frutas[1].nome)

/*
let idade = prompt('Qual a sua idade')
if( idade > 18 ){ 
    alert('maior de idade')
}else{
    alert('menor de idade')
}*/


/*
let count = 0

while( count <= 5 ){ 
    console.log(count)
    alert(count)
    count++
}*/

/*
for(let i = 0; i <= 5; i++){
    console.log(i)
}*/

/*
function soma (n1, n2){
    return n1 + n2
}

function validaIdade(idade){
    let validar = true;

    if( idade >= 18 ){
        validar = true;
    }else{
        validar = false;
    }

    return validar
}

let idade = prompt('Qual a sua idade')
console.log(validaIdade(idade))

alert(soma(5,10))
*/



function clicou(){
    document.querySelector('#agradecimento').innerHTML = 'Obg por clicar'
}

function redirecionar(){
    window.open('https://google.com')
}

function trocar(elemento){
    elemento.innerHTML = 'Obg por passar o mouse'
}

function voltar(elemento){
    elemento.innerHTML = 'Passe o mause aqui' 
}

function load(){
    alert('Pagina carregada')
}

function change(elemento){
    console.log(elemento.value)
}