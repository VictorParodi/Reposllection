import React from 'react';
import { Provider } from 'react-redux';
import { store } from './config/reduxStore';

const Root = (props) => {
    return (
        <Provider store={store}>
            { props.children }
        </Provider>
    );
}

export default Root;