export default function FinalScreen() {
    return (
      <>
        <div className="summary">
          <p> Pedido feito com sucesso! </p>
          <span>
            <h1>Filme e sessão</h1>
            <h2>Enola Holmes</h2>
            <h2>24/06/2022 13:00</h2>
          </span>
          <span>
            <h1>Ingressos</h1>
            <h2>Assento 1</h2>
            <h2>Assento 2</h2>
          </span>
          <span>
            <h1>Comprador</h1>
            <h2>Nome: Isabelle Moraes</h2>
            <h2>CPF: 123.123.123-12</h2>
          </span>
        </div>
  
        <div className="book">Voltar para Home</div>
      </>
    );
  }
  