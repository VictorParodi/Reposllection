import React from 'react';
import TitlePageComponent from './components/TitlePageComponent/TitlePageComponent';
import Home from './pages/Home/Home';

const App = () => {
    return (
        <React.Fragment>
            <TitlePageComponent />
            <Home />
        </React.Fragment>
    );
}

export default App;