import React from 'react';
import '../styles/Section.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'orange',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>About Me</h2>
      <p>
      My name is Esteban Santos. My goal is to become a Full stack Developer. 
            I want to be a part of the whole process of web development. My interests include tabletop miniature games, 
            painting and building miniatures, building computers, playing RPG’s both computer and pen and paper. 
            I also am a believer in balance so I workout as much as I can. I have one son and am happily married. 
            We hope to have one more child.
      </p>
      <p>
      My previous experience is in the manufacturing sector, specifically the food industry. I was a maintenance engineer 
            and supervisor. I have led teams of maintenance mechanics in the repair and improvement of many different types of 
            equipment. I have worked for Pepsi, Hormel and General Mills, seeing how their products are manufactured. 
            It was a great experience but I have decided that I want to explore a career more focused in a field closer to my 
            degree in Electrical Engineering.   
      </p>
      <h4 className="text-white">Contact</h4>
          <ul className="list-unstyled">
            <li><a href="https://twitter.com/pricosaint" className="text-white"target="_blank"rel="noopener noreferrer">Follow on Twitter</a></li>
            <li><a href="https://facebook.com/esteban.santos.54" className="text-white"target="_blank"rel="noopener noreferrer">Like on Facebook</a></li>
            <li><a href="santosesteban09@gmail.com" className="text-white"target="_blank"rel="noopener noreferrer">Email me</a></li>
            <li><a href="https://github.com/PRicoSaint" className="text-white"target="_blank"rel="noopener noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com/in/esteban-santos-55b717b0/" className="text-white"target="_blank"rel="noopener noreferrer">LinkedIn</a></li>          
            <li><a href="./Esteban A Santos Resume - 2021.docx.pdf" className="text-white"target="_blank"rel="noopener noreferrer">Resume</a></li>
          </ul>
          <img src="./Picture-6.29.jpg" className="pictureme" alt="Pic of myself"/>
    </section>
  );
}

export default Section;
