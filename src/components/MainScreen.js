import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function MainScreen() {
  const [movies, setMovies] = useState([]);

	useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		promise.then(resposta => {
			setMovies(resposta.data);
		});
	}, []);
   return ( <>
      <div className="selection">Selecione o filme</div>
      <div className="moviesSelection">
        {movies.map(movie =>
          <div className="movie">
        <Link to="/sessoes/{:idFilme}"><img src={movie.posterURL} /></Link>
        </div>
        )}
        
      </div>
    </>
    );
  }
  