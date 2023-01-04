import styled from "styled-components";
import { useState, useEffect } from "react";
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
              <p>
                🇺🇸 Hello, my name is Fernando Reyes full stack developer with
                JavaScript, but I am focused on front-end development, I like to
                know a lot about something, but also a little about everything,
                my goal is to improve my profile as a programmer and also help
                the company contributing my knowledge.
              </p>
            ) : (
              <p>
                🇪🇸 Hola, mi nombre es Fernando Reyes full stack developer con
                JavaScript, pero estoy focalizado en el desarrollo front-end, me
                gusta saber mucho de algo, pero tambien un poco de todo, mi meta
                es mejorar mi perfil como programador y tambien ayudar a la
                empresa aportando mi conocimiento.
              </p>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

const Section = styled.div`
  p {
    margin-top: 15px;
    color: #000;
    font-size: 18px;
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
    box-shadow: 0 0 2px #fff, 0 0 10px #fff, 0 0 2px #fff, 0 0 5px #7d79f2,
      0 0 30px #7d79f2, 0 0 40px #7d79f2, 0 0 55px #7d79f2, 0 0 75px #7d79f2,
      0px 16px 14px rgba(125, 121, 242, 0);
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
