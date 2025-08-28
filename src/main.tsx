// React
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from '@/configs/AppRouter'

// Redux Store
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '@/redux/Store'

// i18next translation
import './i18next'

// Theme
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from '@/styles/Theme'
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
