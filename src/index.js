import React from 'react';

import { createRoot } from "react-dom/client";

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

const rootElement= document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,

);