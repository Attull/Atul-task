import React from 'react'
import './dashboard.css'
import { Navbar } from './Navbar'

export const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <Navbar />
        <div className='heading'>
            Welcome to Hawaii
        </div>
    </div>
  )
}
