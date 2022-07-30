export default function MovieSelectedInformation ({name, img}) {
    return (
        <div className="movieDescription">
        <div className="moviesSelection">
          <div className="movie">
            <img src={img} />
          </div>
        <div className="description">
          <span>{name}</span>
        </div>
        </div>
      </div>
    )






}