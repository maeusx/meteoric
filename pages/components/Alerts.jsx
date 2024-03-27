import React from 'react'
import Alert from '/components/Alert/Alert'

export default function Alerts() {
  return (
    <>
      <br />
      <h3 className="text-center">Alerts</h3>
      <p className="subtitle text-center">Alerts display a brief, dismissible message to the user.</p>
      <div className="flex-container">
        <Alert>This is an alert! click on the x on the right to dismiss me.</Alert>
      </div>
      <div>
        <br />
        <p className="subtitle">Alert usage:</p>
        <pre>
          <div className="codeblock">
            <p>
              <span className="component">{`<Alert>`}</span>
              {` `}
              <span className="component">{`</Alert>`}</span>
            </p>
            <p>Alerts have no additional properties.</p>
            <p>
              Example: <span className="component">{`<Alert>`} </span>
              Your settings have not been saved!
              <span className="component"> {`</Alert>`}</span>
            </p>
          </div>
        </pre>
      </div>
    </>
  )
}
