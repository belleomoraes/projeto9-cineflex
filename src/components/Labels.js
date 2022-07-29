export default function Labels () {
    return (
        <div className="label">
        <span>
          <div className="seat selected"></div>
          Selecionado
        </span>
        <span>
          <div className="seat available"></div>
          Disponível
        </span>
        <span>
          <div className="seat unavailable"></div>
          Indisponível
        </span>
      </div>
    )
}