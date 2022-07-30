
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
          bookData.ids = bookData.ids.filter(book => book !== name)
          console.log(bookData)
          }
        }
      }
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
export default function SeatScreen({infosSaved}) {
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
      {
        showtimes &&
        <SessionSelectedInformation
      weekday={showtimes.day.weekday}
        hour={showtimes.name}
        name={showtimes.movie.title}
        img={showtimes.movie.posterURL}
      />
      }
      
    </>
  );
}
