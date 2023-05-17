import { React } from "react";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import MobileNavBar from "../components/MobileNavBar";
import Playbar from "../components/Playbar";
import PlaylistTop from "../components/PlaylistTop";
import SongArticle from '../components/SongArticle';

import { size } from "../device";

const Top = styled.div`
  display: flex;
  background: linear-gradient(180deg, #2c4974 0%, #141314 15%), #3f132e;

  @media (min-width: ${size.mobile}) {
    width: 100%;
  }
`;

const Bottom = styled.div`
  display: flex;
  @media (min-width: ${size.mobile}) {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;

const Left = styled.div`
  display: none;
  @media (min-width: ${size.mobile}) {
    display: flex;
    width: 15rem;
    background: black;
    height: 100vh;
    position: sticky;
    top: 0;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${size.mobile}) {
    width: 100%;
  }
`;

const DividerLine = styled.hr`
  background-color: white;
  width: 93%;
  height: 1px;

  @media (max-width: ${size.mobile}) {
    display: none;
  }
`;

const ArticlesContainer = styled.div`
  padding-bottom:7rem;
`;

const Section = ({ header, articles }) => {
  return (
    <div>
      <Top>
        <Left>
          <NavBar />
        </Left>
        <Right>
          <PlaylistTop
            name={header}
            description="Congratulations Class of 2023! 🥳"
            creator="specteam"
            numberOfSongs={Object.keys(articles).length}
          />
          <DividerLine />
          <ArticlesContainer>
            {articles.map((article) => (
              <a style={{ textDecoration: 'none' }} href={article.article_link}><SongArticle img={article.image_url} title={article.article_title} author={article.article_authors} /></a>
            ))}
          </ArticlesContainer>
        </Right>
      </Top>
      <Bottom>
        <Playbar />
        <MobileNavBar />
      </Bottom>
    </div>
  );
};

export default Section;
