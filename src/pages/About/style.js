import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

export const Caxias = styled.div`
  width: 100%;
`;

export const Box = styled.div`
  padding: 15px;
  height: 20%;
  border-bottom: thin solid #3333;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  color: #454545;
`;

export const BoxInfo = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const TextOne = styled.div`
  width: 50%;
  height: 12em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const TextTwo = styled.div`
  width: 50%;
  height: 18em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const P_One = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  text-align: justify;
  text-justify: inter-word;

  @media screen and (max-width: 800px) {
    font-size: 75%;
  }
  @media screen and (max-width: 800px) {
    font-size: 65%;
  }
`;

export const P_Two = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  text-align: justify;
  text-justify: inter-word;

  @media screen and (max-width: 800px) {
    font-size: 75%;
  }
  @media screen and (max-width: 800px) {
    font-size: 65%;
  }
`;

export const Fig = styled.figure`
  width: 30%;
  height: 20em;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
    align-items: center;
  }
`;

export const Label = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  font-weight: 100;
  color: #c8c8c8;
`;

export const ImgCaxias = styled.img`
  width: 370px;
  height: 250px;
`;

export const JrGramacho = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  padding: 15px;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const SubTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #454545;
  line-height: 30px;
`;

export const Line = styled.line`
  background-color: #00a2df;
  width: 65px;
  height: 0.2rem;
`;

export const Info = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    padding: 20;
  }
`;

export const ImgJr = styled.img`
  width: 370px;
  height: 250px;
`;