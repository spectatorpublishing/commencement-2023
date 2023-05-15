import { React } from "react";
import Credits from "../components/Credits";
import Letter from "../components/LetterFromEditor";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import MobileNavBar from "../components/MobileNavBar";
import Playbar from "../components/Playbar";
import PlaylistTop from "../components/PlaylistTop";
import SongArticle from '../components/SongArticle';

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
      <PlaylistTop
        name="COMMENCEMENT 2023"
        description="Congrats!"
        creator="specteam"
        numberOfSongs={34}
      />
    </HomeContainer>
  );
};

export default Home;
