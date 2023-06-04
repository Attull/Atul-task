import React from 'react'
import './highlight.css'
import { Card } from 'antd';
import { Link } from 'react-router-dom';

export const HighlightsCard = ({ title, desc, image }) => {

  const { Meta } = Card;

  return (
    <>
      <Link to={`./highlights/${title}`}>
        <Card
          hoverable
          style={{
            width: 300,
            marginLeft: 25
          }}
          cover={<img alt="example" src={image} />}
        >
          <Meta
            title={title}
            description={desc}
            style={{ color: '#008080' }} />

        </Card>

      </Link>
    </>
  )
}
