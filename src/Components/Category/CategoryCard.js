import React from 'react'
import { Collapse } from 'antd';
import './category.css'

export const CategoryCard = ({ name, activities }) => {
  const { Panel } = Collapse;

  return (
    <>
      <Collapse accordion>
        <Panel header={name} key={name}>
          <ol>
            {
              activities.map((activity,i) => {
                return <li key={i}>{activity.title}</li>
              })
            }
          </ol>
        </Panel>
      </Collapse>

    </>
  )
}
