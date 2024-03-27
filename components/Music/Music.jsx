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

export default function Music({ children }) {
  const Music = styled.div`
    display: flex;
    height: 145px;
    width: 400px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    background: rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.25);
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 0 10px;
    overflow: hidden;
    position: relative;
    img:first-child {
      max-height: 120px;
      border-radius: 6px;
      margin-right: 20px;
    }
    div {
      flex-grow: 1;
    }
    div > * {
      width: 100%;
    }
    a {
      display: flex;
      align-items: center;
      width: 100%;
      color: white;
      text-decoration: none;
    }
    p {
      font-size: 0.9rem;
      margin-top: -14px;
      line-height: 1.6;
    }
    sup {
      font-size: 0.7rem;
      margin-left: 1%;
    }
    sup:last-child {
      margin-left: 73%;
    }
    img:last-child {
      position: absolute;
      top: 0%;
      left: 70%;
      max-height: 60px;
    }
  `

  return (
    <Tilt options={defaultOptions}>
      <Music>{children}</Music>
    </Tilt>
  )
}
