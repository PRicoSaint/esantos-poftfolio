<div className="col">
          <div className="card shadow-sm">
            <img src="./assets/images/S.W.O.R.D.-Still.PNG" data-swap="./assets/images/S.W.O.R.D..gif"  className="bd-placeholder-img card-img-top playgif" width="100%" height="225" aria-label="Beer and food pairer" preserveAspectRatio="xMidYMid slice" focusable="false"/>
            <div className="card-body bg-light">
              <h6>{props.name}</h6>
              <p className="card-text">{props.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <a href="https://frozen-harbor-76666.herokuapp.com/" target="_blank"rel="noopener noreferrer"type="button" className="btn btn-sm btn-outline-secondary">Page</a>
                    <a href="https://github.com/PRicoSaint/S.W.O.R.D" target="_blank"rel="noopener noreferrer"type="button" className="btn btn-sm btn-outline-secondary">Repo</a>
                </div>
                <small className="text-muted">Javascript, CSS, Handlebars</small>
              </div>
            </div>
          </div>
        </div>



// Previous card example
<div className="card" style={cardStyle}>
<img
  className="card-img-top"
  src={`http://placecorgi.com/${randomWidth()}`}
  alt="Card cap"
/>
<div className="card-body">
  <h5 className="card-title">{props.name}</h5>
  <p className="card-text">{props.description}</p>
  <a href="#" className="btn btn-primary">
    Adopt {props.name}
  </a>
</div>
</div>

