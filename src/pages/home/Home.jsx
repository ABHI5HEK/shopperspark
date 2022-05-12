import React from 'react'
import Announcements from '../../components/Announcements'
import Categories from '../../components/Categories'
import Navbar from '../../components/Navbar/Navbar'
import NewLetter from '../../components/NewLetter'
import Products from '../../components/Products'
import Slider from '../../components/Slider'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Announcements/>
      <Slider/>
      <Categories/>
      <Products/>
      <NewLetter/>
      <Footer/>
     
    </div>
  )
}

export default Home