import React from 'react'
import { Collapse } from 'antd';
import './category.css'

export const CategoryCard = ({ key, name, activities }) => {
  const { Panel } = Collapse;
console.log(key)
  return (
    <>
      <Collapse accordion>
        <Panel header={name} key={key}>
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
