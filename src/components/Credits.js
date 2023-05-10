//Note: This version of Credits.js reads from ../testData, edit 5 or 6 (depending on if you're reading from a json or a js file
//to read from the real file

import React from 'react';
import styled from 'styled-components';
import { credits } from '../testData/testCredits.js'
const jsonData = require("../testData/testCredits.json")

const font = "Khula";

const HeaderDiv = styled.div`
    padding-left:4rem;
    @media only screen and (max-width: 768px){
        text-align:center;
    }
`;

const Header = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 48px;
    text-transform: capitalize;
    color: #FFFFFF;
    font-family: ${font};
    padding-top:2rem;
    @media only screen and (max-width: 1216px){
        width: 68%;
        font-size: 1.8rem;
    }
    @media only screen and (max-width: 768px){
        width: 80%;
        font-size: 1.5rem;
    }
    @media only screen and (max-width: 600px){
        font-weight: 400;
        font-size: 1.3rem;
        padding-top:5rem;
    }
`;

const SectAndNames = styled.ul`
  columns: 2;
  column-gap: 2rem;
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;

  @media only screen and (max-width: 768px) {
    columns: 1;
    }
  }
`;

const Section = styled.div`
    font-size: 2rem;
    font-weight: 400;
    width: 28rem;
    height: fit-content;
    margin-bottom: 2rem;
    padding:0;
    margin:0;
    color: white;
    font-family: ${font};

    .sectionName{
        padding-left: 4rem;
        color: #B8B8B8;
        font-family: 'Khula';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 26px;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 1216px){
        font-size: 1.8rem;
        width: 18rem;
    }
    @media only screen and (max-width: 1024px){
        font-size: 1.7rem;
        width: 16rem;
    }
    @media only screen and (max-width: 768px){
        font-size: 1.6rem;
        text-align: center;
        width: 100%;
    }
    @media only screen and (max-width: 600px){
        font-size: 1.4rem;
        text-align: center;
        width: 100%;
    }
`;

const Name = styled.div`
    padding-left: 4rem;
    font-family: ${font};
    font-size: 1.15rem;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #FFFFFF;
    @media only screen and (max-width: 1216px){
        font-size: 1rem;
    }
    @media only screen and (max-width: 1024px){
        font-size: 0.8rem;
    }
    @media only screen and (max-width: 768px){
        font-size:1rem;
    }
`;

const CreditsWrapper = styled.div`
    padding-bottom: 145px;

`;

const Credits = () => {

    return (
        <CreditsWrapper>
        <HeaderDiv><Header>Staff who made this issue possible</Header></HeaderDiv>
            <SectAndNames>

                {/* change credits to jsonData if reading from json intead of js */}
                    {Object.entries(credits).map(([section, key]) => {
                        return(
                            <li>
                                <Section> <span class = "sectionName">{section}</span>
                                {key.map((person, index) => {
                                    return(
                                        <Name key={index}>{person.staff_name}, {person.title}</Name>
                                    );
                                })}
                                </Section>
                            </li>
                        );
                    })}
            </SectAndNames>
        </CreditsWrapper>
    );
};

export default Credits;