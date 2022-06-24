const baseDeDados = {
    "resultado": [{
        "genero": "masculino",
        "nome": {
            "titulo": "sr",
            "primeiro": "David",
            "ultimo": "Fernando"
        },
        "localizacao": {
            "rua": " Augusta , 238",
            "cidade": "São Paulo",
            "Estado": "São Paulo",
            "postcode": "01305000",
            "coordenadas": {
                "latitude": "-23.5569581",
                "longitude": "-46.6589677"
            },
            "timezone": {
                "offset": "-3:00",
                "descricao": "Brasil"
            }
        },
        "email": "david.fernando@exemplo.com",
        "login": {
            "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
            "usuario": "silverswan131",
            "senha": "firewall",
            "salt": "TQA1Gz7x",
            "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
            "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
            "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
        },
        "dob": {
            "data": "1993-07-20T09:44:18.674Z",
            "idade": 26
        },
        "registro": {
            "data": "2002-05-21T10:59:49.966Z",
            "idade": 17
        },
        "fone": "011-4039-8745",
        "celular": "011-99874-5621",
        "id": {
            "nome": "PPS",
            "valor": "0390511T"
        },
        "imagem": {
            "grande": "https://randomuser.me/api/portraits/men/75.jpg",
            "media": "https://randomuser.me/api/portraits/med/men/75.jpg",
            "miniatura": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "IE"
    }],
    "info": {
        "seed": "fea8be3e64777240",
        "resultado": 1,
        "pagina": 1,
        "versao": "1.3"
    }
};

let consultandoBaseDeDados = new Promise((resolve, reject) => {
    // Aqui temos uma solicitação simulada para um banco de dados, com um atraso de 2 segundos.
    //A lógica interna estará  no servidor e nós apenas esperaríamos por uma resposta.
    setTimeout(function () {
        if (baseDeDados == null) {
            reject({
                "mensagem": "Base de dados inexistente."
            });
        } else {
            resolve(baseDeDados);
        }
    }, 1000);

});

// Aqui realizamos uma consulta da promessa, aguardando sua resposta assíncrona
consultandoBaseDeDados
    .then((resposta) => {
        // Aqui temos a resposta da promessa, podemos tratar a resposta como quisermos
        renderizarDadosUsuario(resposta.resultado[0]);
    })
    .catch((erro) => {
        console.log(erro);
    });

function renderizarDadosUsuario(dados) {
    /* -------------------------------- TAREFAS -------------------------------- */
    // Aqui  devem desenvolver uma função que é exibida na tela:
    // a foto, o nome completo do usuário e seu e-mail.
    //  Isso deve ser baseado nas informações que chegam até nós e  são inseridas no HTML.
    //  Dica: você pode manipular o CSS e estruturar o card ao seu gosto.

    let quadrado = document.querySelector('.tarjeta')
    let picture = document.createElement("img")
    let nome = document.createElement("h1")
    let email = document.createElement("p")
    quadrado.style.display = 'block'
    picture.src = dados.imagem.grande
    picture.className = "picture"
    picture.style.borderRadius = '20px'
    nome.innerHTML = `${dados.nome.primeiro} ${dados.nome.ultimo}`
    nome.style.display = 'inline'
    nome.style.marginLeft = '15px'

    email.innerHTML = dados.email
    email.style.marginLeft = '80px'
    email.style.textAlign = 'center'
    document.body.appendChild(picture)
    document.body.appendChild(email)
    document.body.appendChild(nome)
    quadrado.appendChild(picture)
    quadrado.appendChild(nome)
    quadrado.appendChild(email)

}