import styled from '@emotion/styled'
import React from 'react'

const Announcements = () => {

    const Container = styled.div`
        height: 30px;
        background-color: teal;
        color:white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
    `;

  return (
    <div>
        <Container>Super Deal! Free Delivery on offers above ₹ 500</Container>
    </div>
  )
}

export default Announcements