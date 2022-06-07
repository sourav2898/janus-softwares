import React from "react";
import styled from "styled-components";
import { DiDjango } from "react-icons/di";
import { FaReact } from "react-icons/fa";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 35vh;
  width: 33%;
  background-color: white;
  margin: 1rem;
  flex: 1 0 23%;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.26);
  -webkit-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.26);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: turquoise;
    transform: scale(1.05);
    color: white;
  }
`;
const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15vh;
  width: 15vw;
  margin-bottom: 1rem;
`;
const ContentDiv = styled.div`
  text-align: center;
  font-weight: 500;
  color: grey;
  &:hover {
    color: white;
  }
`;
const Header = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
const Card = () => {
  return (
    <MainDiv>
      <IconDiv>
        <FaReact size={56} />
        <Header>Django</Header>
      </IconDiv>
      <ContentDiv>
        Django is a high-level Python web framework that encourages rapid
        development and clean, pragmatic design.
      </ContentDiv>
    </MainDiv>
  );
};

export default Card;
