import React from 'react';
import Card from './Card';

const projects = [
  {
    name: 'S.W.O.R.D.',
    description: 'Full stack app that allows the average citizen to make requests for help/assistance and have Super Heros answer the call. S.W.O.R.D. is the work request system of the present, applied to the world of super heros. Instead of waiting for a signal in the sky or a cry for help, a super hero can log in, and look up current missions to complete. Once complete they can update the status, allowing data analysts to better determine future threats or patterns.',
    stillPNG: './assets/images/S.W.O.R.D.-Still.PNG',
    movingGIF: './assets/images/S.W.O.R.D..gif',
    appLink: 'https://frozen-harbor-76666.herokuapp.com/',
    repoLink: 'https://github.com/PRicoSaint/S.W.O.R.D',
    tech: 'Javascript, CSS, Handlebars',
    id: 1,
  },
  {
    name: 'Tech Blog',
    description: 'Sign up and share your thoughts on any ideas tech-related. This is a wordpress style blog where users can create posts and comment on fellow users posts. Delete of a post is also an option.',
    stillPNG: './assets/images/Tech_Blog-Still.PNG',
    movingGIF: './assets/images/Tech_Blog.gif',
    appLink: 'https://guarded-peak-10394.herokuapp.com/',
    repoLink: 'https://github.com/PRicoSaint/Tech-Blog',
    tech: 'Javascript, CSS, Handlebars',
    id: 2,
  },
  {
    name: 'Note Taker',
    description: 'Take notes and save them to be referenced at a later time. Need to remember to pick up the milk on the way home? This app will help with that.',
    stillPNG: './assets/images/NoteTaker-Still.PNG',
    movingGIF: './assets/images/NoteTaker.gif',
    appLink: 'https://powerful-lake-32811.herokuapp.com/',
    repoLink: 'https://github.com/PRicoSaint/NoteTaker',
    tech: 'Javascript, HTML, CSS',
    id: 3,
  },
  // {
  //   name: 'Team Profile Generator',
  //   description: 'Command Line input that generates basic webpage that contains team information. This is used to quickly reference team information after creation, including team name, email and github.',
  //   stillPNG: './assets/images/TeamProfileGen-Still.gif',
  //   movingGIF: './assets/images/TeamProfileGen.gif',
  //   appLink: 'https://drive.google.com/file/d/1vwPtvsklqRurx4RPADoriepvcYcHe5CX/view?usp=sharing',
  //   repoLink: 'https://github.com/PRicoSaint/TeamProfileGen',
  //   tech: 'Javascript, HTML, CSS, Inquirer',
  //   id: 4,
  // },
  // {
  //   name: 'Employee Tracker',
  //   description: 'Command line employee database management app. It comes preloaded with employees to show functionality. Includes basic functions of showing employees, roles, and departments. Roles can be added, employees can added as well as departments.',
  //   stillPNG: './assets/images/EmployeeTracker-Still.PNG',
  //   movingGIF: './assets/images/EmployeeTracker.gif',
  //   appLink: 'https://drive.google.com/file/d/1FK1vdpzOc2kj2kLAPsj4dglOeKG62QL4/view?usp=sharing',
  //   repoLink: 'https://github.com/PRicoSaint/EmployeeTracker',
  //   tech: 'Javascript, MySQL, Node.js',
  //   id: 5,
  // },
  {
    name: 'E-commerce - Back End only',
    description: 'This app focuses on the back-end and exemplifies a simple e-commerce app using MySQL as its database. It contains tables for products, product tags, categories and tags. Once the server is running, it accepts POST, PUT, and DELETE to make changes to the values in the database.',
    stillPNG: './assets/images/E-commerce-Still.PNG',
    movingGIF: './assets/images/E-commerce.gif',
    appLink: 'https://drive.google.com/file/d/1pZzP5UQ56M6u5jXjln7NJakDqUqZTBIk/view?usp=sharing',
    repoLink: 'https://github.com/PRicoSaint/E-commerce-app',
    tech: 'Javascript, HTML, CSS',
    id: 4,
  },
  {
    name: 'Food for your Brews',
    description: 'Search for a beer type such as blonde, dark or IPA and find food that pairs well with it. The recipe will be displayed to make that food!',
    stillPNG: './assets/images/FoodforBrews-Still.png',
    movingGIF: './assets/images/FoodforBrews.gif',
    appLink: 'https://pricosaint.github.io/FoodforyourBrews/',
    repoLink: 'https://github.com/PRicoSaint/FoodforyourBrews',
    tech: 'API & Javascript, CSS',
    id: 5,
  },
  // {
  //   name: 'Website code Refactor',
  //   description: 'Even Social media companies need their code looked at. The HTML and CSS was refactored, optimized and made more accessible.',
  //   stillPNG: './assets/images/Horiseon.JPG',
  //   movingGIF: './assets/images/WelcometoHoriseon.gif',
  //   appLink: 'https://pricosaint.github.io/Demo-Horiseon/',
  //   repoLink: 'https://github.com/PRicoSaint/Demo-Horiseon',
  //   tech: 'HTML & CSS',
  //   id: 8,
  // },
  {
    name: 'Simple Weather Dashboard',
    description: 'Check in and see what is expected in the current and upcoming 5 day forecast, by city. Searched Cities are saved for future reference.',
    stillPNG: './assets/images/WDB-Still.png',
    movingGIF: './assets/images/WDB.gif',
    appLink: 'https://pricosaint.github.io/WeatherDashboard/',
    repoLink: 'https://github.com/PRicoSaint/WeatherDashboard',
    tech: 'API & Javascript',
    id: 6,
  },
  // {
  //   name: 'Work Day Planner/Scheduler',
  //   description: 'Sees a basic scheduler. Time blocks are highlighted according to be past, present and future. Events are saved to local when button clicked.',
  //   stillPNG: './assets/images/WorkDayScheduler-Still.png',
  //   movingGIF: './assets/images/WorkDayScheduler.gi',
  //   appLink: 'https://pricosaint.github.io/WorkDayScheduler/',
  //   repoLink: 'https://github.com/PRicoSaint/WorkDayScheduler',
  //   tech: 'Javascript',
  //   id: 10,
  // },
  // {
  //   name: 'Coding Quiz',
  //   description: 'Want to test your knowledge of coding? Take a timed Quiz and test your knowledge. Asnwers are multiple choice. Wrong answers subtract from your time. The time to complete the quiz is your final score.',
  //   stillPNG: './assets/images/CodingQuiz-Still.png',
  //   movingGIF: './assets/images/CodingQuiz.gif',
  //   appLink: 'https://pricosaint.github.io/CodingBasicsQuiz/',
  //   repoLink: 'https://github.com/PRicoSaint/CodingBasicsQuiz',
  //   tech: 'Javascript',
  //   id: 11,
  // },
  // {
  //   name: 'Password Generator',
  //   description: 'Need a new Password? How complex does it need to be? Look no further, this web app will ask the user a series of questions and randomly generate a password according to the responses. Rerun it to see a different password!',
  //   stillPNG: './assets/images/PWGenerator-Still.png',
  //   movingGIF: './assets/images/PWGenerator.gif',
  //   appLink: 'https://pricosaint.github.io/PasswordGenerator/',
  //   repoLink: 'https://github.com/PRicoSaint/PasswordGenerator',
  //   tech: 'Javascript',
  //   id: 12,
  // },
];

export default function Projects() {
  return (
    <div>
       <div className="album py-5" id="examples">
          <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
           {projects.map((project) => (
          <Card name={project.name} description={project.description} stillPNG={project.stillPNG} movingGIF={project.movingGIF} appLink={project.appLink} repoLink={project.repoLink} tech={project.tech} key={project.id} />
        ))}
    </div>
    </div>
    </div>
    </div>
  );
}
