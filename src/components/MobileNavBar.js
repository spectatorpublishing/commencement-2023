import React, { useState } from "react";
import styled from "styled-components";

import { size } from "../device";
import { NavHashLink } from "react-router-hash-link";
import { sections } from "../data/sections";

import chevronDown from "../assets/chevron-down.svg";
import chevronDownBlue from "../assets/chevron-down-blue.svg";
import homeIcon from "../assets/home.svg";
import homeIconBlue from "../assets/home-blue.svg";
import sectionsIcon from "../assets/sections.svg";

const font = "Khula";

const NavWrap = styled.div`
  a {
    text-decoration: none;
  }
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;

  @media only screen and (min-width: ${size.mobile}) {
    display: none;
  }
`;

const BottomNav = styled.div`
  display: flex;
  // align-items: space-around;
  justify-content: space-around;

  background: #000000;
`;

const BottomText = styled.div`
  font-style: normal;
  font-family: ${font};
  color: white;
`;

const IconAndName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: right;
  padding: 0.75rem 0rem 0.25rem 0.5rem;
`;

const VertNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  // bottom:0;
  // right:0;
  height: 88%;
  width: 100%;
  // transform: translate(0%, 0%);
  padding: 1rem 0rem;
  margin-right: 0.1rem;
  padding-right: 1.2rem;
  a {
    text-decoration: none;
  }
`;

const Tab = styled.div`
  display: flex;
  text-align: right;
  padding: 1rem 1rem 1rem 3rem;
  color: ${(props) => (props.currentSection ? "#3693FF" : "white")};
  font-weight: 400;

  div {
    width: 10rem;
    font-size: 1.5rem;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  text-align: right;
  margin: 1rem 1rem 1rem 3rem;
  padding-bottom: 1.5rem;
  color: #bcbcbc;
  font-weight: 400;
  border-bottom: 1px solid grey;
  width: 20rem;

  div {
    width: 10rem;
    font-size: 1.5rem;
  }
`;

const NavText = styled.div`
  font-style: normal;
  margin-right: 1.5rem;
  text-align: left;
  padding-left: 0.5rem;
`;

const IconBox = styled.img`
  width: 28px;
  height: 28px;
`;

const MobileNavBar = () => {
  const [show, setToggle] = useState(false);

  return (
    <NavWrap>
      <BottomNav>
        <NavHashLink smooth to={"/"}>
          <IconAndName>
            <IconBox src={homeIcon} alt="home" />
            <BottomText>Home</BottomText>
          </IconAndName>
        </NavHashLink>
        <IconAndName onClick={() => setToggle(!show)}>
          <IconBox src={sectionsIcon} alt="section" />
          <BottomText>Sections</BottomText>
        </IconAndName>
      </BottomNav>
      {/* </BottomNavWrap > */}
      {show ? (
        <VertNav>
          <NavHashLink smooth to={"/"}>
            <Tab currentSection={window.location.pathname == "/"} key={0}>
              {window.location.pathname != "/" ? (
                <IconBox src={homeIcon} alt="home" />
              ) : (
                <IconBox src={homeIconBlue} alt="home blue" />
              )}
              <NavText>Home</NavText>
            </Tab>
          </NavHashLink>
          <SectionWrapper>
            <IconBox src={sectionsIcon} alt="sections" />
            <NavText>Sections</NavText>
          </SectionWrapper>
          {sections.map(
            (section, index) =>
              section.title != "Home" && (
                <NavHashLink smooth to={section.url}>
                  <Tab
                    currentSection={window.location.pathname == section.url}
                    key={index}
                  >
                    {window.location.pathname != section.url ? (
                      <IconBox src={chevronDown} alt="playlist" />
                    ) : (
                      <IconBox src={chevronDownBlue} alt="playlist blue" />
                    )}
                    <NavText>{section.title}</NavText>
                  </Tab>
                </NavHashLink>
              )
          )}
        </VertNav>
      ) : null}
    </NavWrap>
  );
};

export default MobileNavBar;
