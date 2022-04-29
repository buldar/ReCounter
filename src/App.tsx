import React, {useState} from 'react';
import './App.css';


function App() {

    const errors = {
        wrongOptions: 'Wrong options'
    }

    let [value, setValue] = useState(0)

    const increaseValue = () => {
        setValue(value + 1)
    }

    const decreaseValue = () => {
        setValue(value - 1)
    }

    const restart = () => {
        setValue(0)
    }

    let [options, setOptions] = useState({min: -5, max: 5})

    let [menu, setMenu] = useState(true)

    return (
        <div className="App">
            <div className='Header'>
                <h1>HEADER</h1>
            </div>
            <div className='Counter'>
                <div className='Display'>
                    <p>{value}</p>
                </div>
                {!menu && <div className='Functions'>
                    <button disabled={value === options.min} onClick={decreaseValue}>-</button>
                    <button disabled={value === options.max} onClick={increaseValue}>+</button>
                    <button onClick={restart}>re</button>
                </div>}
                {menu && <div className='Options'>
                    <div>
                        <div>
                            <button>min</button>
                            <span>123</span></div>
                        <div>
                            <button>max</button>
                            <span>123</span></div>
                    </div>
                    <div className='Set'>
                        <button>set</button>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default App;
