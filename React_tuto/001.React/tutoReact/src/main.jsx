import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppUseEffect from './AppUseEffect.jsx'
import AppUseMomo from './AppUseMemo.jsx'
import AppUseRef from './AppUseRef.jsx'
import AppHookPerso from './AppHookPerso.jsx'
import UseReducer from './UseReducer.jsx'
import { ThemeContextProvider } from './context/theme.jsx'
import Contact from './Contact/page.jsx'
import Cv from './cv/page.jsx'
import UseCallback from './UseCallback.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
    <App />
    <AppUseEffect />
    <AppUseMomo />
    <AppUseRef />
    <AppHookPerso />
    <UseReducer />
    <Contact />
    <Cv />
    <UseCallback />
    </ThemeContextProvider>
  </React.StrictMode>,
)
