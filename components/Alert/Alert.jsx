import React from 'react'
import { styled } from 'styled-components'

export default function Alert({ children }) {
  const Alert = styled.div`
    background-color: #f5f5f5;
    color: #140d0b;
    border: 2px solid darkorange;
    padding: 10px 50px 10px 10px;
    border-radius: 6px;
    line-height: 24px;
    position: relative;
    > * {
      cursor: pointer;
      position: absolute;
      content: '';
      top: 0;
      right: 7px;
    }
  `

  const [toggle, setToggle] = React.useState(true)

  function handleClick() {
    setToggle((prevToggle) => !prevToggle)
  }

  return (
    toggle && (
      <Alert>
        ⚠️ {children}
        <span onClick={handleClick}>✕</span>
      </Alert>
    )
  )
}
