import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

function MovieInformation({id, image}) {
  return (
    <div className="movie">
    <Link to={`/sessoes/${id}`}><img src={image} /></Link>
    </div>
  )
}
export default function MainScreen() {
  const [movies, setMovies] = useState([]);

	useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		promise.then(res => {
			setMovies(res.data);
		});
	}, []);
   return ( <>
      <div className="selection">Selecione o filme</div>
      <div className="moviesSelection">
        {movies.map((movie) =>
       (<MovieInformation key = {movie.id} id = {movie.id} image = {movie.posterURL}/>)
        )}
        
      </div>
    </>
    );
  }
  