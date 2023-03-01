import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
export default function AboutMe() {
  const [text, setText] = useState(true);
  return (
    <>
      <Section>
        <div>
          {text ? (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Typewriter
                options={{
                  strings: ["Hello I am", "FReyeSFT"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.h2>
          ) : (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <Typewriter
                options={{
                  strings: ["Hola Soy", "FReyeSFT"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.h2>
          )}
          🇺🇸/🇪🇸
          <input
            type="checkbox"
            id="switch"
            className="check"
            onClick={() => {
              setText(!text);
            }}
          />
          <div>
            {text ? (
              <motion.p animate={{ x: [0, 20, 0] }}>
                <h3>I am Web Developer</h3> and my name is Fernando Reyez, i am
                focused on front-end development with Javascript, React.js +
                Next.js, HTML, CSS, MySQL using tools like npm, VScode,
                Postgress.
                <br /> I am effective when proposing solutions, Good ability to
                work both in a team and autonomously.
              </motion.p>
            ) : (
              <motion.p animate={{ x: [0, -20, 0] }}>
                <h3>Soy Desarrollador Web</h3> y mi nombre es Fernando Reyez,
                estoy enfocado en el desarrollo front-end con Javascript,
                React.js + Next.js, HTML, CSS, MySQL el uso de herramientas como
                npm, VScode, Postgress.
                <br />
                Soy eficaz a la hora de proponer soluciones, buena habilidad
                para trabajar tanto en equipo como de forma autónoma.
              </motion.p>
            )}
          </div>
        </div>
      </Section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#4429F2"
          fill-opacity="1"
          d="M0,192L60,202.7C120,213,240,235,360,208C480,181,600,107,720,85.3C840,64,960,96,1080,96C1200,96,1320,64,1380,48L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

const Section = styled.div`
  .Typewriter {
    font-size: 35px;
    display: inline-block;
  }
   {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    opacity: 1;
    background-image: linear-gradient(0deg, #4429f2 0%, #80d0c7 100%);
  }
  h3 {
    display: inline-block;
    margin: 0;
    font-size: 28px;
  }
  p {
    margin-top: 25px;
    color: #000;
    font-size: 18px;
    -webkit-animation: tracking-in-expand 0.7s
      cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }
  .content {
    display: none;
  }
  .content.textEnglish {
    display: block;
  }
  .check {
    width: 60px;
    position: relative;
  }
  .check:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 30px;
    background-color: #fff;
    border-radius: 25px;
  }
  .check:checked:before {
    background-color: #fff;
  }
  .check:after {
    content: "";
    left: 0;
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #333;
    border-radius: 25px;
    transition: 0.25s;
    box-sizing: border-box;
    border: 1px solid #fff;
  }
  .check:checked:after {
    left: 25px;
  }
  h2 {
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15%;
    width: 300px;
    height: 200px;
    background-color: #7d79f2;
    font-size: 35px;
    color: #fff;
    user-select: none;
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #7d79f2,
      0 0 30px #7d79f2, 0 0 40px #7d79f2, 0 0 55px #7d79f2, 0 0 75px #7d79f2,
      0px 16px 14px rgba(125, 121, 242, 0);
  }
  div {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15%;
    padding-right: 15%;
  }

  @media screen and (max-width: 800px) {
     {
      height: 130vh;
    }
    h3 {
      font-size: 25px;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 7%;
      padding-right: 7%;
    }
  }
`;
