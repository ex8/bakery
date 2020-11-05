import React, { FC } from 'react'
import { MuiThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme'
import { Router, ScrollToTop } from './routes'
import { Provider } from 'react-redux'
import store from './state/store'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DayjsUtils from '@date-io/dayjs'
import { TopBar } from './components'

const App: FC = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <BrowserRouter>
          <ScrollToTop />
          <Router />
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  </Provider>
)

export default App
