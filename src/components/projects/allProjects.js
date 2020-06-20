const materialUi = {
  img: "https://img.icons8.com/color/48/000000/material-ui.png",
  alt: "Material UI",
};
const nodeJs = {
  img: "/nodeJs.svg",
  alt: "Node Js",
};
const scss = {
  img: "https://img.icons8.com/color/48/000000/sass.png",
  alt: "SCSS",
};
const css = {
  img: "https://img.icons8.com/color/48/000000/css3.png",
  alt: "CSS",
};
const react = {
  img: "https://img.icons8.com/color/48/000000/react-native.png",
  alt: "React",
};
const mongoDb = {
  img: "https://img.icons8.com/color/48/000000/mongodb.png",
  alt: "mongoDB",
};
const mongoose = {
  img: "/mongoose.png",
  alt: "Mongoose",
};
const express = {
  img: "/express.png",
  alt: "Express",
};
const styledComponents = {
  img: "/styledComponents.png",
  alt: "Styled Components",
};

const redux = {
  img: "https://img.icons8.com/color/48/000000/redux.png",
  alt: "Redux",
};

const reactNative = {
  img: "https://img.icons8.com/color/48/000000/react-native.png",
  alt: "React Native",
};
const mocha = {
  img: "mocha.svg",
  alt: "Mocha",
};
const expo = {
  img: "expo.png",
  alt: "Expo",
};

export const projects = [
  {
    title: "Plant Watering App",
    subheader: "Personal project",
    image: "/wateringApp.jpg",
    smallImage: "/SmallWateringApp.jpg",
    imgTitle: "plant picture and search field ",
    specialization: "Fullstack",
    stack: [reactNative, mocha, expo, nodeJs, mongoDb, express],
    technologies: ["Node.js", "Express", "Mongoose", "React"],
    description:
      "Personal project made with React Native. This App will suggest you how often your plants should be watered. Also you'll find an interesting fact about each plant. Just start by typing the plant name e.g. Avocado tree.",
    myInput:
      "For this App I created the mockup in Figma, implemented the REST API with tests and created the App.",
    demo: "https://expo.io/@anel92r/plants-watering-app",
    github:
      "https://github.com/elenaserezhkina/plant-watering-project/tree/master",
  },
  {
    title: "Laces Up",
    subheader: "Hackathon project",
    image: "/lacesUp.jpg",
    smallImage: "/SmallLacesUp.jpg",
    imgTitle: "shoe with laces",
    specialization: "Fullstack",
    stack: [nodeJs, react, mongoDb, mongoose, express],
    technologies: ["Node.js", "Express", "Mongoose", "React"],
    description: "Project made for online shop selling designer laces ",
    companyLink: "https://www.lacesup.es/",
    myInput:
      "I was creating schemas for the database modals and implementing parts of REST API, also I deployed backend to Heroku and connected it to the DB on Atlas. In the frontend I was working on displaying laces on the selected shoe.",
    demo: "https://hardcore-austin-68e6f2.netlify.app/",
    github: "https://github.com/elenaserezhkina/laces_back",
  },
  {
    title: "Workademy",
    subheader: "Client project",
    image: "/workademy.jpg",
    smallImage: "/SmallWorkademy.jpg",
    imgTitle: "Workademy logo",
    specialization: "Front-end",
    stack: [react, redux, styledComponents, materialUi],
    technologies: [
      "React",
      "Redux",
      "Styled Components",
      "Material UI",
      "different libraries",
    ],
    description: "An online B2B course creation platform made for ",
    companyLink: "https://www.theworkademy.com/",
    myInput:
      "I was adapting the mockups, implementing navigation, adding a global state using Redux, writing logic for creating, modifying course information, integrating ‘drag and drop’ library, creating a complex JSON object according to the API specifications.",
    demo: "",
    github: "https://github.com/chudaol/workademy",
  },
  {
    title: "BEhERe",
    subheader: "Project at WCS",
    description:
      "React app that uses Punk API and allows users to find beers based on multiple criteria.",
    image: "/beerApp.jpg",
    smallImage: "/SmallBeerApp.jpg",
    imgTitle: "Beer picture",
    specialization: "Front-end",
    stack: [react, materialUi, scss],
    technologies: ["React", "SCSS", "Material UI", "different libraries"],
    myInput:
      "During the project I worked on routing, navigation, creation of small components, fetching API and putting things together.",
    demo: "https://behere.netlify.app/#/",
    github: "https://github.com/elenaserezhkina/Project1_BeerApp",
  },
  {
    title: "WIKI-Audio",
    subheader: "Hackathon project",
    image: "/getYourGuide.jpg",
    smallImage: "/SmallGetYourGuide.jpg",
    imgTitle: "wiki audio project",
    specialization: "Front-end",
    stack: [react, materialUi, css],
    technologies: ["React", "CSS", "Material UI", "different libraries"],
    description:
      "The app was made during the hackathon in a team of 3 people. Our project received the first prize from Twilio.",
    myInput:
      "I was responsible for the front-end part: used Material UI for different components and integrated mapbox library into our project.",
    link:
      "https://www.linkedin.com/feed/update/urn:li:activity:6638009115245334528/",
  },
  {
    title: "Heroship",
    subheader: "Hackathon project",
    image: "/heroship.jpg",
    smallImage: "/SmallHeroship.jpg",
    imgTitle: "preview of Heroship website",
    specialization: "Front-end",
    stack: [react, materialUi, css],
    technologies: ["React", "CSS", "Material UI", "different libraries"],
    description:
      "Project made during 2 days of hackathon with 2 teammates. Using SuperHero API we created a dating application on React that allows users to browse different hero profiles, check details about them and choose the match.",
    myInput: "",
    demo: "https://heroship.netlify.app/",
    github: "https://github.com/elenaserezhkina/Project2_HeroShip",
  },
];
