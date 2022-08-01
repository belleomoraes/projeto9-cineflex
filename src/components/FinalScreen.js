import { useLocation, useNavigate } from "react-router-dom";

export default function FinalScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  function returnMainScreen() {
    navigate("/", { state: { seats: [] } });
  }

  return (
    <>
      <div className="summary">
        <p> Pedido feito com sucesso! </p>
        <div>
          <h1>Filme e sessão</h1>
          <h2>{location.state.movie}</h2>
          <h2>
            {location.state.date} - {location.state.hour}
          </h2>
        </div>
        <div>
          <h1>Ingressos</h1>
          {location.state.seats.map((seat) => (
            <h2>Assento {seat}</h2>
          ))}
        </div>
        <div>
          <h1>Comprador</h1>
          <h2>Nome: {location.state.name} </h2>
          <h2>CPF: {location.state.cpf} </h2>
        </div>
      </div>

      <div className="book" onClick={returnMainScreen}>
        Voltar para Home
      </div>
    </>
  );
}
