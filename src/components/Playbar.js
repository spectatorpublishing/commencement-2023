import React from "react";
import styled from "styled-components";

import { size } from "../device";

import entertainment from "../assets/entertainment.svg";
import loop from "../assets/loop.svg";
import mobilePlayButton from "../assets/mobile-play.svg";
import musiclist from "../assets/musiclist.svg";
import nextSong from "../assets/next-song.svg";
import playButton from "../assets/playbar-playbutton.svg";
import previousSong from "../assets/previous-song.svg";
import progressBar from "../assets/progressbar.svg";
import shuffle from "../assets/shuffle.svg";
import speaker from "../assets/speaker.svg";
import volumeBar from "../assets/volume-bar.svg";
import volumeSpeaker from "../assets/volume-speaker.svg";

import IMAGEPLACEHOLDER from "../assets/IMAGEPLACEHOLDER.svg";

const font = "Khula";

const PlayBarWrapper = styled.div`
  position:fixed;
  bottom:0;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: ${size.mobile}) {
    display: flex;
    height: 100%;
    flex-direction: row;
  }
`;

const PlayBarContent = styled.div`
  display: flex;
  width: 100%;
  height: 87px;
  padding: 0.3rem 0rem;
  align-items: center;
  background-color: #181818;

  @media (max-width: ${size.mobile}) {
    padding: 0;
    height: 60px;
    flex-grow: 2;
  }
`;

const AlbumCover = styled.img`
  width: 15rem;

  @media (max-width: ${size.mobile}) {
    width: 60px;
  }
`;

const SongInfo = styled.div`
  display: flex;
  width: 15%;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding-left: 1.5rem;
  font-family: ${font};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;

  h4 {
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    margin-top: auto;
    margin-bottom: auto;
  }

  p {
    color: #ffffffcc;
    font-size: 12px;
    font-weight: 600;
    margin-top: auto;
    margin-bottom: auto;
  }

  @media (max-width: ${size.mobile}) {
    flex-grow: 2;
    padding-left: 1rem;
    h4 {
      font-size: 12px;
    }
    p {
      font-size: 10px;
    }
  }
`;

const CenterPanel = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  @media (max-width: ${size.mobile}) {
    display: none;
  }
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

const MobilePlayButton = styled.img`
  display: none;

  @media (max-width: ${size.mobile}) {
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 0.75rem;
  }
`;

const RightPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1.5rem;

  @media (max-width: ${size.mobile}) {
    display: none;
  }
`;

const VolumeBar = styled.img`
  width: 100px;
`;

const Playbar = () => {
  return (
    <PlayBarWrapper>
      <AlbumCover src={IMAGEPLACEHOLDER} alt="Album Cover" />

      <PlayBarContent>
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

        <MobilePlayButton src={mobilePlayButton} alt="Play/Pause" />
      </PlayBarContent>
    </PlayBarWrapper>
  );
};

export default Playbar;
