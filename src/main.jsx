import React from 'react'
import ReactDOM from 'react-dom/client'

import '../src/global.css'

import Nav from './components/Nav/Nav.jsx'
import Header from './components/Header/Header.jsx'
import MainContent from './components/MainContent/MainContent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Header />
    <MainContent />
  </React.StrictMode>,
)



