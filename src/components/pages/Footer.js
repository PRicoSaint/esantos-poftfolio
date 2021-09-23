import React from 'react';
import '../styles/Footer.css';

// By importing the Footer.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding



// We use JSX curly braces to evaluate the style object on the JSX tag

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"></svg>
      </a>
      <span className="text-muted">Reach me here!</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="https://twitter.com/pricosaint">Twitter</a></li>
      <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/esteban-santos-55b717b0/">LinkedIn</a></li>
      <li className="ms-3"><a className="text-muted" href="https://github.com/PRicoSaint">Github</a></li>
      <li className="ms-3"><a className="text-muted" href="https://facebook.com/esteban.santos.54">Facebook</a></li>
      <li className="ms-3"><a className="text-muted" href="santosesteban09@gmail.com"target="_blank"rel="noopener noreferrer">Email me directly</a></li>
    </ul>
  </footer>
  );
}

export default Footer;