import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Labels from "./Labels";
import ClientData from "./ClientData";
import SessionSelectedInformation from "./SessionSelectedInformation";


function SeatSelection({ name, availability, seatId, seatsId, bookData }) {
  const [clicked, setClicked] = useState("seat available");

  return availability === true ? (
    <div
      className={clicked}
      onClick={() => {
        if (clicked === "seat available") {
          setClicked("seat selected");
          bookData.ids.push(seatId);
          seatsId.push(name);
        }

        if (clicked === "seat selected") {
          setClicked("seat available");
          bookData.ids = bookData.ids.filter((book) => book !== seatId);
          seatsId = seatsId.filter((book) => book !== name);
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
  let seatsId = [];
  let bookData = {
    ids: [],
    name: "",
    cpf: "",
  };
  

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
            <SeatSelection
              key={seat.id}
              name={seat.name}
              seatId={seat.id}
              availability={seat.isAvailable}
              seatsId={seatsId}
              bookData = {bookData}
            />
          ))}
      </div>
      <Labels />
      <ClientData bookData={bookData} showtimes={showtimes} seatsId={seatsId} />
      {showtimes && (
        <SessionSelectedInformation
          weekday={showtimes.day.weekday}
          hour={showtimes.name}
          name={showtimes.movie.title}
          img={showtimes.movie.posterURL}
        />
      )}
    </>
  );
}
