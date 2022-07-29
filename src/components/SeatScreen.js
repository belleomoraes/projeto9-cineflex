import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Labels from "./Labels";
import ClientData from "./ClientData";
import SessionSelectedInformation from "./SessionSelectedInformation";


let bookData = {
  ids:[],
  name: "",
  cpf: ""
}

// const promise = axios.post ("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", bookData);
// promise.then()
// promise.catch(returnError)

// function returnError(error) {
//   console.log("deu erro")
// }
function SeatSelection({ name, availability }) {
  const [clicked, setClicked] = useState("seat available");
  return availability === true ? (
    <div
      className={clicked}
      onClick={() => {
        if (clicked === "seat available") {
          setClicked("seat selected");
          bookData.ids.push(name)
          console.log(bookData)
        }

        if (clicked === "seat selected") {
          setClicked("seat available");
          //parei aqui - perguntar 
          for (let i = 0; i < bookData.ids.length; i++) {
            if (bookData.ids[i] === name) {
              bookData.id.pull(i)
              console.log(bookData)
              break;
            }
          }
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
      <ClientData bookData = {bookData}/>

      <Link to="/sucesso">
        <div className="book">Reservar assento(s)</div>
      </Link>
      


      {/* <SessionSelectedInformation
      weekday={showtimes.day.weekday}
        hour={showtimes.name}
        name={showtimes.movie.title}
        img={showtimes.movie.posterURL}
      /> */}
    </>
  );
}
