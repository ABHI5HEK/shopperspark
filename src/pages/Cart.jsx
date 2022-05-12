import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import { mobile } from '../responsive'

const Container = styled.div`

    
`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    text-align: center;
    font-weight: 300;
`
const Top = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
`
const TopButton = styled.button`
    
    padding: 10px;
    font-weight:600;
    cursor: pointer;
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props)=>props.type === "filled"? "black" : "transparent"};
    color: ${(props)=>props.type === "filled"&&"white"};
`
const TopTexts =styled.div`
${mobile({display:"none"})}

`
const TopText =styled.span`
text-decoration: underline;
cursor:pointer;
margin: 0px 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}

`
const Info = styled.div`
flex: 3;
`

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}

`
const ProductDetail = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${(props)=>props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ProductAmountContainer =styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`
const ProductAmount = styled.span`
font-size: 24px;
margin: 5px;
`
const ProductPrice = styled.span`
font-weight: 200;
font-size: 30px;
${mobile({marginBottom:"20px"})}


`
const Hr = styled.div`
border: none;
background-color: #eee;
height: 1px;
`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`
const SummaryTitle =styled.h1`
font-weight: 200;
`
const SummaryItem =styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${(props)=>props.type==="total"&&"500"};
font-size: ${(props)=>props.type==="total"&&"24px"};
`
const SummaryItemText =styled.span``
const SummaryItemPrice =styled.span``
const SummaryButton =styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`


const Cart = () => {
  return(
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>

                <TopButton >CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17297438/2022/2/25/94b3fad1-c619-4abb-a726-a27ad443606d1645791908248CampusMenBlackSportsShoes1.jpg"/>
                            <Details>
                                <ProductName><b>Product: </b> Puma Shoes</ProductName>
                                <ProductId><b>ID: </b>4865449495649</ProductId>
                                <ProductColor color="red"/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>Rs 2000</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17297438/2022/2/25/94b3fad1-c619-4abb-a726-a27ad443606d1645791908248CampusMenBlackSportsShoes1.jpg"/>
                            <Details>
                                <ProductName><b>Product: </b> Puma Shoes</ProductName>
                                <ProductId><b>ID: </b>4865449495649</ProductId>
                                <ProductColor color="red"/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>Rs 2000</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>

                <Summary>
                    
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>SUBTOTAL</SummaryItemText>
                        <SummaryItemPrice>Rs 4000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText> Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>Rs 400</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>- Rs 400</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >TOTAL</SummaryItemText>
                        <SummaryItemPrice>Rs 4000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CheckOut Now</SummaryButton>
                </Summary>

            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}



export default Cart