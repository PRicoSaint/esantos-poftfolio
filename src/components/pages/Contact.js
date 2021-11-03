import React from "react";
import '../styles/Contact.css';


export default function Contact() {
  return (
    <div>
      {/* <h1>Contact Page</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleName" className="form-label">
            Name
          </label>
          <input type="name" className="form-control" id="exampleName"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleMessage" className="form-label">
            Message
          </label>
          <input
            type="message"
            className="form-control"
            id="exampleMessage"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form> */}
  <h1>Contact Page</h1>

  <h2 className="ms-3">Email me directly:</h2>
      <li className="ms-3"><a className="text-muted" href="mailto:santosesteban09@gmail.com"target="_blank"rel="noopener noreferrer">santosesteban09@gmail.com</a></li>
  <h2 className="ms-3">You can find me at:</h2>
    <ul className="nav col-md-4 list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="https://twitter.com/pricosaint">Twitter</a></li>
      <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/esteban-santos-55b717b0/">LinkedIn</a></li>
      <li className="ms-3"><a className="text-muted" href="https://github.com/PRicoSaint">Github</a></li>
      <li className="ms-3"><a className="text-muted" href="https://facebook.com/esteban.santos.54">Facebook</a></li>
    </ul>
    </div>
  );
}
