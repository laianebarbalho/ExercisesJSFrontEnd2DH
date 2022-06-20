let body = document.body;
let botao = document.getElementById('toggle');
let titulo = document.querySelector('h1');
let item = document.querySelectorAll('.container .item');
let h2 = document.querySelectorAll('h2');
let p = document.querySelectorAll('p');

botao.addEventListener('click', myFunction1);
botao.addEventListener('click', myFunction2);
botao.addEventListener('click', myFunction3);
botao.addEventListener('click', myFunction4);
botao.addEventListener('click', myFunction5);
botao.addEventListener('click', myFunction6);

function myFunction1() {
  body.classList.toggle('dark-mode');
}
function myFunction2() {
  botao.classList.toggle('botao-dark');
}
function myFunction3() {
  titulo.classList.toggle('h1-dark');
}
function myFunction4() {
  for (let element of item) {
    element.classList.toggle('dark-item')
  }
}
function myFunction5() {
  for (let i of h2) {
    i.classList.toggle('textos-dark')
  }
}
function myFunction6() {
  for (let el of p) {
    el.classList.toggle('textos-dark')
  }
}
let items = document.querySelectorAll('.item');
let container = document.querySelector('.container');
// container.removeChild(items[2])
//ou:
// container.removeChild(container.children[2])

//se eu quiser mudar o texto do card do tigre:





