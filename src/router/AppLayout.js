import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
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