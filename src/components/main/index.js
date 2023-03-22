import { useState } from 'react';
import produto1 from '../img/produto1.png';
import produto2 from '../img/produto2.png';
import produto3 from '../img/produto3.png';
import produto4 from '../img/produto4.png';
import produto5 from '../img/produto5.png';
import styled  from 'styled-components';
import './style.css';

const Div = styled.div`
    display:block;
    @media (max-width: 1260px){
        display: flex;
    }
`;

const Img = styled.img`
    display: flexbox;
    flex-direction: column;
    opacity: 0.5;
    margin: 10px;
    margin-left: 200px;
    @media (max-width: 1260px){
        margin: 0 auto;
    }
    &:hover{
        opacity: 0.8;
    }
`;
const Img2 = styled.img`
    display: flex;
    margin-left:-400px;
    @media (max-width: 1260px){
        width: 230px;
        height: 230px;
        margin: 0 auto;
    }
`;
const Inline = styled.div`
    display: flexbox;
    margin-top: 5%;
    @media (max-width: 1260px){
        display: block;
    }
`;
const Block = styled.div`
    display: inline-block;
    margin-top: 10px;
    margin-left: 20px;
    @media (max-width: 1260px){
        display: block;
        margin-left: 15px;
        text-align: left;
    }
`;

const Cor = styled.a`
    display: inline-flex;
    flex-direction: row;
    width: 80px;
    height: 30px;
    padding: 5px 20px;
    text-align: center;
    font-size: 15px;
    border: 1px solid gray;
    margin: 5px 10px;
`;

const Tamanho = styled.a`
    display: inline-flex;
    flex-direction: row;
    width: 38px;
    height: 30px;
    padding: 5px 10px;
    text-align: center;
    font-size: 15px;
    border: 1px solid gray;
    margin: 5px 10px;
`;

const Value = styled.h1`
    color:  #fb5630;
`;
const Titulo = styled.h1`
    display:flex;
    max-width: 500px;
`;

const Botao = styled.button`
    display: flex;
    padding: 20px 30px;
    background-color:  #fb5630;
    color: white;
    border: none;
    cursor:pointer;
    &:hover{
        background-color:  #fb5000;
    }
`;
export default function Main(){

    const [image_prod ,set_image_prod] = useState(produto1);

    function carregar_imagem(img){
        set_image_prod(img);
    }

  
    
    return(
        <>
        <Inline>
        <Div>
        <Img src={produto1} width='13%' height='13%' onClick={() => carregar_imagem(produto1)} />
        <Img src={produto2} width='13%' height='13%' onClick={() => carregar_imagem(produto2)}  />
        <Img src={produto3} width='13%' height='13%' onClick={() => carregar_imagem(produto3)} />
        <Img src={produto4} width='13%' height='13%' onClick={() => carregar_imagem(produto4)}  />
        <Img src={produto5} width='13%' height='13%'  onClick={() => carregar_imagem(produto5)}  />
        </Div>


        <Img2 src={image_prod} width='350px' height='400px'/>

        <Block>
            <Titulo>Camiseta Desenvolvedor Front-End CSS</Titulo>
            <br/>
            <Value>R$ 56,90</Value><br/>
            <h4>171 peças disponíveis</h4><br/>
            <h5>Modelos:</h5><br/>
            <Cor className='cor'> Preto </Cor><Cor className='cor'> Azul </Cor><Cor className='cor'> Verde </Cor><Cor className='cor'> Cinza </Cor><Cor className='cor'> Rosa </Cor>
            <br/><br/><h5>Tamanhos:</h5><br/>
            <Tamanho className='cor'> P </Tamanho><Tamanho className='cor'> M </Tamanho><Tamanho className='cor'>G</Tamanho><Tamanho className='cor'>GG</Tamanho>
            <br/><br/><Botao><h3>Comprar Agora</h3></Botao>
        </Block>
        

        </Inline>
        
        </>
    )
};