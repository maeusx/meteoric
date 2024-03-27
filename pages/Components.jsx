import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Switch from '/components/Switch/Switch'

export default function Components() {
  return (
    <>
      <div className="outlet">
        <br />
        <h1>Components</h1>
        <p className="subtitle">Click on each component to see it in action and how to style it.</p>
        <br />
        <div className="flex-container switches">
          <Link to="badges">
            <Switch color="red">Badges</Switch>
          </Link>
          <Link to="buttons">
            <Switch color="lime">Buttons</Switch>
          </Link>
          <Link to="cards">
            <Switch color="cyan">Cards</Switch>
          </Link>
          <Link to="alerts">
            <Switch color="deeppink">Alerts</Switch>
          </Link>
          <Link to="mirrors">
            <Switch color="yellow">Stained Glass</Switch>
          </Link>
          <Link to="accordions">
            <Switch color="white">Accordions</Switch>
          </Link>
        </div>
        <div className="flex-container links">
          <Link to="badges">Badges</Link>
          <Link to="buttons">Buttons</Link>
          <Link to="cards">Cards</Link>
          <Link to="alerts">Alerts</Link>
          <Link to="mirrors">Stained Glass</Link>
          <Link to="accordions">Accordions</Link>
        </div>
        <Outlet />
      </div>
    </>
  )
}
