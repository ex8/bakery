import React from 'react'
import { Container, MuiThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme'
import { Router } from './routes'
import TopBar from './components/navigation/TopBar'
import { Provider } from 'react-redux'
import store from './state/store'
import Navigation from './components/navigation/Navigation'
import Cart from './components/cart/Cart'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayjsUtils from '@date-io/dayjs'
import ClearCartDialog from './components/cart/ClearCartDialog'

const App: React.FC = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <BrowserRouter>
          <TopBar />
          <Navigation />
          <Cart />
          <ClearCartDialog />
          <Container style={{ marginTop: '15px' }}>
            <Router />
          </Container>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  </Provider>
)

export default App
