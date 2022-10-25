import React, { useState } from "react";
import * as S from "./style";
import Logo from '../../assets/onu-logo.png';
import OpenMenu from '../../assets/black menu_closed.png';
import ClosedMenu from '../../assets/black menu_open.png';

export default function Header() {

  const [ status, setStatus ] = useState(false)

  const handleMenu = () => {
    setStatus(!status)
  }

  return (
    <S.Header>
      <S.Modal onClick={ () => { handleMenu() }  }>
        <S.ImgMenu src={ status ? ClosedMenu : OpenMenu }/>
      </S.Modal>
      <S.FigLogo>
        <S.ImgLogo src={ Logo } alt='onu logo'/>
      </S.FigLogo>
      <S.BoxTitle>
        <S.TitleOne>JR GRAMACHO - DUQUE DE CAXIAS</S.TitleOne>
        <S.TitleTwo>BRASIL</S.TitleTwo>
      </S.BoxTitle>
      <S.Ul>
        <S.Li><S.LINK>Sobre</S.LINK></S.Li>
        <S.Li><S.LINK>ODS</S.LINK></S.Li>
      </S.Ul>
    </S.Header>
  );
}
