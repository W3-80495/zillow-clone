import React from 'react'
import Banner from '../Components/Banner'
import Recommended from '../Components/Recommended'
import Category from '../Components/Category'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Recommended />
      <Category />
      
    </div>
  )
}

export default Home