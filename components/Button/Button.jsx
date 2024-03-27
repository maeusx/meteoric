import React from 'react'
import { styled, keyframes } from 'styled-components'

export default function Button({ children, style }) {
  const glowAnimation = keyframes`
    50% {
      filter: hue-rotate(350deg);
    }
  `

  const Button = styled.button`
    background-color: #f5f5f5;
    color: #140d0b;
    border: 1px solid transparent;
    cursor: pointer;
    padding: 10px 50px;
    border-radius: 6px;
    line-height: 24px;
    position: relative;
    &:hover {
      border-color: blueviolet;
      box-shadow: 0 0 20px blueviolet;
      animation: ${glowAnimation} 2s linear infinite;
    }
  `

  const InvertedButton = styled(Button)`
    color: #f5f5f5;
    background-color: #140d0b;
  `

  return style === 'inverted' ? <InvertedButton>{children}</InvertedButton> : <Button>{children}</Button>
}
