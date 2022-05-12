import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'



const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`
const Desc = styled.div`
font-size: 24px;
font-weight: 600;
margin-bottom: 20px;
${mobile({textAlign:"center"})}


`
const InputContainer = styled.div`
width: 50%;
height: 40px;
display: flex;
background-color: white;
border: 1px solid lightgray;
display: flex;
justify-content: space-between;
${mobile({width:"80%"})}



`
const Input = styled.input`
flex: 8;
border: none;
padding-left: 20px;
`
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
`

const NewLetter = () => {
  return (
   <Container>
       <Title>Newsletter</Title>
           <Desc>Get timely updates from your favourite products.</Desc>
           <InputContainer>
           <Input placeholder='Your Email'/>
           <Button>
               <Send/>
           </Button>
           </InputContainer>
       
   </Container>
  )
}

export default NewLetter