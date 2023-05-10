import React from "react";
import styled from "styled-components";

import downloadSVG from "../assets/download.svg";
import heartSVG from "../assets/heart.svg";
import playButtonSVG from "../assets/playbutton.svg";
import threeDotsSVG from "../assets/threedots.svg";
import IMAGEPLACEHOLDER from "../assets/IMAGEPLACEHOLDER.svg";

const PlaylistTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const CoverArt = styled.img`
  width: 200px;
  height: 200px;
`;

const ArticleInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;

const IconRow = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 1rem 0rem;
  align-items: center;
`;

const PlayButton = styled.img`
  width: 3rem;
  height: 3rem;
`;

const IconBox = styled.img`
  width: 1.75rem;
  height: 1.75rem;
`;

const PlaylistTop = ({ name, description, creator, numberOfSongs }) => {
  return (
    <PlaylistTopWrapper>
      <TopRow>
        <CoverArt src={IMAGEPLACEHOLDER}></CoverArt>
        <ArticleInfoBox>
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Created by {creator}</p>
          <p>{numberOfSongs} songs</p>
        </ArticleInfoBox>
      </TopRow>

      <IconRow>
        <PlayButton src={playButtonSVG} alt="Play"></PlayButton>
        <IconBox src={heartSVG} alt="Like"></IconBox>
        <IconBox src={downloadSVG} alt="Save"></IconBox>
        <IconBox src={threeDotsSVG} alt="More"></IconBox>
      </IconRow>
    </PlaylistTopWrapper>
  );
};

// const PlayButton = () => {
//   return (
//     <svg
//       width="75"
//       height="75"
//       viewBox="0 0 75 75"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle cx="37.5" cy="37.5" r="37.5" fill="#0B7BFF" />
//       <path d="M55 37.5L28.75 52.6554L28.75 22.3446L55 37.5Z" fill="white" />
//     </svg>
//   );
// };

// const Heart = () => {
//   return (
//     <svg
//       width="44"
//       height="39"
//       viewBox="0 0 44 39"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M29.8785 32.3369C27.0529 34.4107 24.2237 35.9241 22 36.6631M22 36.6631C15 34.3369 2 24.3369 2 13.3369M22 36.6631C19.7763 35.9241 16.9471 34.4107 14.1215 32.3369M22 36.6631C29 34.3369 42 24.3369 42 13.3369M2 13.3369C2 7.26181 6.92487 2.33691 13 2.33691C16.7203 2.33691 20.0093 4.18381 22 7.01071C23.9907 4.18381 27.2797 2.33691 31 2.33691C37.0751 2.33691 42 7.26181 42 13.3369M2 13.3369C2 15.0834 2.3277 16.8046 2.9071 18.474M42 13.3369C42 15.0834 41.6723 16.8046 41.0929 18.474"
//         stroke="#BBBBBB"
//         stroke-width="3"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//     </svg>
//   );
// };

// const Download = (width, height) => {
//   return (
//     <svg fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path
//         fill-rule="evenodd"
//         clip-rule="evenodd"
//         d="M20.2667 24.9644V10.6333H17.7333V24.9467L12.8592 19.2821L10.9389 20.9288L19.0025 30.3072L27.0965 20.9339L25.1763 19.2796L20.2667 24.9644ZM19 0.5C8.50693 0.5 0 9.00693 0 19.5C0 29.9931 8.50693 38.5 19 38.5C29.4931 38.5 38 29.9931 38 19.5C38 9.00693 29.4931 0.5 19 0.5ZM19 35.9667C9.92053 35.9667 2.53333 28.5795 2.53333 19.5C2.53333 10.4205 9.92053 3.03333 19 3.03333C28.0795 3.03333 35.4667 10.4205 35.4667 19.5C35.4667 28.5795 28.0795 35.9667 19 35.9667Z"
//         fill="#BBBBBB"
//       />
//     </svg>
//   );
// };

// const ThreeDots = () => {
//   return (
//     <svg
//       width="48"
//       height="49"
//       viewBox="0 0 48 49"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M12 27.5C13.6569 27.5 15 26.1569 15 24.5C15 22.8431 13.6569 21.5 12 21.5C10.3431 21.5 9 22.8431 9 24.5C9 26.1569 10.3431 27.5 12 27.5Z"
//         fill="#BBBBBB"
//       />
//       <path
//         d="M24 27.5C25.6569 27.5 27 26.1569 27 24.5C27 22.8431 25.6569 21.5 24 21.5C22.3431 21.5 21 22.8431 21 24.5C21 26.1569 22.3431 27.5 24 27.5Z"
//         fill="#BBBBBB"
//       />
//       <path
//         d="M36 27.5C37.6569 27.5 39 26.1569 39 24.5C39 22.8431 37.6569 21.5 36 21.5C34.3431 21.5 33 22.8431 33 24.5C33 26.1569 34.3431 27.5 36 27.5Z"
//         fill="#BBBBBB"
//       />
//     </svg>
//   );
// };

export default PlaylistTop;
