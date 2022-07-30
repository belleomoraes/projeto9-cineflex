import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export default function FinalScreen({infosSaved}) {

    return (
      <>
        <div className="summary">
          <p> Pedido feito com sucesso! </p>
          <div>
            <h1>Filme e sessão</h1>
            <h2>Enola Holmes</h2>
            <h2>24/06/2022 13:00</h2>
          </div>
          <div>
            <h1>Ingressos</h1>
            <h2>Assento 1</h2>
            <h2>Assento 2</h2>
          </div>
          <div>
            <h1>Comprador</h1>
            <h2>Nome: {infosSaved.name}</h2>
            <h2>CPF: {infosSaved.cpf}</h2>
          </div>
        </div>
  
        <Link to="/"> <div className="book">Voltar para Home</div></Link>
      </>
    );
  }
  