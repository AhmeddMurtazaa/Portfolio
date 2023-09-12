/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

import image from "../images/top_section.jpg";
const imageAltText = "Multiple terms and techniques written, related to Cyber Security ";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Artificial Intelligence: Navigating The 2-Way Sword🗡️",
    description: "Read up on my article on how modern AI is an friend and foe at the same time",
    url: "https://largz.com/artificial-intelligence-navigating-the-2-way-sword/",
  },
  {
    title: "C Language Practice Set For Beginners",
    description:
      "The Github Repository which has the entire practice set for C langugage which I personally used to learn and practice",
    url: "https://github.com/AhmeddMurtazaa/C-Practice-Set",
  },
  {
    title: "My Self Improvement Instagram Page",
    description:
      "My Instagram page where I have posted over a 100 posts related to self improvement, motivation and quotes. Check it out and let me know what you think!!<3",
    url: "https://www.instagram.com/ahmed.copywriter/",
  },
  {
    title: "Python Projects Coming Soon To Github",
    description:
      "Currently learning python and creating a project on it which I will be uploading to my Github so stay tuned <3",
    url: "https://github.com/AhmeddMurtazaa",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
