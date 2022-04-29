import React, {useState} from 'react';
import './App.css';



function App() {

    let [value, setValue] = useState<number>(0)

    const increaseValue = () => {
        setValue(value+1)
    }

    const decreaseValue = () => {
        setValue(value-1)
    }

    const restart = () => {
        setValue(0)
    }

    let [options, setOptions] = useState({min:0, max:0})

    return (
        <div className="App">
            <div className='Header'>
                <h1>COUNTER</h1>
            </div>
            <div className='Counter'>
                <div className='Display'>
                    <p>{value}</p>
                </div>
                <div className='Functions'>
                    <button onClick={decreaseValue}>-</button>
                    <button onClick={increaseValue}>+</button>
                    <button onClick={restart}>re</button>
                </div>
            </div>
        </div>
    );
}

export default App;
