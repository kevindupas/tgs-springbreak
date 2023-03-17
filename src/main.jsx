import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigurationProvider } from './context/ConfigurationContext';
import { LoaderProvider } from './context/LoaderContext';
import Routing from './Routing';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ConfigurationProvider>
            <LoaderProvider>
                <Routing />
            </LoaderProvider>
        </ConfigurationProvider>
    </React.StrictMode>,
);
