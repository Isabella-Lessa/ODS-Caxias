import React from "react";
import * as S from "./style";
import Caxias from "../../assets/caxias.jpg";
import Jr from "../../assets/jr.jpg";

export default function About() {
  return (
    <S.AboutContainer>
      <S.Caxias>
        <S.Box>
          <S.Title>About Us</S.Title>
        </S.Box>
        <S.BoxInfo>
          <S.TextOne>
            <S.P_One>
              Localizado na Baixada Fluminense do Rio de Janeiro, encontra-se o
              município "Duque de Caxias". Tal local é o mais populoso da
              Baixada Fluminense e o terceiro mais populoso do estado.
            </S.P_One>
            <S.P_Two>
              Este website foi desenvolvido com a intenção de retratar um pouco
              da história de Duque de Caxias, com foco no bairo "Jardim
              Gramacho", e estabelecer objetivos de desenvolvimento sustentáveis
              na localidade da Baixada a fim de melhorar a qualidade de vida dos
              moradores. Este projeto foi baseado no modelo do site da ONU.
            </S.P_Two>
          </S.TextOne>
          <S.Fig>
            <a
              href="https://pt.wikipedia.org/wiki/Duque_de_Caxias_(Rio_de_Janeiro)"
              target="_blank"
            >
              <S.ImgCaxias src={Caxias} alt="Centro - Duque de Caxias" />
            </a>
            <S.Label>
              Centro de Duque de Caxias - Praça do Pacificador | Fonte:
              wikipedia
            </S.Label>
          </S.Fig>
        </S.BoxInfo>
      </S.Caxias>

      <S.JrGramacho>
        <S.Container>
          <S.SubTitle>Jardim Gramacho</S.SubTitle>
          <S.Line></S.Line>
        </S.Container>
        <S.Info>
          <S.TextTwo>
            <S.P_One>
              "Jardim Gramacho" é um bairro de Duque de Caxias que ficou
              conhecido por ter habituado o maior lixão da América Latina. Tal
              lixão foi desativado em 2012.
            </S.P_One>
            <S.P_Two>
              Este bairro inclusive foi cenário da novela "Avenida Brasil",
              exibida na TV Globo em 2012, e mostrou um pouco da realidade
              precária dos moradores do local. A localidade apresenta vários
              problemas sociais e econômicos que acabam sendo invisibilizados
              pelo governo. Jardim Gramacho acabou tendo, principalmente em razão
              mídia, a direta imagem ao lixão em decorrência do histórico
              negativo de tantos moradores em extrema pobreza no foco do bairro.
              Porém, o local merece ter uma imagem mais humanizada e anseia por
              amparo governamental com políticas públicas. Por isso, foram
              estabelecidos Objetivos de Desenvolvimento Sustentáveis em função
              retratar medidas sociais aplicáveis à localidade. Além disso foram
              reunidas notícias reais de políticas públicas e projetos sociais
              feitos em Jardim Gramacho.
            </S.P_Two>
          </S.TextTwo>
          <S.Fig>
            <a
              href="https://pt.wikipedia.org/wiki/Jardim_Gramacho"
              target="_blank"
            >
              <S.ImgJr src={Jr} alt="Jardim Gramacho - Duque de Caxias" />
            </a>
            <S.Label>
              Jardim Gramacho - Duque de Caxias | Fonte: RestoEco
            </S.Label>
          </S.Fig>
        </S.Info>
      </S.JrGramacho>
    </S.AboutContainer>
  );
}
