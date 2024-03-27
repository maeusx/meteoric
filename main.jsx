import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '/pages/Layout'
import Home from '/pages/Home'
import Docs from '/pages/Docs'
import Components from '/pages/Components'
import Badges from '/pages/components/Badges'
import Buttons from '/pages/components/Buttons'
import Cards from '/pages/components/Cards'
import Alerts from '/pages/components/Alerts'
import Mirrors from '/pages/components/Mirrors'
import Accordions from '/pages/components/Accordions'
import NotFound from '/pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="docs" element={<Docs />} />
          <Route path="components" element={<Components />}>
            <Route path="badges" element={<Badges />} />
            <Route path="buttons" element={<Buttons />} />
            <Route path="cards" element={<Cards />} />
            <Route path="alerts" element={<Alerts />} />
            <Route path="mirrors" element={<Mirrors />} />
            <Route path="accordions" element={<Accordions />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
