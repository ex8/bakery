import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router, ScrollToTop } from './routes'
import TopBar from './components/navigation/TopBar'

const App: FC = () => (
  <BrowserRouter>
    <TopBar />
    <ScrollToTop />
    <Router />
  </BrowserRouter>
)

export default App
