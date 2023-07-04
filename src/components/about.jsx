import React from "react";
import "./style.css"; // Import the required CSS file
const infoText = [
  {
    id: 1,
    info: "I'm Alfredo, but feel free to call me Alejandro! I'm a Full Stack Developer with a knack for quickly adapting to changes and collaborating effectively with others. I'm a creative problem-solver and I love coming up with innovative ideas to deliver robust projects that satisfy both clients and end-users.",
  },
  {
    id: 2,
    info: "My educational background includes graduating from the University of Tecnologia IUT as a programmer analyst, and I've gained valuable experience working for various companies in the field.",
  },
  {
    id: 3,
    info: "I'm always eager to stay up-to-date with the latest industry advancements and learn new technologies to improve my skills and knowledge. I'm well-versed in using frontend and backend technologies like HTML5, CSS3, JavaScript, PHP, Bootstrap, and more.",
  },
  {
    id: 4,
    info: "I currently live in Orlando, FL and I'm excited to bring my skills and experience to any team and contribute to the success of complex projects.",
  },
];

const infoFreeTime = [
  {
    id: 1,
    info: "Apart from my love for programming, I value spending quality time with my family and friends. I strongly believe that balancing work and life is crucial for personal and professional growth. Whenever I'm not coding, I enjoy watching movies and exploring new books. Reading is an excellent way for me to unwind and learn new things, both in my personal and professional life.",
  },
  {
    id: 2,
    info: "I like play video game and enjoy the challenge of discovering new worlds and overcoming obstacles. It helps me relax and recharge my creativity, which ultimately boosts my productivity at work.",
  },
  {
    id: 3,
    info: "Lastly, I find joy in planning trips to new and exciting places. Traveling is an excellent way to broaden my horizons, experience new cultures, and gain a fresh perspective on life.",
  },
];
const about = () => {
  return (
    <main>
      <section id="about">
        <div className="aling-content-center title-page-style">
          <div className="main-title">
            <h1 className="title-page">
              ABOUT <span>ME</span> <span className="bg-text">MYSELFT</span>
            </h1>
          </div>
        </div>
        {/* <!-- section about experience --> */}
        <section className="aling-content-center phone-view move-content">
          <div className="aling-div-left about-width-text">
            <div className="">
              {infoText.map((item) => (
                <p key={item.id}>{item.info}</p>
              ))}
            </div>
          </div>
          <div className="aling-div-left aling-content-center img-left-margin">
            <img
              src="./../../me-red.jpg"
              alt="myself"
              width="300px"
              className="img-style-page"
            />
          </div>
        </section>
        {/* <!-- end section about experience -->
             <!-- start section about free time --> */}
        <section className="aling-content-center phone-view move-content">
          <div
            className="aling-div-left aling-content-center img-right-margin"
            id="fisrt-child-img"
          >
            <img
              src="./../../public/me.jpg"
              alt="myself"
              width="300px"
              className="img-style-page"
            />
          </div>
          <div
            className="aling-div-left about-width-text"
            id="second-child-text"
          >
            {infoFreeTime.map((item) => (
              <p key={item.id}>{item.info}</p>
            ))}
          </div>
        </section>
        {/* <!-- end section about free time --> */}
      </section>
    </main>
  );
};

export default about;
