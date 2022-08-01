import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieSelectedInformation from "./MovieSelectedInformation"

function SessionsInformation({weekday, date, showtimes}) {
  return (
    <div className="dates">
      <div className="date">
        {weekday} - {date}
        <div className="hours">
          {showtimes.map((hour) =>
            <div className="hour">
            <Link to={`/assentos/${hour.id}`}>
              <div className="hour">{hour.name}</div>
            </Link>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HourScreen() {
  const { idFilme } = useParams();
  const [sessions, setSessions] = useState(false);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`
    );
    promise
      .then((res) => {
        setSessions(res.data);
      })
  }, []);

  
  return (
    <>
      <div className="selection">Selecione o horário</div>
    
      {sessions && sessions.days.map((session) => (
        <SessionsInformation key={session.id} weekday={session.weekday} date={session.date} showtimes = {session.showtimes}/>
      ))}
<MovieSelectedInformation name = {sessions.title} img = {sessions.posterURL}/>

    </>
  );
}
