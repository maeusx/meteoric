import React from 'react'
import { Link } from 'react-router-dom'
import Button from '/components/Button/Button'
import Music from '/components/Music/Music'

export default function Home() {
  return (
    <>
      <div className="meteoric-text">
        <h1>
          Welcome to <span className="glow">Meteoric</span>.<br />
          brilliant, high-speed components for your project.
        </h1>
      </div>
      <div className="get-started-button">
        <Link to="/docs">
          <Button>Get Started →</Button>
        </Link>
      </div>
      <div className="flex-container music-component justify-start">
        <Music>
          <a href="https://youtu.be/K6BRna4_bmg?si=bGiPLIMUnSNwgih9" target="_blank">
            <img src="/bbnos.jpg" />
            <div>
              <h3>Edamame</h3>
              <p>bbno$</p>
              <p className="subtitle">Meteoric Radio</p>
              <input type="range" min="1" max="100" value="60" readOnly />
              <div>
                <sup className="subtitle">01:33</sup>
                <sup className="subtitle">02:13</sup>
              </div>
            </div>
            <img src="/waveform.gif" />
          </a>
        </Music>
      </div>
    </>
  )
}
