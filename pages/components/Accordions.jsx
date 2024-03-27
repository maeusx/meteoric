import React from 'react'
import Accordion from '/components/Accordion/Accordion'

export default function Accordions() {
  return (
    <>
      <br />
      <h3 className="text-center">Accordions</h3>
      <p className="subtitle text-center">Accordions expand and collapse to reveal information.</p>
      <div className="text-center">
        <Accordion color="fuchsia" title="How can I contribute to Meteoric?">
          You can modify or create your own components by following the implicit formatting guidelines of Meteoric and
          submitting a pull request via GitHub.
        </Accordion>
      </div>
      <div>
        <br />
        <p className="subtitle">Accordion usage:</p>
        <pre>
          <div className="codeblock">
            <p>
              <span className="component">{`<Accordion>`}</span>
              {` `}
              <span className="component">{`</Accordion>`}</span>
            </p>
            <p>
              Accordion components take two parameters, "<span className="prop">title</span>" to set the button's text,
              and "<span className="prop">color</span>" to change the border.
            </p>
            <p>
              Example: <span className="component">{`<Accordion>`} </span>
              <span className="prop">title</span>="
              <span className="keyword">{`FAQ`}</span>" <span className="prop">color</span>="
              <span className="keyword">{`#E89D38`}</span>
              <span className="prop"></span>"{`> How can I join? `}
              <span className="component">{`</Accordion>`}</span>
            </p>
          </div>
        </pre>
      </div>
    </>
  )
}
