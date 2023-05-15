import { React } from "react";
import Credits from "../components/Credits";
import Letter from "../components/LetterFromEditor";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import MobileNavBar from "../components/MobileNavBar";
import Playbar from "../components/Playbar";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #2c4974 0%, #141314 100%), #3f132e;
`;

const Home = () => {
  return (
    <HomeContainer>
      <NavBar />
      <MobileNavBar />
      <Playbar />
      <Letter />
      <Credits />
    </HomeContainer>
  );
};

export default Home;
