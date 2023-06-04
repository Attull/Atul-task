import React from 'react'
import { Category } from './Category/Category'
import { Dashboard } from './Dashboard/Dashboard'
import { Highlights } from './Highlights/Highlights'
import { Footer } from './Footer'


export const Home = () => {
  return (
    <div>
        <Dashboard/>
        <Highlights/>
        <Category/>
        <Footer/>
    </div>
  )
}
