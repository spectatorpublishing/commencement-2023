import React, { useState } from 'react';
import styled from 'styled-components';
import { sections } from '../data/sections';
import { NavHashLink } from 'react-router-hash-link';
import { size } from "../device";

import chevronDown from "../assets/chevron-down.svg";
import chevronDownBlue from "../assets/chevron-down-blue.svg";
import homeIcon from "../assets/home.svg";
import homeIconBlue from "../assets/home-blue.svg";
import sectionsIcon from "../assets/sections.svg";


const NavWrapper = styled.div`
    a {
        text-decoration: none;
    }
    @media only screen and (max-width: ${size.mobile}){
        display: none;
    }
`;

const VertNav = styled.div`
    padding:1rem 0rem;
    margin-right: 0.1rem;
    padding-right: 1.2rem;
`;

const Tab = styled.div`
    display:flex;
    text-align:right;
    padding:  0.25rem 1rem 0.25rem 1.5rem;
    color: ${props => props.currentSection ? '#3693FF' : 'white'};
    font-weight: 400;

    div {
        width: 10rem;
        font-size: ${props => props.isHome ? '1.5rem' : '1rem'}
    }
`;

const SectionWrapper = styled.div`
    display:flex;
    text-align:right;
    margin:  1.5rem 0rem 0.25rem 1.5rem;
    padding-bottom: 0.25rem;
    color: #BCBCBC;
    font-weight: 400;
    border-bottom: 1px solid grey;
    width: 10rem;


    div {
        width: 10rem;
        font-size: 1rem;
    }
`;

const NavText = styled.div`
    font-style: normal;
    margin-right:1.5rem;
    text-align: left;
    padding-left: 0.5rem;
`;

const IconBox = styled.img`
  width:  ${props => props.isHome ? '25px' : '15px'};
  height:  ${props => props.isHome ? '25px' : '15px'};

  @media (max-width: ${size.mobile}) {
    width: 28px;
    height: 28px;
  }
`;

const NavBar = () => {
    return (
        <NavWrapper>
            <VertNav>
                <NavHashLink smooth to={"/"}>
                    <Tab currentSection={window.location.pathname == "/"} isHome={true} key={0}>
                        {window.location.pathname != "/" ? <IconBox src={homeIcon} isHome={true} alt="home" /> : <IconBox src={homeIconBlue} isHome={true} alt="home blue" />}
                        <NavText>Home</NavText>
                    </Tab>
                </NavHashLink>
                <SectionWrapper>
                    <IconBox src={sectionsIcon} isHome={false} alt="sections" /><NavText>Sections</NavText>
                </SectionWrapper>
                {sections.map((section, index) => (section.title != "Home" &&
                    <NavHashLink smooth to={section.url}>
                        <Tab currentSection={window.location.pathname == section.url} isHome={false} key={index}>
                            {window.location.pathname != section.url ? <IconBox src={chevronDown} isHome={false} alt="playlist" /> : <IconBox src={chevronDownBlue} isHome={false} alt="playlist blue" />}
                            <NavText>{section.title}</NavText>
                        </Tab>
                    </NavHashLink>
                ))}
            </VertNav>
        </NavWrapper>
    );
};

export default NavBar;