import React from 'react'
import { styled } from 'styled-components'

export default function Accordion({ children, title, color }) {
  const Accordion = styled.button`
    color: #f5f5f5;
    border: 1px solid ${color};
    box-shadow: 0 0 5px ${color};
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    max-width: 400px;
    margin: 10px auto;
    padding: 10px 50px;
    border-radius: 6px;
    line-height: 24px;
    transition: 0.25s ease-out;
    overflow: hidden;
    box-sizing: content-box;
    &:hover {
      box-shadow: 0 0 15px ${color};
    }
  `

  const show = {
    maxWidth: '360px',
    margin: '0 auto',
    maxHeight: '1000px',
    overflow: 'hidden',
    transition: 'max-height 0.5s ease-out',
  }
  const hide = {
    maxWidth: '360px',
    margin: '0 auto',
    maxHeight: '0',
    overflow: 'hidden',
    transition: 'max-height 0.25s ease-in',
  }

  const [toggle, setToggle] = React.useState(false)

  function handleClick() {
    setToggle((prevToggle) => !prevToggle)
  }

  return (
    <>
      <Accordion onClick={handleClick}>{title}</Accordion>
      <div style={toggle ? show : hide}>{children}</div>
    </>
  )
}
