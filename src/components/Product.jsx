import styled from 'styled-components'
import React from 'react'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
justify-content: center;
align-items: center;
background-color: #f5fbfd;
position: relative;
`
const Circle = styled.div`
height: 200px;
width: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`
const Image = styled.img`
height: 75%;
z-index: 2;
`
const Info = styled.div`
opacity: 0;
height: 100%;
width: 100%;
position: absolute;
background: rgba(0,0,0,0.2);
top: 0;
left: 0;
z-index: 3;
display: flex;
justify-content: center;
align-items: center;

transition: all 0.5s ease;
&:hover{
  opacity: 1;
}
`
const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;

margin: 10px;
transition: all 0.5s ease;
&:hover{
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`

const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.image}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined/>
        </Icon>
        <Icon>
          <SearchOutlined/>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined/>
        </Icon>
      </Info>

    </Container>
  )
}

export default Product