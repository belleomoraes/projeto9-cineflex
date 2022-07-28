import { Link } from "react-router-dom";
export default function SeatScreen() {
    return (
      <>
        <div className="selection">Selecione o(s) assento(s)</div>
        <div className="seats">
          <div className="seat">01</div>
          <div className="seat">01</div>
          <div className="seat">01</div>
          <div className="seat">01</div>
          <div className="seat">01</div>
          <div className="seat">01</div>
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
  
        <Link to="/sucesso"><div className="book">Reservar assento(s)</div></Link>
  
      </>
    );
  }
  