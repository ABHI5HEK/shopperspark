import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import {mobile} from '../../responsive';

const Container = styled.div`
    height: 60px;
    ${mobile({height:"50px"})}
    
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content:space-between;
    ${mobile({padding:"10px 0px"})}

`;
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}

`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 24px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})}

`;
const Center = styled.div`
flex:1;
text-align: center;
display: flex;
margin-left: 5px;
align-items: center;
`;
const Logo = styled.div`
font-weight: bold;
${mobile({fontSize:"10px"})}

`;
const Right = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
align-items: center;
${mobile({flex:2,justifyContent:"center"})}

`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px",marginLeft:"5px"})}

`;

const Navbar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
            <Left>
                
                <Language>EN</Language>
                <SearchContainer>

                    <Input placeholder='Search'/>
                    <Search style={{color:"gray",fontSize:"16px"}}/>
                    
                </SearchContainer>
            </Left>
            <Center><Logo>Shoppers Park</Logo></Center>
            <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
            <Badge badgeContent={4} color="primary">
             <ShoppingCartOutlined color="action" />
                </Badge>
            </MenuItem>
            </Right>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Navbar