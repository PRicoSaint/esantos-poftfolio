import React from 'react';
import '../styles/Home.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'turquoise',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Home() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>About Me</h2>
      <img src="./Picture-6.29.jpg" className="pictureme" alt="Pic of myself"/>
      <p>
      My name is Esteban Santos. I am a Full stack Developer. 
            I recently graduated from the Southern Methodist University's Full Stack coding bootcamp. We covered various technologies with
            JavaScript as the main language of focus. From the front-end which dealt with HTML, CSS styling and making fetch requests, to 
            the back-end where we set up servers that accepted requests and obtained information from databases such as MySQL and MongoDB.
            It was a great start to the world of the coding and I will be continuing my learning and improving my skills.
      </p>
      <p>
      My previous experience is in the manufacturing sector, specifically the food industry. I was a maintenance engineer 
            and supervisor. I have led teams of maintenance mechanics in the repair and improvement of many different types of 
            equipment. I have worked for Pepsi, Hormel and General Mills, seeing how their products are manufactured. 
            It was a great experience but I have decided that I want to explore a career more focused in a field closer to my 
            degree in Electrical Engineering.   
      </p>
    </section>
  );
}

export default Home;
