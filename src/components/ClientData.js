import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ClientData({bookData}) {
  console.log(bookData) 
  const [form, setForm] = useState(bookData)
  console.log(form)
  const navigate = useNavigate()

  function handleForm (event) {
  // console.log(event.target.name, event.target.value)
    setForm({
    ...form, 
    [event.target.name]: event.target.value
    
  })
  console.log(form)
  }

  function sendForm () {
    const promise = axios.post ("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", bookData);
promise.then ((res => {
  navigate('/sucesso')
}))
  }
  return (
    <>
        <div className="clientData">
          <form>
        <span>
          Nome do comprador:
          <input type="text" placeholder="Digite seu nome..." name = 'name' onChange = {handleForm} value = {form.name}/>
        </span>
        <span>
          CPF do comprador
          <input type="number" placeholder="Digite seu CPF..." name = 'cpf' onChange = {handleForm} value = {form.cpf}/>
        </span>
        </form>
      </div>
     <div className="book" onClick = {sendForm}>Reservar assento(s)</div>

</>
    )
}