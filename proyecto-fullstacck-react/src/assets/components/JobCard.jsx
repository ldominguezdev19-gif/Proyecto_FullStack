function JobCard () {
  return ( 
            <article className="job-card">
                <div className="job-info">
                    <h3 className="job-title">
                      <a href="job-detail.html">ingeniero de Software Senior</a>
                    </h3>
                    <p className="job-meta">
                        <span className="job-company">Tech Solutions Inc.</span>
                        <span className="job-location">Remoto</span>
                    </p>
                    <p className="job-description">Buscamos un ingeniero de software con experiencia en JavaScript, React y Node.js.</p>
                </div>
                <button className="job-apply"  id="btn-aplicar">Aplicar</button>
            </article>
  )
}

export default JobCard