import React from 'react'
import { Container, MuiThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme'
import { Router } from './routes'
import TopBar from './components/TopBar'
import { Provider } from 'react-redux'
import store from './state/store'
import Navigation from './components/Navigation'
import Cart from './components/Cart'

const App: React.FC = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <TopBar />
        <Navigation />
        <Cart />
        <Container>
          <Router />
        </Container>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
)

export default App
