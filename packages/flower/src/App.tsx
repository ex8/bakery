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
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayjsUtils from '@date-io/dayjs'

const App: React.FC = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <BrowserRouter>
          <TopBar />
          <Navigation />
          <Cart />
          <Container style={{ marginTop: '15px' }}>
            <Router />
          </Container>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  </Provider>
)

export default App
