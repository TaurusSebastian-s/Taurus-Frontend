import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './view/App.tsx';
import './assets/styles/style.css';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
