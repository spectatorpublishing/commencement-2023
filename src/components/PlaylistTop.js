import React from "react";
import styled from "styled-components";

import { size } from "../device";

import downloadSVG from "../assets/download.svg";
import heartSVG from "../assets/heart.svg";
import onedotSVG from "../assets/onedot.svg";
import playButtonSVG from "../assets/playbutton.svg";
import spotifySVG from "../assets/spotify.svg";
import threeDotsSVG from "../assets/threedots.svg";
import IMAGEPLACEHOLDER from "../assets/IMAGEPLACEHOLDER.svg";

const font = "Khula";

const PlaylistTopWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${size.mobile}) {
    padding: 3rem 1.2rem;
  }
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${font};
  padding: 1rem;
  color: #ffffffcc;
  line-height: 0px;

  @media (max-width: ${size.mobile}) {
    flex-direction: column;
    padding: 0;
  }
`;

const CoverArt = styled.img`
  height: 150px;
  @media (max-width: ${size.mobile}) {
    width: 230px;
    height: 230px;
  }
`;

const ArticleInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem 1.3rem;
  align-self: flex-end;

  @media (max-width: ${size.mobile}) {
    padding: 0rem;
    align-self: flex-start;
  }
`;

const Title = styled.p`
  font-size: clamp(27px, 3vw, 40px);
  white-space: nowrap;
  font-weight: 700;
  color: #ffffff;
  margin-top: auto;
  margin-bottom: auto;
  padding-bottom: 1rem;

  @media (max-width: ${size.mobile}) {
    white-space: normal;
    line-height: 30px;
    font-size: 27px;
    padding-top: 1rem;
    padding-bottom: 0;
  }
`;

const Description = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  margin-top: auto;
  margin-bottom: auto;
  padding: 1.5rem 0rem 0.8rem 0rem;
`;

const Creator = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0em;
`;

const Spotify = styled.img`
  width: 24px;
  height: 24px;
`;

const IconRow = styled.div`
  display: flex;
  gap: 1.75rem;
  padding: 1rem 0rem 1rem 1rem;
  align-items: center;
`;

const PlayButton = styled.img`
  display: flex;
  width: 75px;
  height: 75px;
  order: 1;

  @media (max-width: ${size.mobile}) {
    order: 4;
    width: 62px;
    height: 62px;
    margin-left: auto;
  }
`;

const IconBox = styled.img`
  width: 38px;
  height: 38px;
  order: 2;

  @media (max-width: ${size.mobile}) {
    width: 28px;
    height: 28px;
  }
`;

const PlaylistTop = ({ name, description, creator, numberOfSongs }) => {
  return (
    <PlaylistTopWrapper>
      <TopRow>
        <CoverArt src={IMAGEPLACEHOLDER}></CoverArt>
        <ArticleInfoBox>
          <div display="flex">
            <Title>{name}</Title>
          </div>
          <Description>{description}</Description>
          <Creator>
            <Spotify src={spotifySVG} alt="Spotify Logo" />
            <p>{creator}</p>
            <img src={onedotSVG} />
            <p>{numberOfSongs} songs</p>
          </Creator>
        </ArticleInfoBox>
      </TopRow>

      <IconRow>
        <PlayButton src={playButtonSVG} alt="Play" />
        <IconBox src={heartSVG} alt="Like" />
        <IconBox src={downloadSVG} alt="Save" />
        <IconBox src={threeDotsSVG} alt="More" />
      </IconRow>
    </PlaylistTopWrapper>
  );
};

export default PlaylistTop;
