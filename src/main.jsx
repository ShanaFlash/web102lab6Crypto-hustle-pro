import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import Layout from './routes/Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

<BrowserRouter>
  <Routes>
      <Route path="/" element={<Layout />}>
      <Route index={true} element={<App />} />
    </Route>
  </Routes>
</BrowserRouter>
)


