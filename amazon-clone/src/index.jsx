import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './Component/DataProvider/DataProvider';
import { inttialState, reducer } from './Utility/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider reducer={reducer} inttialState={inttialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
