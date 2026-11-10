type CartaoPerguntaProps = {
  texto: string;
  alternativas: string[];
};

function CartaoPergunta(props: CartaoPerguntaProps) {
  return (
    <div>
      <h2>{props.texto}</h2>
      {props.alternativas.map((alternativa) => (
        <button key={alternativa}>{alternativa}</button>
      ))}
    </div>
  );
}

export default CartaoPergunta;