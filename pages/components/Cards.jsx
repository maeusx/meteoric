import React from 'react'
import Card from '/components/Card/Card'

export default function Cards() {
  return (
    <>
      <br />
      <h3 className="text-center">Cards</h3>
      <p className="subtitle text-center">Cards are containers for text, images or custom content.</p>
      <div className="flex-container">
        <Card style="inverted">
          <img src="/ghost.png" alt="Ghost Supplements" />
        </Card>
      </div>
      <div>
        <br />
        <p className="subtitle">Card usage:</p>
        <pre>
          <div className="codeblock">
            <p>
              <span className="component">{`<Card>`}</span>
              {` `}
              <span className="component">{`</Card>`}</span>
            </p>
            <p>
              Card components take the parameter "<span className="prop">style</span>" to change between light and dark
              mode.
            </p>
            <p>
              Example: <span className="component">{`<Card>`} </span>
              <span className="prop">style</span>="
              <span className="keyword">{`inverted`}</span>
              <span className="prop"></span>"{`> <img src="..." /> `}
              <span className="component">{`</Card>`}</span>
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
