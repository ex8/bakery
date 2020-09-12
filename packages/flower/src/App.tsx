import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import theme from './theme'
import { Router } from './routes'
import { TopBar } from './components'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <TopBar />
      <Router />
    </BrowserRouter>
  </MuiThemeProvider>
)

export default App
