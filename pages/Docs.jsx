import React from 'react'

export default function Docs() {
  return (
    <>
      <div className="outlet">
        <h1>
          <span className="highlight">Introduction</span>
        </h1>
        <h3>What is Meteoric?</h3>
        <p className="subtitle">
          Meteoric is an open-source, plug-and-play library of lightweight, pre-styled React components. You are free to
          modify, use and distribute the components in this library for any purpose. You can also contribute to Meteoric
          following the implicit formatting of the components via GitHub.
        </p>
        <h3>Does Meteoric have any dependencies?</h3>
        <p className="subtitle">
          Meteoric has the following dependencies: <i>"react-tilt"</i>, <i>"styled-components"</i>.
        </p>
        <hr />
        <h1>
          <span className="highlight">Installation</span>
        </h1>
        <p>
          1. Download or clone the project from the <a href="https://github.com/maeusx/meteoric">GitHub repository</a>.
        </p>
        <p>2. Open the project folder with your preferred code editor and run the following commands:</p>
        <pre>
          <div className="codeblock">
            <p>
              <span className="keyword">bun</span> install
            </p>
            <p>
              <span className="keyword">bun</span> start
            </p>
          </div>
        </pre>
        <p className="subtitle">
          Note: I use <a href="https://bun.sh">bun</a> as my runtime and package manager; if you use npm or yarn just
          replace the commands accordingly.
        </p>
        <p>3. You should now see a copy of this website on your local server.</p>
        <p className="subtitle">
          To add a component to your project just copy the <i>components</i> folder to your local repository, install
          the dependencies and import the desired component wherever you need it; no external CSS or additional setup is
          needed.
          <br />
          Example: <i>import Button from "./components/Button/Button"</i>
        </p>
      </div>
    </>
  )
}
