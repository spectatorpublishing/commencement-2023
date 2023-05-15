import React from "react";
import styled from "styled-components";

import entertainment from "../assets/entertainment.svg";
import loop from "../assets/loop.svg";
import musiclist from "../assets/musiclist.svg";
import nextSong from "../assets/next-song.svg";
import playButton from "../assets/playbar-playbutton.svg";
import previousSong from "../assets/previous-song.svg";
import progressBar from "../assets/progressbar.svg";
import shuffle from "../assets/shuffle.svg";
import speaker from "../assets/speaker.svg";
import volumeBar from "../assets/volume-bar.svg";
import volumeSpeaker from "../assets/volume-speaker.svg";

const font = "Khula";

const PlayBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 87px;
  padding: 0.5rem 0rem;
  align-items: center;
  background-color: #181818;
`;

const SongInfo = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: left;
  padding-left: 1.25rem;
  font-family: ${font};

  h4 {
    margin-top: auto;
    margin-bottom: auto;
    color: #ffffff;
  }

  p {
    margin-top: auto;
    margin-bottom: auto;
    color: #ffffffcc;
  }
`;

const CenterPanel = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;
`;

const ProgressBar = styled.img`
  width: 60%;
  margin-top: 1rem;
`;

const IconImage = styled.img`
  width: 18px;
  height: 18px;
  margin: 0rem 0.6rem;
`;

const PlayButton = styled.img`
  width: 35px;
  height: 35px;
  margin: 0rem 0.6rem;
`;

const RightPanel = styled.div`
  display: flex;
  width: 20%;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1.25rem;
`;

const VolumeBar = styled.img`
  width: 100px;
`;

const Playbar = () => {
  return (
    <PlayBarWrapper>
      <SongInfo>
        <h4>Hall of Fame (feat. will.i.am)</h4>
        <p>The Script, will.i.am</p>
      </SongInfo>

      <CenterPanel>
        <Controls>
          <IconImage src={shuffle} alt="Shuffle" />
          <IconImage src={previousSong} alt="Previous Song" />
          <PlayButton src={playButton} alt="Play/Pause" />
          <IconImage src={nextSong} alt="Next Song" />
          <IconImage src={loop} alt="Loop" />
        </Controls>
        <ProgressBar src={progressBar} alt="Progress Bar" />
      </CenterPanel>

      <RightPanel>
        <IconImage src={entertainment} alt="Entertainment" />
        <IconImage src={musiclist} alt="Music List" />
        <IconImage src={speaker} alt="Speaker" />
        <IconImage src={volumeSpeaker} alt="Volume" />
        <VolumeBar src={volumeBar} />
      </RightPanel>
    </PlayBarWrapper>
  );
};

export default Playbar;
