import React from 'react';
import logo from './logo.svg';
import './App.css';
import NotYourMessage from './components/MessageBody/NotYourMessage/NotYourMessage';
import YourMessage from './components/MessageBody/YourMessage/YourMessage';


function App() {
    return (
        <div className={'container'}>
            <NotYourMessage/>
            <YourMessage/>
        </div>
    );
}

export default App;
