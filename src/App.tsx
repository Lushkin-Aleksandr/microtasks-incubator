import React from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header title='New Header'/>
            <Body titleForBody='New Body'/>
            <Footer titleForFooter={'New Footer'}/>
        </div>
    );
}

export default App;
