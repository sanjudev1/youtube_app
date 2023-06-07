import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider>
  <App />
  </ThemeProvider>
  </StrictMode>
)
