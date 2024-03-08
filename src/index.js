import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartProvider from './context/CartContext';
import SidebarProvider from './context/SidebarContext';
import FavProvider from './context/FavContext';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );

root.render(
  
  <SidebarProvider>
    <FavProvider>

<CartProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CartProvider>
    </FavProvider>
  </SidebarProvider>
  
);
