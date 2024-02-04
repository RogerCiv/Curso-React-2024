import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ComponentProvider from './components/useContext/context/ComponentProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <ComponentProvider>
    <App />
    </ComponentProvider>,

)
