import React from 'react';
import styled from 'styled-components';

const LetterWrapper = styled.div`
    padding-left:4.5rem;
    padding-top: 4rem;
    
    @media only screen and (max-width: 768px){
        padding: 3rem 3rem 0rem 3rem;
    }
`;

const LetterEditor = () => {
    return (
        <LetterWrapper>
            <Title>Letter From The Editor</Title>

            <Text>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Text>
            <Signatures>
                Irie Sentner &bull; Editor in Chief
                <br></br>
                Andrew Park &bull; Managing Editor
            </Signatures>
        </LetterWrapper>
    );
};


const Title = styled.div`

    font-family: 'Khula';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    display: flex;
    color: #FFFFFF;


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
    p{
    color: #B8B8B8;
    font-family: 'Khula';
    font-style: normal;
    font-weight: 25rem;
    font-size: 1.29rem;
    line-height: 2rem;
    padding-right: 3rem;
    
    @media only screen and (max-width: 768px){
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
    color:#B8B8B8;

`;


export default LetterEditor;