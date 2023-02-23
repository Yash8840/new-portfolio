import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import { useParallax } from "react-scroll-parallax";

const data = [
  {
    id: 1,
    image: 'https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/63ef56845e7a1b56e3a40ee6/screenshot_2023-02-17-10-27-45-0000.png',
    title: "React Admin Dashboard",
    github: "https://github.com/Yash8840/React-Admin",
    demo: "https://reactadminyash.netlify.app",
  },
  {
    id: 2,
    image: 'https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/63f766fe8af49006179b5f0f/screenshot_2023-02-23-13-16-07-0000.png',
    title: "React Meals App",
    github: "https://github.com/Yash8840/react-meals",
    demo: "https://react-meal-npm.netlify.app",
  },
  {
    id: 3,
    image: 'https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/63cad7218bd11a0a52c465e9/screenshot_2023-01-20-18-02-13-0000.png',
    title: "React Movie App",
    github: "https://github.com/Yash8840/react_movie",
    demo: "https://yashreactmovies.netlify.app",
  },
  {
    id: 4,
    image: 'https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/63ef68fae6a57267d6a004cd/screenshot_2023-02-17-11-46-06-0000.png',
    title: "JS Dino Game",
    github: "https://github.com/Yash8840/dragon-game",
    demo: "https://dinogame2002.netlify.app",
  },
  {
    id: 5,
    image: IMG5,
    title: "Music App",
    github: "https://github.com/Yash8840/Music-App",
    demo: "https://music-io.netlify.app",
  },
  {
    id: 6,
    image: 'https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/63ef6a05a54be8670521acfa/screenshot_2023-02-17-11-50-34-0000.png',
    title: "Weather App",
    github: "https://github.com/Yash8840/weather-app",
    demo: "https://weatherappbyyash.netlify.app",
  },
];

const Portfolio = () => {

  return (
    <section  id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div
        className="container 
      portfolio__container"
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;