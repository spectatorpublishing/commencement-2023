import React from "react";
import styled from "styled-components";

const LetterWrapper = styled.div`
  padding: 2rem 3rem 6rem 3rem;

  @media only screen and (max-width: 768px) {
    padding: 0.5rem 1rem 2rem 2.5rem;
  }
`;

const Title = styled.div`
  font-family: "Khula";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  display: flex;
  color: #ffffff;

  @media only screen and (max-width: 768px) {
    font-size: 1.88rem;
  }

  @media only screen and (max-width: 400px) {
    padding: 0;
    font-size: 1.6rem;
    display: inline-block;
  }
`;

const Text = styled.div`
  p {
    color: #b8b8b8;
    font-family: "Khula";
    font-style: normal;
    font-size: 1.15rem;
    line-height: 2rem;
    padding-right: 3rem;

    @media only screen and (max-width: 768px) {
      padding-right: 2rem;
    }
    @media only screen and (max-width: 400px) {
      display: inline-block;
      padding-right: 2rem;
    }
  }
`;

const Signatures = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 3.188rem;
  color: white;
`;

const LetterEditor = () => {
  return (
    <LetterWrapper>
      <Title>Letter From The Editor</Title>
      <Text>
        <p> Dear readers, </p>
        <p> Members of the class of 2023 arrived on campus in the fall of 2019 expecting a “normal” Columbia experience—late-night JJ’s runs, trudging across College Walk for an 8:40 a.m. major requirement, lounging on Low Steps during warm spring nights. Indeed, this is the experience they had during their first semester. And then a global pandemic reshaped life as we know it, forcing most of them away from a campus that had just begun to feel like theirs. </p>
        <p> This year’s graduating class is special. The class of 2023 was the last class to experience the “old” Columbia. It is also the first to begin rebuilding a new one. </p>
        <p> This Spectator special edition celebrates the culmination of that class’s four long years at the University and the conclusion of the 2022-2023 academic year, one of unparalleled change for Columbia. It was a year defined by complex endings: the end of the mask mandate and other pandemic restrictions; the final year of presidency for University President Lee Bollinger and Barnard President Sian Beilock, who are both leaving their posts after 21 and six years, respectively. It was also a year of new beginnings as we look toward a “new Columbia” rooted in both tradition and innovation. </p>
        <p> We hope you’ll join us as we highlight the accomplishments of graduating artists, academics, activists, and athletes; Bollinger and Beilock’s final thoughts before they exit their presidencies; and words of wisdom from Spectator’s own graduating seniors. </p>
        <p> Congratulations to the class of 2023! </p>
        <p> All the very best, </p>
      </Text>
      <Signatures>
        Irie Sentner &bull; Editor in Chief
        <br></br>
        Andrew Park &bull; Managing Editor
        <br></br>
        Tyler Shern &bull; Publisher
      </Signatures>
    </LetterWrapper>
  );
};

export default LetterEditor;
