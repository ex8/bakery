import React from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import theme from './theme'
import Router from './routes/Router'

const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <Router />
  </MuiThemeProvider>
)

export default App
