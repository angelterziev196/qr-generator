// import logo from './logo.svg';
import './App.scss';
import QrCode from './generator/Generator';
import React from 'react';
function App() {
    const [inputState, setInputState] = React.useState('Enter a valid URL');

    function data(e) {
        e.preventDefault();
        const inputEl = document.getElementById('input');
        setInputState(inputEl.value);
        inputEl.value = '';
    }

    return (
        <div className='app'>
            <div className='app-wrapper'>
                <h1>QR code Generator</h1>
                <form className='app-wrapper-form'>
                    <input
                        id='input'
                        type='text'
                        placeholder='Enter a valid URL'
                    />
                    <button onClick={(e) => data(e)} className='genButton'>
                        Generate
                    </button>
                </form>
                <QrCode text={inputState} />
            </div>
        </div>
    );
}

export default App;
