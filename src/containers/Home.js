import { React } from "react";
import Credits from "../components/Credits";
import Letter from "../components/LetterFromEditor";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import MobileNavBar from "../components/MobileNavBar";
import Playbar from "../components/Playbar";
import PlaylistTop from "../components/PlaylistTop";

const Top = styled.div`
  display:flex;
  background: linear-gradient(180deg, #2c4974 0%, #141314 100%), #3f132e;
`;
const Left = styled.div`
  width: 15rem;
  background: black;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <div>
    <Top>
      <Left>
        <NavBar />
        <MobileNavBar />
      </Left>
      <Right>
        <PlaylistTop
          name="COMMENCEMENT 2023"
          description="Congrats!"
          creator="specteam"
          numberOfSongs={34}
        />
        <Letter/>
        <Credits/>
      </Right>
    </Top>
    <Playbar />
    </div>
  );
};

export default Home;
