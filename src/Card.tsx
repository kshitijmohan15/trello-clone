import React from 'react'
import {CardContainer} from './styles'

type CardProps = {
    text: string;
    id: string
}

const Card = ({text, id}: CardProps) => {
  return (
    <CardContainer>{text}</CardContainer>
  )
}

export default Card