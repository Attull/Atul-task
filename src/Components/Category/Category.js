import React, { useEffect, useState } from 'react'
import { getServerData } from '../../Helper/helper'
import { Collapse, Button } from 'antd';
import { CategoryCard } from './CategoryCard'
import './category.css'
import tgAvator from '../../assets/tg_avator.png'

export const Category = () => {
  const { Panel } = Collapse;
  const [cData, setCdata] = useState([])

  useEffect(() => {
    /** async function fetch backend data */
    (async () => {
      try {
        const data = await getServerData(`https://web-dev.dev.kimo.ai/v1/categories`, (data) => data)
        setCdata(data)
      } catch (error) {
      }
    })();
  }, []);

  return (
    <div className='category-container py-4 '>
      <div className='row '>
        <div className='col-6'>
          <h3>Categories</h3>
          <div className='categories'>
            {
              cData.map((data, i) => {
                return <CategoryCard key={i} name={data.name} activities={data.activities} />
              })
            }
          </div>
        </div>
        <div className='col-6'>
          <h3 >Travel Guide</h3>
          <div className='tg-container'>
            <div className='tg-content'>
              <h5>Hadwin Malone</h5>
              <p>Guide since 2012</p>
              <Button  type="primary" ghost>Default Button</Button>
            </div>
            <div className='tg-image'>
              <img src={tgAvator} />
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
