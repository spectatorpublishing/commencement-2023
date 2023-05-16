//Note: This version of Credits.js reads from ../testData, edit 5 or 6 (depending on if you're reading from a json or a js file
//to read from the real file

import React from "react";
import styled from "styled-components";
import { credits } from "../testData/testCredits.js";
import { size } from "../device";

const jsonData = require("../testData/testCredits.json");

const font = "Khula";

const Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.2;
  text-transform: capitalize;
  color: #ffffff;
  font-family: ${font};
  text-align: left;

  @media only screen and (max-width: ${size.tablet}) {
    width: 80%;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: left;
  }
  @media only screen and (max-width: ${size.mobile}) {
    font-weight: 700;
    font-size: 1.2rem;
    text-align: center;
  }
`;

const SectAndNamesWrapper = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

const SectAndNames = styled.ul`
  columns: 2;
  list-style-type: none;
  padding: 0rem;

  @media only screen and (max-width: 768px) {
    columns: 1;
  }

  li {
    break-inside: avoid-column;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 400;
  width: 100%;
  height: fit-content;
  color: white;
  margin-bottom: 2rem;
  font-family: ${font};

  .sectionName {
    color: #b8b8b8;
    font-family: "Khula";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    text-transform: uppercase;

    @media only screen and (max-width: 768px) {
      padding-left: 0rem;
    }
  }

  @media only screen and (max-width: 1216px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 1.7rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
    text-align: center;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const Name = styled.div`
  font-family: ${font};
  font-size: 1.15rem;
  font-weight: 400;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  color: #ffffff;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CreditsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 3rem 8rem 3rem;

  @media only screen and (max-width: ${size.mobile}) {
    padding: 2rem 2rem 9rem 2rem;
    align-items: center;
  }
`;

const Credits = () => {
  return (
    <CreditsWrapper>
      <Header>Staff who made this issue possible</Header>
      <SectAndNamesWrapper>
        <SectAndNames>
          {/* change credits to jsonData if reading from json intead of js */}
          {Object.entries(credits).map(([section, key]) => {
            return (
              <li>
                <Section>
                  {" "}
                  <span class="sectionName">{section}</span>
                  {key.map((person, index) => {
                    return (
                      <Name key={index}>
                        {person.staff_name}, {person.title}
                      </Name>
                    );
                  })}
                </Section>
              </li>
            );
          })}
        </SectAndNames>
      </SectAndNamesWrapper>
    </CreditsWrapper>
  );
};

export default Credits;
