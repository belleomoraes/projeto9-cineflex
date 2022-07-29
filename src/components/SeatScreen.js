import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function SeatSelection({ name, availability }) {
  const [clicked, setClicked] = useState("seat available")
  return availability === true ? (
    <div className={clicked} onClick = { () => {
      setClicked ("seat selected")
    }
    }>{name} </div>
  ) : (
    <div className="seat unavailable" onClick={() => {
      alert("Esse assento não está disponível")
    }}>
      {name}
    </div>
  );
}
export default function SeatScreen() {
  const { idSessao } = useParams();
  const [showtimes, setShowtimes] = useState(false);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
    );
    promise.then((res) => {
      setShowtimes(res.data);
    });
  }, []);

  console.log(showtimes);
  return (
    <>
      <div className="selection">Selecione o(s) assento(s)</div>
      <div className="seats">
        {showtimes &&
          showtimes.seats.map((seat) => (
            <SeatSelection key={seat.id} name={seat.name} availability={seat.isAvailable} />
          ))}
      </div>
      <div className="label">
        <span>
          <div className="seat selected"></div>
          Selecionado
        </span>
        <span>
          <div className="seat available"></div>
          Disponível
        </span>
        <span>
          <div className="seat unavailable"></div>
          Indisponível
        </span>
      </div>

      <div className="clientData">
        <span>
          Nome do comprador:
          <input type="text" placeholder="Digite seu nome..." />
        </span>
        <span>
          CPF do comprador
          <input type="number" placeholder="Digite seu CPF..." />
        </span>
      </div>

      <Link to="/sucesso">
        <div className="book">Reservar assento(s)</div>
      </Link>
    </>
  );
}
