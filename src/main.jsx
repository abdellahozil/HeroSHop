// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopContextProvider from './Context/ShopContext.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  
    <ShopContextProvider>
      <BrowserRouter basename='/heroshop'>
         <App />
      </BrowserRouter>
    </ShopContextProvider>
)
