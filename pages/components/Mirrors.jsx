import React from 'react'
import Glass from '/components/Glass/Glass'

export default function Mirrors() {
  return (
    <>
      <br />
      <div className="glass-bg">
        <br />
        <h3 className="text-center">Stained Glass</h3>
        <p className="subtitle text-center">The only limiting factor with glass is your imagination.</p>
        <div className="flex-container">
          <Glass color="#FFFFFF">
            <img src="/nike.png" alt="Custom Nike Air Force 1" />
            <h3>Custom Comic AF1s</h3>
            <p>
              A timeless classic, reimagined. These custom Air Force 1s will make a statement about your personal style.
              <br />
              <br />
              <a href="#">$299,00</a>
            </p>
          </Glass>
        </div>
      </div>
      <div>
        <br />
        <p className="subtitle">Glass usage:</p>
        <pre>
          <div className="codeblock">
            <p>
              <span className="component">{`<Glass>`}</span>
              {` `}
              <span className="component">{`</Glass>`}</span>
            </p>
            <p>
              Stained Glass components take the parameter "<span className="prop">color</span>" to change font color.
            </p>
            <p>
              Example: <span className="component">{`<Glass>`} </span>
              <span className="prop">color</span>="
              <span className="keyword">{`#140D0B`}</span>
              <span className="prop"></span>"{`> <img src="..." /> `}
              <span className="component">{`</Glass>`}</span>
            </p>
            <p>Always use Stained Glass inside a flex div to avoid issues with react-tilt.</p>
            <p>There are various options for the tilt effect inside the component files.</p>
          </div>
        </pre>
      </div>
    </>
  )
}
