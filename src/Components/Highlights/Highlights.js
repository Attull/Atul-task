import React, {useEffect, useState}from 'react'
import { getServerData } from '../../Helper/helper';
import { HighlightsCard } from './HighlightsCard';
import './highlight.css'

export const Highlights = () => {

  const [hData , setHData] = useState([])

    useEffect(() => {
        /** async function fetch backend data */
        (async () => {
            try {
                const data = await getServerData(`https://web-dev.dev.kimo.ai/v1/highlights`, (data) => data)
                setHData(data)
            
            } catch (error) {
            }
        })();
    }, []);

  return (
    <div className='py-3'>
      <h3>Highlights</h3>
      <div className='h-card-container'>
          {
            hData.map((data, ind) =>{
              return <HighlightsCard key={ind} title={data.title} desc={data.description} image={data.image}/>
            })
          }
      </div>
    </div>
  )
}
