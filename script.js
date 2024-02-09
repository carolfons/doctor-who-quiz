const perguntas = [
  {
    pergunta: "Qual é o nome da nave espacial/temporal utilizada pelo Doctor?",
    respostas: ["TARDIS", "VORTEX", "GALAXIA"],
    correta: 0,
  },
  {
    pergunta:
      "Quem foi o primeiro ator a interpretar o Doctor na série clássica de Doctor Who?",
    respostas: ["David Tennant", "Tom Baker", "William Hartnell"],
    correta: 2,
  },
  {
    pergunta: "Qual é o planeta de origem do Doctor?",
    respostas: ["Gallifrey", "Skaro", "Mondas"],
    correta: 0,
  },
  {
    pergunta: "Quem é o inimigo recorrente dos Daleks?",
    respostas: ["Silurians", "Cybermen", "Sontarans"],
    correta: 1,
  },
  {
    pergunta: "Qual é o apelido frequentemente dado ao Doutor (Doctor)?",
    respostas: ["The Scientist", "The Wanderer", "The Time Lord"],
    correta: 1,
  },
  {
    pergunta:
      "Qual é o nome do arco em que o Doutor enfrenta o vilão Master pela primeira vez?",
    respostas: [
      "Genesis of the Daleks",
      "The Five Doctors",
      "Terror of the Autons",
    ],
    correta: 2,
  },
  {
    pergunta: "Quantos corações tem um Time Lord, incluindo o Doutor?",
    respostas: ["1", "2", "3"],
    correta: 1,
  },
  {
    pergunta:
      "Quem foi a companheira do Doutor conhecida como 'The Impossible Girl'?",
    respostas: ["Amy Pond", "Clara Oswald", "Rose Tyler"],
    correta: 1,
  },
  {
    pergunta: "O que significa a sigla TARDIS?",
    respostas: [
      "Time And Relative Dimension In Space",
      "Temporal and Relative Dimension in Space",
      "The Awesome Really Big Spaceship",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual ator interpretou o Doutor após a 12ª encarnação, marcando a introdução da 13ª Doctor?",
    respostas: ["David Tennant", "Peter Capaldi", "Jodie Whittaker"],
    correta: 2,
  },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size+ ' de ' +totalDePerguntas

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta  
      dt.querySelector('input').setAttribute('name','pergunta-'+perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)

      dt.querySelector('input').onchange = (event) =>{
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta){
            corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size+ ' de ' +totalDePerguntas
      }

      quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem);
}
