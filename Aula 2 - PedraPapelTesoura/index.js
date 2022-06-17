document.body.style.backgroundColor = '#8A2BE2';
document.body.style.color = '#fff'

let pontosHumano = 0;
let pontosMaquina = 0;


//capturando escolha do usuario(humano)
function usuarioEscolhe() {
  let escolhaUsuario = parseInt(prompt('Digite 1 - Pedra, 2 - Papel, 3 - Tesoura'));
  return escolhaUsuario;
}
//capturando escolha do computador 
function maquinaEscolhe() {
  let escolhaMaquina = parseInt(Math.random() * 3 + 1);
  return escolhaMaquina;
}
//rodando o jogo em si
function jogo() {
  let humano = usuarioEscolhe(); //salvando a funcao numa variavel
  let maquina = maquinaEscolhe(); //salvando a funcao numa variavel
  
  switch(humano) {
    case maquina:
      alert('Empate, ninguem ganha nada!');
      break;
    case 1:
      if (maquina == 2) {
        pontosMaquina ++;
        alert('papel ganha de pedra, 1 ponto para maquina')
      } else {
        pontosHumano ++;
        alert('tesoura ganha de papel')
      }
      break;

      case 2:
        if(maquina == 1) {
          pontosHumano ++;
          alert('papel ganha de pedra, ponto para humano')
        } else {
          pontosMaquina ++;
          alert('Tesoura ganha de papel, ponto para maquina')
        }
        break;

        case 3:
          if(maquina == 1) {
            pontosMaquina ++;
            alert('pedra ganha de tesoura, ponto para maquina!');
          } else {
            pontosHumano ++;
            alert('Tesoura ganha de papel, ponto para humano!')
          }
          break;
  }
  
  quemGanha();
}

function quemGanha() {
  if(pontosHumano ==2){
    alert('Humano ganhou da maquina! Congratulations!')
  } else if(pontosMaquina ==2) {
    alert('Maquina ganhou do humano! Sorry Human!')
  }
}

