import React from 'react'
import { styled, keyframes } from 'styled-components'

export default function Badge({ children, style }) {
  const glowAnimation = keyframes`
    50% {
      filter: hue-rotate(350deg);
    }
  `

  const Badge = styled.div`
    background-color: #f5f5f5;
    color: #140d0b;
    border: 1px solid transparent;
    cursor: pointer;
    padding: 5px 20px;
    border-radius: 20px;
    line-height: 24px;
    position: relative;
    &:hover {
      border-color: blueviolet;
      box-shadow: 0 0 20px blueviolet;
      animation: ${glowAnimation} 2s linear infinite;
    }
  `

  const InvertedBadge = styled(Badge)`
    color: #f5f5f5;
    background-color: #140d0b;
  `

  return style === 'inverted' ? <InvertedBadge>{children}</InvertedBadge> : <Badge>{children}</Badge>
}
