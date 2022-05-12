import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container= styled.div`
    height: 60vh;
    display: flex;
    justify-content: space-between;
${mobile({flexDirection:"column"})}


`
const Left = styled.div`
flex:1;
padding: 20px;
`
const Logo = styled.h1`

`

const Desc = styled.p`
margin: 20px 0px;
`

const SocialContainer = styled.div`
display: flex;
justify-content: center;

`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius:50%;
color: white;
background-color: #${props=>props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
`

const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display:"none"})}

`
const Title=styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
flex:1;
padding: 20px;
${mobile({backgroundColor:"#f7f7f7"})}

`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Shoppers Park</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum soluta ut aliquid quae laudantium pariatur quisquam, adipisci suscipit.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F"> 
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>

            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>    
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>    
                    
                   


            </List>
        </Center>
        <Right>

            <Title>Contact</Title>
            <ContactItem> <Room style={{"marginRight":"10px"}}/>  Mountain View, California, United States </ContactItem>
            <ContactItem> <Phone style={{"marginRight":"10px"}}/>  +1-800-419-0157</ContactItem>
            <ContactItem> <MailOutline style={{"marginRight":"10px"}}/>  support@shopperspark.com</ContactItem>
        </Right>

    </Container>
  )
}

export default Footer