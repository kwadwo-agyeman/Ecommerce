import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header';
import Banner1 from './components/Banner1';
import Banner2 from './components/Banner2';
function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <br/><br/>
      <Banner1/>
    </div>
  )
}

export default Home
