import { React } from "react";
import Credits from "../components/Credits";
import Letter from "../components/LetterFromEditor";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import MobileNavBar from "../components/MobileNavBar";
import Playbar from "../components/Playbar";
import PlaylistTop from "../components/PlaylistTop";

const HomeContainer = styled.div`
  // width: 100%;
  // height: 100%;
  display: flex;
  align-items: center;
  // justify-content: center;
  background: linear-gradient(180deg, #2c4974 0%, #141314 100%), #3f132e;
  flexDirection: 'row',
`;

const LeftContainer = styled.div`
  display: flex;
  // width: 15%;
  width: 15rem;
  order: 1;
  background: #000000;
`;

const RightContainer = styled.div`
  display: flex;
  order: 2;
  flexDirection: 'column',
  justify-content:center;
  // width: 100%;
  // height: 100%;
  // background: linear-gradient(180deg, #2c4974 0%, #141314 100%), #3f132e;
`;

const Home = () => {
  return (
    <HomeContainer>
      <LeftContainer>
        <NavBar />
        <MobileNavBar />
        {/* <p>test</p> */}
      </LeftContainer>
      <RightContainer>
        <PlaylistTop
          name="COMMENCEMENT 2023"
          description="Congrats!"
          creator="specteam"
          numberOfSongs={34}
        />
        <p>test</p>
        {/* <Letter />
        <Credits /> */}
      </RightContainer>
      {/* <Playbar /> */}
    </HomeContainer>
  );
};

export default Home;
