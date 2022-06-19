console.log(window.document);
console.log(document.body.children)

//Obtendo o texto do <a> do primeiro li filho da ul(forma mais trabalhosa):
console.log(document.body.children[1].children[1].children[0].children[0].childNodes[0].data);
console.log(document.body.children[1].children[1].children[0].children[0].innerText);

//formas mais diretas e rapidas:

let item1 = document.getElementById('item1');
console.log(item1.innerText); // ou textContent

//se eu quiser modificar o texto dentro do li de id item1:

item1.innerHTML = '<a href="#" id="item1">Modificei o texto!</a>'
console.log(item1.innerText)

//se eu quiser acessar o texto de todas as li:

let itens = document.querySelectorAll('li');
for(let i = 0; i < itens.length; i++) {
  console.log(`O texto do indice ${i} eh: ${itens[i].innerText}`);
}

// usando for of ao inves do tradicional for
let indice = 0;
for (let texto of itens) {
  console.log(`o texto do indice ${indice} eh ${texto.innerText}`);
  indice++;
}

itens.forEach(li => console.log(li.innerText))


let animado = document.querySelector('.animado');
console.log(animado.innerHTML);


let body = document.getElementsByClassName('conteudo');
console.log(body)

let listaArticles = document.querySelectorAll('article');
listaArticles.forEach(article => console.log(article.id));

let articleCapturado;
for(let article of listaArticles) {
  if(article.id = 'card1') {
    articleCapturado = article;
  }
}
console.log(articleCapturado);
