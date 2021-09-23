import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
      <div className="mb-3">
    <label for="exampleName" className="form-label">Name</label>
    <input type="name" className="form-control" id="exampleName"></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleMessage" className="form-label">Message</label>
    <input type="message" className="form-control" id="exampleMessage"></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}
