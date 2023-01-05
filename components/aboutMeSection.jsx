import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function AboutMe() {
  const [text, setText] = useState(true);
  return (
    <>
      <Section>
        <div>
          <h2>FReyeSFT</h2>
          English/Spanish
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
                🇺🇸 Hello, my name is Fernando Reyes, I am a full stack developer
                with JavaScript, I am focused on front-end development, I like
                to know a lot about something, but a little about everything, I
                am effective when it comes to proposing solutions, good ability
                to work both in a team and independently.
              </motion.p>
            ) : (
              <motion.p animate={{ x: [0, -20, 0] }}>
                🇪🇸 Hola, mi nombre es Fernando Reyes, soy desarrollador full
                stack con JavaScript, Estoy enfocado en el desarrollo front-end,
                me gusta saber mucho de algo, pero un poco de todo, soy eficaz a
                la hora de proponer soluciones, buena habilidad para trabajar
                tanto en equipo como autónomamente.
              </motion.p>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

const Section = styled.div`
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
   {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100%;
    margin-top: 70px;
  }
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 200px;
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
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10%;
      padding-right: 10%;
    }
  }
`;
