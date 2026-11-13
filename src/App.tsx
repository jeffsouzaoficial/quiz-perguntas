import './App.css'
import CartaoPergunta from './CartaoPergunta'
import { useState } from 'react'

type Pergunta = {
  texto: string;
  alternativas: string[];
  correta: number;
};

type Tela = "inicio" | "jogando" | "resultado";

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

  const [tela, setTela] = useState<Tela>("inicio");

  function acertou(posicao: number): boolean {
    return posicao === perguntas[perguntaAtual].correta;
  }

  function escolherAlternativa(posicao: number) {
    if (alternativaEscolhida !== null) {
      return;
    }
    setAlternativaEscolhida(posicao);
    if (acertou(posicao)) {
      setPontuacao(pontuacao + 1);
    }
  }

  function proximaPergunta() {
    if (perguntaAtual === perguntas.length - 1) {
      setTela("resultado");
      return;
    }
    setPerguntaAtual(perguntaAtual + 1);
    setAlternativaEscolhida(null);
  }

  function jogarDeNovo() {
    setPerguntaAtual(0);
    setPontuacao(0);
    setAlternativaEscolhida(null);
    setTela("inicio");
  }


  if (tela === "inicio") {
    return (
      <div>
        <h1>Quiz</h1>
        <p>Teste seus conhecimentos de JavaScript e React</p>
        <button onClick={() => setTela("jogando")}>Começar</button>
      </div>
    );
  }

  if (tela === "resultado") {
    return (
      <div>
        <h1>Resultado</h1>
        <p>Você fez {pontuacao} pontos de {perguntas.length}</p>
        <button onClick={jogarDeNovo}>Jogar de novo</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Quiz</h1>
      <CartaoPergunta 
      texto={perguntas[perguntaAtual].texto} 
      alternativas={perguntas[perguntaAtual].alternativas}
      aoEscolher={escolherAlternativa}
      />
      
      <p>Pontuação: {pontuacao}</p>

      {alternativaEscolhida === null ? (
        <p>Escolha uma alternativa</p>
      ) : (
        <button onClick={proximaPergunta}>Próxima</button>
      )}

    </div>
  );
}

export default App
