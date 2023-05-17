import React from 'react';
import styled from 'styled-components';
import heart from './images/heart.png';
import { size } from '../device';

const SongArticleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'Khula', sans-serif;
    align-items:center;
    justify-content: space-between;
    width:70%;
    margin:1rem;
    @media screen and (max-width: ${size.laptopS}) {
        width:90%;
    }
    @media screen and (max-width: ${size.tablet}) {
        width:95%;
    }
`;

const Image = styled.img`
    width:8rem;
    height:8rem;
    object-fit: cover;
    margin:0.75rem;
    @media screen and (max-width: ${size.tablet}) {
        width:7rem;
        height:7rem;
        margin:0.5rem;
    }
    @media screen and (max-width: ${size.mobile}) {
        width:6rem;
        height:6rem;
    }
`
const ImageText = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 95%;
`

const Text = styled.div`
    display:flex;
    flex-direction:column;
    font-size:0.55rem;
    @media screen and (max-width: ${size.tablet}) {
        font-size:0.45rem;
    }
`
const Title = styled.h1`
    color: #FFFFFF;
    font-weight: 600;
`

const AuthorName = styled.h2`
    color: rgba(167, 167, 167, 0.9);
`

const Heart = styled.img`
    width: 1.25rem;
    height:1.25rem;
    margin:0.75rem;
    @media screen and (max-width: ${size.tablet}) {
        width: 1rem;
        height: 1rem;
    }
`


const SongArticle = ({img, title, author}) => {

    return (
        <SongArticleWrapper>
            <ImageText>
                <Image src={img} />
                <Text>
                    <Title>{title}</Title>
                    <AuthorName>{author}</AuthorName>
                </Text>
            </ImageText>
            <Heart src = {heart}/>
        </SongArticleWrapper>
    );
}

export default SongArticle;