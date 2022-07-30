export default function SessionSelectedInformation ({weekday, hour, img, name}) {
    return (
        <div className="movieDescription">
        <div className="moviesSelection">
          <div className="movie">
            <img src={img} />
          </div>
        
        <div className="description">
          <span>{name}</span>
          <span>{weekday} - {hour}</span>
        </div>
        </div>
      </div>
    )
}