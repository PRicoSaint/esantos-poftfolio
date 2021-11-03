import React from 'react';
import '../styles/Card.css';


export default function Card(props) {

  return (
    <div>
  <div className="col">
          <div className="card shadow-sm">
            <img src={props.stillPNG} data-swap={props.movingGIF}  className="bd-placeholder-img card-img-top playgif" width="100%" height="225" aria-label="Project card" preserveAspectRatio="xMidYMid slice" focusable="false"/>
            <div className="card-body bg-light">
              <h2>{props.name}</h2>
              <p className="card-text">{props.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <a href={props.appLink} target="_blank"rel="noopener noreferrer"type="button" className="btn btn-sm btn-outline-secondary">Page</a>
                    <a href={props.repoLink} target="_blank"rel="noopener noreferrer"type="button" className="btn btn-sm btn-outline-secondary">Repo</a>
                </div>
                <small className="text-muted">{props.tech}</small>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}





