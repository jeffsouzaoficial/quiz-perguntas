type CartaoPerguntaProps = {
  texto: string;
  alternativas: string[];
  aoEscolher: (posicao: number) => void;
};

function CartaoPergunta(props: CartaoPerguntaProps) {
  return (
    <div>
      <h2>{props.texto}</h2>
      {props.alternativas.map((alternativa, indice) => (
        <button key={alternativa} onClick={() => props.aoEscolher(indice)}>
        {alternativa}
        </button> 
      ))}
    </div>
  );
}

export default CartaoPergunta;