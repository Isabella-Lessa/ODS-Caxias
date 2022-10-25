import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.nav`
  height: 8em;
  background-color: white;
  border-top: 5px solid #00a2df;
  box-shadow: 0px 7px 8px -2px rgba(0, 0, 0, 0.48);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Modal = styled.div`
  width: 8%;
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ImgMenu = styled.img``;

export const FigLogo = styled.figure`
  width: 8%;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgLogo = styled.img`
  width: 80px;
  height: 100%;
`;

export const BoxTitle = styled.div`
  width: 25%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 800px){
    width: 50%
  }
`;

export const TitleOne = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #00a2df;
  line-height: 25px;
`;

export const TitleTwo = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 100;
  color: #00a2df;
`;

export const Ul = styled.ul`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Li = styled.li`
  width: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LINK = styled(Link)`
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #000;
  width: 100%;

  &:hover{
    font-weight: 700
  }
`;
