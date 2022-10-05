import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {theme} from './themes/theme';
import './themes/styles.css';
import {store} from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
<BrowserRouter>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
</BrowserRouter>
  </Provider>
);

