import React from 'react'
import { styled } from 'styled-components'

export default function Switch({ children, color }) {
  const Switch = styled.button`
    color: #f5f5f5;
    border: 1px solid ${color};
    box-shadow: 0 0 5px ${color};
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    padding: 10px 0;
    border-radius: 6px;
    width: 140px;
    transition: 0.25s ease-out;
    box-sizing: content-box;
    &:hover {
      box-shadow: 0 0 15px ${color};
    }
  `

  return (
    <>
      <Switch>{children}</Switch>
    </>
  )
}
