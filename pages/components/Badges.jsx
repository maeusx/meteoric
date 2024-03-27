import React from 'react'
import Badge from '/components/Badge/Badge'

export default function Badges() {
  return (
    <>
      <br />
      <h3 className="text-center">Badges</h3>
      <p className="subtitle text-center">
        Badges are used as status indicators for UI elements or as an avatar to represent a user.
      </p>
      <div className="flex-container">
        <Badge>Classic</Badge>
        <Badge style="inverted">Inverted</Badge>
      </div>
      <div>
        <br />
        <p className="subtitle">Badge usage:</p>
        <pre>
          <div className="codeblock">
            <p>
              <span className="component">{`<Badge>`}</span>
              {` `}
              <span className="component">{`</Badge>`}</span>
            </p>
            <p>
              Badge components take the parameter "<span className="prop">style</span>" to change between light and dark
              mode.
            </p>
            <p>
              Example: <span className="component">{`<Badge>`} </span>
              <span className="prop">style</span>="
              <span className="keyword">{`inverted`}</span>
              <span className="prop"></span>"{`> v1.0 `}
              <span className="component">{`</Badge>`}</span>
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
