import React from 'react'
import { styled } from 'styled-components'
import { Tilt } from 'react-tilt'

const defaultOptions = {
  reverse: true,
  max: 35,
  perspective: 1000,
  scale: 1,
  speed: 1000,
  transition: false,
  axis: null,
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
}

export default function Glass({ children, color }) {
  const Glass = styled.div`
    display: grid;
    place-items: center;
    position: relative;
    height: 350px;
    width: 250px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    background: rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.25);
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    color: ${color};
    padding: 1rem;
    overflow: hidden;
    img {
      max-height: 160px;
    }
    h3 {
      text-decoration: underline;
    }
    p {
      font-size: 0.9rem;
      margin-top: -10px;
    }
    a {
      color: ${color};
      text-decoration: underline;
    }
  `

  return (
    <Tilt options={defaultOptions}>
      <Glass>{children}</Glass>
    </Tilt>
  )
}
