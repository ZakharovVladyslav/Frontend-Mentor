import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx'

import "./App.scss";

function Main() {
    return <App />
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Main />);