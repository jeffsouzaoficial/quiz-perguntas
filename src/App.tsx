import './App.css'
import CartaoPergunta from './CartaoPergunta'
import { useState } from 'react'

type Pergunta = {
  texto: string;
  alternativas: string[];
  correta: number;
};

const perguntas: Pergunta[] = [
  {
    texto: "O que o map faz?",
    alternativas:[
      "Cria uma lista nova transformando cada item",
      "Apaga itens da lista",
      "Soma todos os itens da lista",
    ],
    correta: 0,
  },
  {
    texto: "O que o filter faz?",
    alternativas: [
      "Muda o valor de todos os itens da lista",
      "Cria uma lista nova só com os itens que passam num teste", 
      "Ordena a lista do menor para o maior"],
    correta: 1,
  },
];

function App() {
  const [perguntaAtual, setPerguntaAtual] = useState<number>(0);
  const [pontuacao, setPontuacao] = useState<number>(0);
  const [alternativaEscolhida, setAlternativaEscolhida] = useState<number | null>(null);
  return (
    <div>
      <h1>Quiz</h1>
      <CartaoPergunta 
      texto={perguntas[perguntaAtual].texto} 
      alternativas={perguntas[perguntaAtual].alternativas}
      />
      <p>Pontuação: {pontuacao}</p>
      <p>{alternativaEscolhida === null ? "Escolha uma alternativa" : "Você já escolheu"}</p>
    </div>
  );
}

export default App
