type CartaoPerguntaProps = {
  texto: string;
};

function CartaoPergunta(props: CartaoPerguntaProps) {
  return (
    <div>
      <h2>{props.texto}</h2>
    </div>
  );
}

export default CartaoPergunta;