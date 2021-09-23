import React from 'react';
import '../styles/Home.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'blue',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Home() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>About Me</h2>
      <img src="./Picture-6.29.jpg" className="pictureme" alt="Pic of myself"/>
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
    </section>
  );
}

export default Home;
