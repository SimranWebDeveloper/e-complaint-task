import React from 'react'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  let mode=false
  return (
    <div  >
      <Header/>
      <main >
        <Outlet/>
      </main>      
      <Footer/>
    </div>
  )
}