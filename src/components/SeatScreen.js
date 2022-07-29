import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Labels from "./Labels";
import ClientData from "./ClientData";
import SessionSelectedInformation from "./SessionSelectedInformation";

function SeatSelection({ name, availability }) {
  const [clicked, setClicked] = useState("seat available");
  return availability === true ? (
    <div
      className={clicked}
      onClick={() => {
        setClicked("seat selected");

        if (clicked === "seat selected") {
          setClicked("seat available");
        }
      }}
    >
      {name}{" "}
    </div>
  ) : (
    <div
      className="seat unavailable"
      onClick={() => {
        alert("Esse assento não está disponível");
      }}
    >
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

  return (
    <>
      <div className="selection">Selecione o(s) assento(s)</div>
      <div className="seats">
        {showtimes &&
          showtimes.seats.map((seat) => (
            <SeatSelection key={seat.id} name={seat.name} availability={seat.isAvailable} />
          ))}
      </div>
      <Labels />
      <ClientData />

      <Link to="/sucesso">
        <div className="book">Reservar assento(s)</div>
      </Link>

      <SessionSelectedInformation
      weekday={showtimes.day.weekday}
        hour={showtimes.name}
        name={showtimes.movie.title}
        img={showtimes.movie.posterURL}
      />
    </>
  );
}
