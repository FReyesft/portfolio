import Navbar from "../components/navbar";
import AboutMeSection from "../components/aboutMeSection";
import SkillItems from "../components/skillItems";
import Portfolio from "../components/portfolio";
export default function Home() {
  return (
    <>  
      <Navbar></Navbar>
      <AboutMeSection></AboutMeSection>
      <SkillItems></SkillItems>
      <Portfolio></Portfolio>
    </>
  );
}
