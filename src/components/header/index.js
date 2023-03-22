import React from 'react';
import foto from '../img/logo.png';
import styled from 'styled-components';
import fonte from '../img/fonte.ttf';

const Nav = styled.div`

    display: flexbox;
    width: 100%;
    height: 120px;
    align-items:center;
    background-color: #fb5630;
`;

const Img = styled.img`
    width: 120px;
    height: 120px;
    margin-left: 20px;
    display: flexbox;
`;

const Label = styled.h1`
    position: relative;
    font-size: 45px;
    color: white;
    display: flex;
    text-align: left;
    left: 0px;
`;

const Selecoes = styled.ul`
    width: 100%;
    height: 100%;
    background-color: #d7d7d7;
    display: flexbox;
    flex-direction: row;
    justify-content: space-between;
    aling-items: center;
    text-aling: center;

    padding-left: 10%;
    padding-right: 10%;
    @media(max-width: 1260px){
      display:block;
      padding-left: 0;
      padding-right: 0;
      display:block;
   
    }
`;

const Li = styled.li`
    display: flexbox
    height: 40px;
    text-aling: center;
    list-style: none;
`;

const A = styled.a`
    text-decoration: none;
    color: #fb5630;
    display: flex;
    padding 20px;
    &:hover{
      background-color: #fb5630;
      color: #d7d7d7;
    }
`;


function Header() {
  return (
     <>
     <Nav>
      <Img src={foto}/>
      <Label> Xhopii</Label>
     </Nav>
     <Selecoes>
        <Li><A href='#'>Home</A></Li>
        <Li><A href='#'>Cadastro Cliente</A></Li>
        <Li><A href='#'>Cadastro Funcionários</A></Li>
        <Li><A href='#'>Cadastro Produto</A></Li>
        <Li><A href='#'>Ver Clientes</A></Li>
        <Li><A href='#'>Ver Funcionários</A></Li>
        <Li><A href='#'>Ver Produtos</A></Li>
     </Selecoes>
     </>
  );
}

export default Header;
