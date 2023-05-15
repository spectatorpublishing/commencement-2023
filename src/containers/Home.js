import { React } from 'react';
import Credits from '../components/Credits';
import Letter from '../components/LetterFromEditor';
import NavBar from '../components/NavBar';
import styled from 'styled-components';
import MobileNavBar from '../components/MobileNavBar';
import SongArticle from '../components/SongArticle';

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #2C4974 0%, #141314 100%), #3F132E;
`;

const Home = () => {

    return (
        <HomeContainer>
            <SongArticle/>
            <NavBar />
            <MobileNavBar />
            <Letter />
            <Credits />
        </HomeContainer>
    );
};

export default Home;