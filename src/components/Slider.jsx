import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState,useEffect } from 'react'
import {sliderItems} from '../data'

import {mobile} from '../responsive';

const Slider = () => {

    const [slideIndex,setSlideIndex]  = useState(0);
    useEffect(() => {
        
      }, [slideIndex]);

    const handleClick=(direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2);
        }else if(direction ==="right"){
            setSlideIndex(slideIndex<2?slideIndex+1:0);
        }
    }

    //setInterval(()=>handleClick("right"),3000)

    const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    ${mobile({display:"none"})}
    
    position: relative;
    overflow: hidden;
    `;
    const Wrapper = styled.div`
      height  :100%;
      display: flex;
    transform: translateX( ${(props)=>props.slideIndex * -100}vw) ;
    transition: all 1.5s ease;
    `;
    const Slide = styled.div`
      display  :flex ;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background-color: #${props=>props.bg};
    `;
    const ImageContainer = styled.div`
        flex: 1;
        height: 100%;
    `;
    const Image = styled.img`
        height: 80%;
    `
    const InfoContainer = styled.div`
        flex: 1;
        padding: 50px;
    `;
    const Title = styled.h1`
        font-size: 70px;
    `;
    const Description = styled.p`
    margin: 50px 0px;
    font-weight: 500;
    letter-spacing: 3px;
    `;
    const Button = styled.button`
        padding: 10px;
        font-size: 20px;
        background: transparent;
    `;
    const Arrow =styled.div`
        height: 50px;
        width: 50px;
        background-color: #fff7f7;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${props => props.direction === "left" && "10px"};
        right: ${props => props.direction === "right" && "10px"};
        margin: auto;
        
        opacity: 0.5;
        z-index: 2;
        cursor: pointer;
    `;
  return (
    <div>
        
    <Container>
        
    <Arrow direction="left" onClick={()=>handleClick("left")}><ArrowLeftOutlined/></Arrow>
        <Wrapper slideIndex ={slideIndex}>
        {sliderItems.map((items)=>{
                        return(
                            <Slide bg = {items.bg} key={items.id}>
                        <ImageContainer>
                           
                            <Image src={items.image}/>
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{items.title}</Title>
                            <Description>{items.description}</Description>
                            <Button>Shop Now</Button>
                        </InfoContainer>
                        </Slide>
                        )
        })
        }
        </Wrapper>
        
        <Arrow direction="right"  onClick={()=>handleClick("right")}><ArrowRightOutlined/></Arrow>
    </Container>

    </div>
  )
}

export default Slider