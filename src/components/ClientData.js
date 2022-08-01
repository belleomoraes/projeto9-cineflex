import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ClientData({ bookData, showtimes, seatsId }) {
  const [form, setForm] = useState(bookData);
  const navigate = useNavigate();

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function sendForm() {
    const body = {
      ...form,
    };

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
      body
    );
    promise.then((res) => {
      navigate("/sucesso", {
        state: {
          name: body.name,
          cpf: body.cpf,
          seats: seatsId,
          date: showtimes.day.date,
          hour: showtimes.name,
          movie: showtimes.movie.title,
        },
      });
    });
  }
  return (
    <>
      <div className="clientData">
        <form>
          <span>
            Nome do comprador:
            <input
              type="text"
              placeholder="Digite seu nome..."
              name="name"
              onChange={handleForm}
              value={form.name}
            />
          </span>
          <span>
            CPF do comprador:
            <input
              type="number"
              placeholder="Digite seu CPF..."
              name="cpf"
              onChange={handleForm}
              value={form.cpf}
            />
          </span>
        </form>
      </div>
      <div className="book" onClick={sendForm}>
        Reservar assento(s)
      </div>
    </>
  );
}
