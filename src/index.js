import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './config/reduxStore';
import Root from './Root';
import App from './App.jsx';

ReactDOM.render(
    <Root>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Root>,
    document.querySelector('#root')
);

