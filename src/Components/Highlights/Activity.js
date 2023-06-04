import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getServerData } from '../../Helper/helper'
import { Navbar } from '../Dashboard/Navbar'

export const Activity = () => {

  const { activity } = useParams()
  console.log(activity)
  const [aData, setAdata] = useState([])

  useEffect(() => {
    /** async function fetch backend data */
    (async () => {
      try {
        const data = await getServerData(`https://web-dev.dev.kimo.ai/v1/activities/${activity}`, (data) => data)
        setAdata(data)
      } catch (error) {
      }
    })();
  }, []);

  return (
    <div className='dashboard-container'>
      <Navbar />
      <div className='heading'>
         {activity}
      </div>
    </div>
  )
}
