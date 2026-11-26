function JobCard (props) {
  return ( 
            <article className="job-card">
                <div className="job-info">
                    <h3 className="job-title">
                      <a href="#">{props.titulo}</a>
                    </h3>
                    <p className="job-meta">
                        <span className="job-company">{props.empresa}</span>
                        <span className="job-location">{props.ubicacion}</span>
                    </p>
                    <p className="job-description">{props.descripcion}</p>
                </div>
                <button className="job-apply">Aplicar</button>
            </article>
  )
}

export default JobCard