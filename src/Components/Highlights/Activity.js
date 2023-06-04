import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getServerData } from '../../Helper/helper'
import { Navbar } from '../Dashboard/Navbar'
import { Card, List } from 'antd';
import { Footer } from '../Footer'
import './highlight.css'

const gridStyle = {
  width: '25%',
  textAlign: 'center',
  fontFamily: 'IBM Plex Mono',
  cursor: "pointer"
};

export const Activity = () => {

  const { activity } = useParams()
  const [aData, setAdata] = useState({})

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
    <>
      <div className='activity-container' style={{ backgroundImage: `url('${aData?.image}')` }}>
        <Navbar />
        <div className='heading'>
          {activity}
        </div>
      </div>
      <div className='desc-container py-5 w-50'>
        <Card
          title="Description"
          bordered={false}
          style={{
            width: 300,
    
          }}
        >
          <p>{aData.description}</p>

        </Card>
      </div>
      <div className="activities-cards py-4" style={{ display: "flex", justifyContent: "center" }}>
        <Card title="Activities" style={{ width: 800 }}>
          {
            aData.activities?.map((data, i) => {
              return <Card.Grid key={i} style={gridStyle}>{data.name}</Card.Grid>
            })
          }
        </Card>
      </div>
      <Footer />
    </>
  )
}
