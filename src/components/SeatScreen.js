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
  
        <div className="book">Reservar assento(s)</div>
        <div className="movieDescription">
          <div className="moviesSelection">
            <div className="movie">
              <img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" />
            </div>
          </div>
          <div className="description">
            <span>Enola Holmes</span>
            <span>Quinta-feira 15:00</span>
          </div>
        </div>
      </>
    );
  }
  