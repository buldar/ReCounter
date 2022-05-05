import React, {useState} from 'react';
import './App.css';
import set = Reflect.set;


function App() {

    const errors = {
        wrongOptions: 'Wrong options'
    }

    let [value, setValue] = useState(0)

    let [options, setOptions] = useState({min: -5, max: 5})

    let [menu, setMenu] = useState(true)

    const increaseValue = () => {
        setValue(value + 1)
    }

    const decreaseValue = () => {
        setValue(value - 1)
    }

    const restart = () => {
        setValue(0)
    }

    const getStart = () => {
        setMenu(!menu)
    }

    let newMin = (e: any) => {
        options.min = e.currentTarget.value
        setOptions(options)
    }

    let newMax = (e: any) => {
        options.max = e.currentTarget.value
        setOptions(options)
    }

    const saveToLocalStorage = () => {
        localStorage.setItem("currentValue", JSON.stringify(value))
    }

    const getFromLocalStorage = () => {
        let storageValue = localStorage.getItem("currentValue")
        if (storageValue) {
            let savedValue = JSON.parse(storageValue)
            setValue(savedValue)
        }
    }

    const deleteFromLocalStorage = () => {
        //code
    }



    return (
        <div className="App">
            <div className='Header'>
                <h1>THIS IS COUNTER</h1>
            </div>
            <div className='Counter'>
                <div className='Display'>
                    {!menu && <p>{value}</p>}
                    {menu && <p> Please, choose options</p>}
                </div>
                {!menu && <div className='Functions'>
                    <div className='FuncButtons'>
                        <button disabled={value <= options.min} onClick={decreaseValue}>-</button>
                        <button disabled={value >= options.max} onClick={increaseValue}>+</button>
                        <button onClick={restart}>re</button>
                    </div>
                    <div className='Set'>
                        <button onClick={getStart}>to set</button>
                    </div>
                </div>}
                {menu && <div className='Options'>
                    <div>
                        <div>
                            <button>min</button>
                            <input type='number' defaultValue={options.min} onChange={newMin}/>
                        </div>
                        <div>
                            <button>max</button>
                            <input type='number' defaultValue={options.max} onChange={newMax}/>
                        </div>
                    </div>
                    <div className='Set'>
                        <button onClick={getStart}>set</button>
                    </div>
                </div>}
                <div>
                    <button style={{width: '100px', backgroundColor: 'black', color: 'white'}}
                            onClick={saveToLocalStorage}>
                        save
                    </button>
                    <button style={{width: '100px', backgroundColor: 'black', color: 'white'}}
                            onClick={getFromLocalStorage}>
                        load
                    </button>
                </div>
                <div>
                    <button style={{width:'200px'}}>clear</button>
                </div>
            </div>
        </div>
    );
}

export default App;
