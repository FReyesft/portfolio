import Link from "next/link";
import styled from 'styled-components'
import HamburguerMenu from '../components/burguerMenu'
import { useState } from "react";
export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
    <>
      <List>
          <div id="menu" className={`toggleMenu ${clicked ? 'active' : ''}`}>
            <ul className="ulToggleButton">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Skills</Link>
              </li>
              <li>
                <Link href="#">Portfolio</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
      </List>
      <HamburguerMenu clicked={clicked} handleClick={handleClick}></HamburguerMenu>
    </>
  );
}

const List = styled.nav`
{
  @media screen and (min-width: 800px) { 
    display: none;
    justify-content: center;
  }
}
@media screen and (max-width: 800px) {  
.toggleMenu{ 
  display: flex;
  align-items: center;
  background-color:#7D79F2;
  border-radius: 15px;
  height: 40px;
  position:absolute;
  left: -250px;
  top: 15px;
  width: 270px;
  transition: all 1s ease;
  font-weight: bold;
}
.toggleMenu.active {
  display: flex;
  align-items: center;
  background-color:#7D79F2;
  border-radius: 15px;
  height: 40px;
  position:absolute;
  left: -10px;
  top: 50px;
  width: 80%;
  font-weight: bold;
}


.ulToggleButton {
   display: flex;
   flex-direction: row;
   list-style: none; 
   padding-right: 20px;
  }
.ulToggleButton li > a{
    display: block;
    text-decoration: none;
    margin-left: 10px;
    color: #fff;
    font-size: 14px;
   }
.ulToggleButton li > a:hover {
    text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #7D79F2, 0 0 30px #7D79F2, 0 0 40px #7D79F2, 0 0 55px #7D79F2, 0 0 75px #7D79F2, 0px 16px 14px rgba(125,121,242,0);
  }
}
`;