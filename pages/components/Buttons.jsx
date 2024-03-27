import React from 'react'
import Button from '/components/Button/Button'

export default function Buttons() {
  return (
    <>
      <br />
      <h3 className="text-center">Buttons</h3>
      <p className="subtitle text-center">Buttons allow users to perform actions.</p>
      <div className="flex-container">
        <Button>Classic Button</Button>
        <Button style="inverted">Inverted Button</Button>
      </div>
      <div>
        <br />
        <p className="subtitle">Button usage:</p>
        <pre>
          <div className="codeblock">
            <p>
              <span className="component">{`<Button>`}</span>
              {` `}
              <span className="component">{`</Button>`}</span>
            </p>
            <p>
              Button components take the parameter "<span className="prop">style</span>" to change between light and
              dark mode.
            </p>
            <p>
              Example: <span className="component">{`<Button>`} </span>
              <span className="prop">style</span>="
              <span className="keyword">{`inverted`}</span>
              <span className="prop"></span>"{`> Click me! `}
              <span className="component">{`</Button>`}</span>
            </p>
            <p>
              Available styles: <span className="keyword">null</span>, <span className="keyword">inverted</span>.
            </p>
          </div>
        </pre>
      </div>
    </>
  )
}
