import React from 'react';
import logo from './logo.svg';
import './App.css';

export let state = {
    currentValue: 0,

}

function App() {
    return (
        <div className="App">
            <div className='Header'>
                <h1>COUNTER</h1>
            </div>
            <div className='Counter'>
                <div className='Display'>
                    <p>{state.currentValue}</p>
                </div>
                <div className='Functions'>
                    <button>-</button>
                    <button>+</button>
                    <button>re</button>
                </div>
            </div>
        </div>
    );
}

export default App;
