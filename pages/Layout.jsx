import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="content">
      <nav>
        <Link to="/">
          <img src="/logo.png" />
        </Link>
        <p>
          Meteoric <span>v1.0</span>
        </p>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/docs">Docs</Link>
            <Link to="/components/mirrors">Components</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <div className="footer">
        <p>
          Meteoric by <a href="https://www.github.com/maeusx">maeusx</a>, Copyright under MIT license.
        </p>
      </div>
    </div>
  )
}
