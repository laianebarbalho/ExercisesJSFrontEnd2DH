/*Selecionando os inputs a serem manipulados */
let nomeSignup = document.getElementById("inputNome");
let sobrenomeSignup = document.getElementById("inputSobrenome");
let emailSignup = document.getElementById("inputEmailCriacao");
let senhaSignup = document.getElementById("inputPasswordCriacao");
let repeatSenha = document.getElementById("inputPasswordCriacao2");
let botaoSignup = document.getElementById("botaoSignup");

/*Alterando botao quando esta bloqueado*/

botaoSignup.style.backgroundColor = "#979292A1";
botaoSignup.innerText = "Bloqueado";


/*Define um objeto para o usuario ao cadastrar*/

let objetoCadastro = {
  nome: "",
  sobrenome: "",
  email: "",
  senha: "",
  senhaRepetida: ""
}

/*Evento Botao CRIAR CONTA*/

botaoSignup.addEventListener("click", function (evento) {
    if(validaSignup(nomeSignup.value, sobrenomeSignup.value, emailSignup.value, senhaSignup.value, repeatSenha.value)) {
        evento.preventDefault();

        nomeSignup = normalizaTextoRetiraEspacos(nomeSignup.value);
        sobrenomeSignup = normalizaTextoRetiraEspacos(sobrenomeSignup.value);
        emailSignup = normalizaTextoRetiraEspacos(emailSignup.value);
        senhaSignup = normalizaTextoRetiraEspacos(senhaSignup.value);
        repeatSenha = normalizaTextoRetiraEspacos(repeatSenha.value);

      let objetoUsuarioCriacaoEmJSON = JSON.stringify(objetoCadastro);
        console.log(objetoUsuarioCriacaoEmJSON);
    } else {

    }
});

/* Verificando o input do nome */
nomeSignup.addEventListener("keyup", () => {

  let validacaoNome = document.getElementById("ValidacaoNome");

  if (nomeSignup.value) {
    validacaoNome.innerText = "";
    nomeSignup.style.border = "2px solid transparent ";
  } else {
    validacaoNome.innerText = "Campo obrigatório";
    nomeSignup.style.border = "2px solid #E9554EBB";
  }
  validaSignup(nomeSignup.value, sobrenomeSignup.value, emailSignup.value, senhaSignup.value, repeatSenha.value);

});

/* Verificando o input do sobrenome */
sobrenomeSignup.addEventListener("keyup", () => {

  let ValidacaoSobrenome = document.getElementById("ValidacaoSobrenome");

  if (sobrenomeSignup.value) {
    ValidacaoSobrenome.innerText = "";
    sobrenomeSignup.style.border = "2px solid transparent ";
  } else {
    ValidacaoSobrenome.innerText = "Campo obrigatório";
    sobrenomeSignup.style.border = "2px solid #E9554EBB";
  }
  validaSignup(nomeSignup.value, sobrenomeSignup.value, emailSignup.value, senhaSignup.value, repeatSenha.value);

});

/* Verificando o input de email Criar Conta */
emailSignup.addEventListener("keyup", () => {

  let ValidacaoEmailSignup = document.getElementById("ValidacaoEmailSignup");

  if (emailSignup.value) {
    ValidacaoEmailSignup.innerText = ""
    emailSignup.style.border = "2px solid transparent "
  } else {
    ValidacaoEmailSignup.innerText = "Campo obrigatório";
    emailSignup.style.border = "2px solid #E9554EBB";
  }
  validaSignup(nomeSignup.value, sobrenomeSignup.value, emailSignup.value, senhaSignup.value, repeatSenha.value);

});

/* Verificando o input de senha signup */
senhaSignup.addEventListener("keyup", () => {

  let ValidacaoSenhaSignup = document.getElementById("ValidacaoSenhaSignup");

  if (senhaSignup.value) {
    ValidacaoSenhaSignup.innerText = ""
    senhaSignup.style.border = "2px solid transparent"
  } else {
    ValidacaoSenhaSignup.innerText = "Campo obrigatório"
    senhaSignup.style.border = "2px solid #E9554EBB"
  }
  validaSignup(nomeSignup.value, sobrenomeSignup.value, emailSignup.value, senhaSignup.value, repeatSenha.value);
});

/*Verificando o input de repetir senha signup*/

repeatSenha.addEventListener("keyup", () => {

  let ValidacaoRepeatSenha = document.getElementById("ValidacaoRepeatSenha");

  if (repeatSenha.value === senhaSignup.value) {
    ValidacaoRepeatSenha.innerText = ""
    repeatSenha.style.border = "2px solid transparent"
  } else if(!repeatSenha.value) {
    ValidacaoRepeatSenha.innerText = "Campo obrigatório"
    repeatSenha.style.border = "2px solid #E9554EBB"
  } else {
    ValidacaoRepeatSenha.innerText = "Senha deve ser igual"
    repeatSenha.style.border = "2px solid #E9554EBB"
  }
  validaSignup(nomeSignup.value, sobrenomeSignup.value, emailSignup.value, senhaSignup.value, repeatSenha.value);
});

/*Funcao que valida pagina de criar conta */

function validaSignup(nome, sobrenome, email, password, senhaRepetida) {

    if (nome && sobrenome && email && password && senhaRepetida &&(password === senhaRepetida)) {
        //True
        botaoSignup.removeAttribute("disabled")
        botaoSignup.style.backgroundColor = "#7898FF";
        botaoSignup.innerText = "Criar Conta";
        return true;

    } else {
        //False
        botaoSignup.setAttribute("disabled", true)
        botaoSignup.style.backgroundColor = "#979292A1";
        botaoSignup.innerText = "Bloqueado";
        return false;
    }
}




