import './styles/index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './modules/app/App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { setSeedColor } from './store/color/colorSlice.ts'

store.dispatch(setSeedColor(store.getState().color.seedColor))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
