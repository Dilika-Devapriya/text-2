import React from 'react'
import Hero from '../Componets/Hero'
import About from '../Componets/About'
import TopProduct from '../Componets/TopProduct'
import Blog from '../Componets/Blog'




const Home = () => {
  return (
    <><Hero /><div>
      <About />
      <TopProduct/>
      <Blog/>
    </div></>
  )
}

export default Home