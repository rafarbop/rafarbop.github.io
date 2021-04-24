

function itemLista(desafio,descricao,){
    const childItemLista = document.createElement('div',);
    childItemLista.setAttribute("class","itemFlexDesafio")

    const subtituloDesafio = document.createElement('h4')
    const descricaoDesafio = document.createElement('p')
    const linkCodigoDesafio = document.createElement('a');
    const linkGithubDesafio = document.createElement('a',Class="linkCadaDesafio",href=`https://github.com/rafarbop/Python-Curso-em-Video/blob/master/desafio${desafio}.py`,target="_blank");
    

    subtituloDesafio.innerText = `Desafio ${desafio}`;
    descricaoDesafio.innerText = String(descricao);
    linkCodigoDesafio.innerText = "Executar";
    linkGithubDesafio.innerText = "Github";

    descricaoDesafio.setAttribute("class","descricaoDesafio");

    linkCodigoDesafio.setAttribute('id',"desafio01");
    linkCodigoDesafio.setAttribute("class","linkCadaDesafio");
    linkCodigoDesafio.setAttribute('href',`https://repl.it/@ra/desafio${desafio}?lite=true`);
    linkCodigoDesafio.setAttribute("target","_blank");

    linkGithubDesafio.setAttribute('class',`linkCadaDesafio`)
    linkGithubDesafio.setAttribute('href',`https://github.com/rafarbop/Python-Curso-em-Video/blob/master/desafio${desafio}.py`)
    linkGithubDesafio.setAttribute("target","_blank")

    childItemLista.appendChild(subtituloDesafio)
    childItemLista.appendChild(descricaoDesafio)
    childItemLista.appendChild(linkCodigoDesafio)
    childItemLista.appendChild(linkGithubDesafio)

    return childItemLista
}

window.onload = () => {
    const containerDesafios = document.getElementById('flexListaDesafio');

    containerDesafios.appendChild(itemLista(1,'Ola, Mundo!'))
    containerDesafios.appendChild(itemLista(2,'Iniciando a interação com Usuário - INPUT'))
    containerDesafios.appendChild(itemLista(3,'Soma e Diferença de valores informados pelo usuário.'))
    containerDesafios.appendChild(itemLista(4,'Verifica o tipo de dado do input e utiliza métodos de String'))
    containerDesafios.appendChild(itemLista(5,'Recebe um número e mostra o sucessor e o antecessor'))
    containerDesafios.appendChild(itemLista(6,'Recebe um número e informa o seu dobro, triplo e a raiz quadrada'))
    containerDesafios.appendChild(itemLista(7,'Ler duas notas do aluno, e calcula a média!'))
    containerDesafios.appendChild(itemLista(8,'Converte um valor de metros para centímetros e milímetros'))
    containerDesafios.appendChild(itemLista(9,'Mostra a tabuada multiplicativa de um número digitado!'))
    containerDesafios.appendChild(itemLista(10,'Converte um valor em reais para dólares americanos'))
    containerDesafios.appendChild(itemLista(11,'Calcula a quantidade de litros de tinta para pintar uma parede'))
    containerDesafios.appendChild(itemLista(12,'Recebe o preço de um produto e calcula um desconto de 5%'))
    containerDesafios.appendChild(itemLista(13,'Calcula um aumento de 15% no salário de uma pessoa'))
    containerDesafios.appendChild(itemLista(14,'Converte uma temperatura de Celsuis para Fahrenheit'))
    containerDesafios.appendChild(itemLista(15,'Calcula o valor a pagar pelo aluguel de um carro'))
    containerDesafios.appendChild(itemLista(16,'Separa a parte inteira da fracionária de um número'))
    containerDesafios.appendChild(itemLista(17,'Calcula o valor da hipotenusa de um triângulo retângulo'))
    containerDesafios.appendChild(itemLista(18,'Calcula o valor do seno, cosseno e tangente de qualquer ângulo'))
    containerDesafios.appendChild(itemLista(19,'Sorteia um aluno entre quatro alunos informados'))
    containerDesafios.appendChild(itemLista(20,'Sorteia a ordem entre quatro alunos informados'))
    containerDesafios.appendChild(itemLista(21,'Executa um arquivo de áudio - Só funciona no PC ou logado no Replit'))
    containerDesafios.appendChild(itemLista(22,'Alguns métodos de Strings'))
    containerDesafios.appendChild(itemLista(23,'Ordem de números no Sistema de Numeração Decimal'))
    containerDesafios.appendChild(itemLista(24,'Verificando nome de Cidade de Santos'))
    containerDesafios.appendChild(itemLista(25,'Verifica se uma pessoa é da Família Silva'))
    containerDesafios.appendChild(itemLista(26,'Verifica a existência de um caractere em uma frase'))
    containerDesafios.appendChild(itemLista(27,'Separando palavras de uma frase'))
    containerDesafios.appendChild(itemLista(28,'Adivinhar número escolhido usando random'))
    containerDesafios.appendChild(itemLista(29,'Calcula valor da multa no caso de excesso de velocidade'))
    containerDesafios.appendChild(itemLista(30,'Verificar se número é par ou ímpar'))
    containerDesafios.appendChild(itemLista(31,'Calcular valor de uma viagem de acordo com os KM percorridos'))
    containerDesafios.appendChild(itemLista(32,'Verificar ano bissexto'))
    containerDesafios.appendChild(itemLista(33,'Ordena 3 números de forma crescente'))
    containerDesafios.appendChild(itemLista('33-2','Ordena 3 números de forma crescente - Outro Método'))
    containerDesafios.appendChild(itemLista(34,'Calcula aumento de salário, porcetagem de aumento variável'))
    containerDesafios.appendChild(itemLista(35,'Verifica se 3 retas informadas formam um triângulo'))

    containerDesafios.appendChild(itemLista(36,'Análise de financiamento de um Imóvel'))
    containerDesafios.appendChild(itemLista(37,'Converter números decimais para outras bases'))
    containerDesafios.appendChild(itemLista(38,'Comparar dois números'))
    containerDesafios.appendChild(itemLista(39,'Verificar idade de uma pessoa para se alistar'))
    containerDesafios.appendChild(itemLista(40,'Verificar se aluno passou de ano'))
    containerDesafios.appendChild(itemLista(41,'Categorizar atletas de natação'))
    containerDesafios.appendChild(itemLista(42,'Classificação de Triângulos'))
    containerDesafios.appendChild(itemLista(43,'Cálculo e Avaliação de IMC'))
    containerDesafios.appendChild(itemLista(44,'Calcular preço de acordo com forma de pagamento'))
    containerDesafios.appendChild(itemLista(45,'Jogo do Jokenpô!'))
    containerDesafios.appendChild(itemLista(46,'Contagem Regressiva!'))
    containerDesafios.appendChild(itemLista(47,'Números pares entre dois números'))
    containerDesafios.appendChild(itemLista(48,'Soma dos Números Ímpares de um intervalo!'))
    containerDesafios.appendChild(itemLista(49,'Tabuada da soma e multiplicação!'))
    containerDesafios.appendChild(itemLista(50,'Verificador de Números Pares!'))
    containerDesafios.appendChild(itemLista(51,'Termos de uma Progressão Artmética - I'))
    containerDesafios.appendChild(itemLista(52,'Verificador de número primo!'))
    containerDesafios.appendChild(itemLista(53,'Verificador de Palíndromo'))
    

    
}
