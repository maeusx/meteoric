import React from 'react'
import { styled, keyframes } from 'styled-components'

export default function Card({ children, style }) {
  const glowAnimation = keyframes`
    50% {
      filter: hue-rotate(350deg);
    }
  `

  const Card = styled.div`
    display: grid;
    place-items: center;
    position: relative;
    height: 350px;
    width: 250px;
    background: rgba(245, 245, 245, 0.9);
    border-radius: 10px;
    border: 1px solid transparent;
    color: #140d0b;
    padding: 1rem;
    overflow: hidden;
    img {
      max-height: 180px;
      filter: grayscale(1);
    }
    p {
      color: #909090;
      font-size: 0.9rem;
      margin-top: -10px;
    }
    a {
      color: black;
    }
    &:hover {
      border-color: blueviolet;
      box-shadow: 0 0 20px blueviolet;
      animation: ${glowAnimation} 2s linear infinite;
    }
  `

  const InvertedCard = styled(Card)`
    color: #f5f5f5;
    background-color: #140d0b;
    &a {
      color: white;
    }
  `

  return style === 'inverted' ? <InvertedCard>{children}</InvertedCard> : <Card>{children}</Card>
}
