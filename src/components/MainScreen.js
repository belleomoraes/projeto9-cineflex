import { Link } from "react-router-dom";
export default function MainScreen() {
   return ( <>
      <div className="selection">Selecione o filme</div>
      <div className="moviesSelection">
        <div className="movie">
        <Link to="/sessoes/:idFilme"><img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" /></Link>
        </div>
        <div className="movie">
        <Link to="/sessoes/:idFilme"><img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" /></Link>
        </div>
        <div className="movie">
        <Link to="/sessoes/:idFilme"><img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" /></Link>
        </div>
        <div className="movie">
        <Link to="/sessoes/:idFilme"><img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" /></Link>
        </div>
        <div className="movie">
        <Link to="/sessoes/:idFilme"><img src="https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg" /></Link>
        </div>
      </div>
    </>
    );
  }
  