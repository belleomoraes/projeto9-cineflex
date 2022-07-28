import { Link } from "react-router-dom";

export default function HourScreen() {
    return (
      <>
        <div className="selection">Selecione o horário</div>
        <div className="dates">
          <div className="date">
            Quinta-feira - 27/07/2022
            <div className="hours">
            <div className="hour">
            <Link to="/assentos/:idSessao"><div className="hour">15:00</div></Link>
            </div>
            <div className="hour">
            <Link to="/assentos/:idSessao"><div className="hour">15:00</div></Link>
            </div>
            <div className="hour">
            <Link to="/assentos/:idSessao"><div className="hour">15:00</div></Link>
            </div>
          </div>
        </div>
        </div>

        
      </>
    );
  }
  