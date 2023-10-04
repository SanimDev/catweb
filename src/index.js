import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import centralStore from './services/store/centralStore';
import NavbarCompo from './components/NavbarCompo';
import { FooterCompo } from './components/FooterCompo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={centralStore}>
    <BrowserRouter>
    <NavbarCompo/>
    <App/>
    <FooterCompo/>
   </BrowserRouter>  
    </Provider>
    </React.StrictMode>
  
);

