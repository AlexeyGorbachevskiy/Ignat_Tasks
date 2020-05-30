import React from 'react';
import logo from './logo.svg';
import './App.css';
import Not_Your_Message from "./components/Message_Body/Not_Your_Message/Not_Your_Message";
import Your_Message from "./components/Message_Body/Your_Message/Your_Message";

function App() {
    return (
        <div className={"container"}>
          <Not_Your_Message />
          <Your_Message/>
        </div>
    );
}

export default App;
