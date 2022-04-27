import React from 'react'
import { CardWrapper } from './OurWorkStyle'

export default function Card({ card }) {
  return (
    <CardWrapper>
        <img src={card.img} alt={card.img} />
        <h3>{card.text1}</h3>
        <hr/>
        <p>{card.text2}</p>
    </CardWrapper>
  )
}
