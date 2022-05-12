import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import NewLetter from '../components/NewLetter'
import { mobile } from '../responsive'


const Containter = styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding:"10px",flexDirection:"column"})}


`
const ImgContainer = styled.div`
flex:1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: contain;
${mobile({height:"40vh"})}

`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({padding:"10px"})}

`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
padding: 20px 0px;
`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({width:"100%"})}

`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
height: 20px;
width: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;

`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width:"100%"})}

`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

const Button = styled.button`
padding: 15px;
border: 1px solid teal;
cursor: pointer;
background: white;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}

`


const ProductPage = () => {
  return (
    <Containter>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImgContainer>
            <Image src = "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11119908/2020/1/27/a941f06b-17c1-4c67-aaf8-be7e7e47fb6f1580105133629-Roadster-Women-Dungarees-7471580105130682-1.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Blue washed mid rise denim dungarees, lightly washed, light fade, has six pockets, adjustable shoulder straps with figure 8 safety locks, a waistband with belt loops</Desc>
                <Price>Rs. 933</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"></FilterColor>
                        <FilterColor color='blue'></FilterColor>
                        <FilterColor color='red'></FilterColor>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        <FilterSizeOption>XXL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
                </AmountContainer>
                <Button>ADD TO CART </Button>

            </AddContainer>
            </InfoContainer>
            

        </Wrapper>
        <NewLetter/>
        <Footer/>
    </Containter>
  )
}

export default ProductPage