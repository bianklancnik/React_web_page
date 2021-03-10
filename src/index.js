import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Quote from './Quote';
import { ChakraProvider, Divider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
          <App name={"hello"} />
          <Divider />
          <Quote />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
