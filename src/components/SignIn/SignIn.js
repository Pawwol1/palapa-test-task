import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import lockClosed from '../../assets/Lock closed.svg';
import './SignIn.css';

function SignIn() {
    const [number, setNumber] = useState("");
    const [code, setCode] = useState("");
    const [numberCorrect, setNumberCorrect] = useState(false);
    const [numberError, setNumberError] = useState(false);
    const [codeError, setCodeError] = useState(false);

    useEffect(() => {
        if (number !== "") {
            setNumberError(number.split("").shift() === " " || number.includes("  ") || number.length !== 12);
        }
    }, [number])

    useEffect(() => {
        if (code !== "") {
            setCodeError(code.length !== 6);
        }
    }, [code])

    const handleInputChange = (e) => {
        setNumber(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setNumberCorrect(true);
    }

    const defaultNumber = "+48123123123";
    const OTPCode = "OTP Code";

    return (
        <div className='signIn'>
            <img className='signIn__logo' src={logo} alt='logo'/>
            <h1 className='signIn__title'>Sign in to your account</h1>
            <form className='signIn__form' onSubmit={handleSubmit} autoComplete='off'>
                { numberCorrect
                ? <><label className='signIn__form-label'>
                        <input 
                        type='number' 
                        id='phoneNumber' 
                        value={number} 
                        disabled="disabled"
                        >  
                        </input>
                    </label>
                    <label className='signIn__form-label'>
                        <input 
                        type='number' 
                        id={OTPCode} 
                        value={code}  
                        placeholder={OTPCode}
                        onChange={(e) => setCode(e.target.value)}
                        >
                        </input>
                    </label>
                </>
                :  <label className='signIn__form-label'>
                        <input 
                        type='number' 
                        id='phoneNumber' 
                        value={number} 
                        onChange={handleInputChange} 
                        placeholder={defaultNumber}>  
                        </input>
                    </label>
                    }
                   
                <button className='signIn__form-button' type='submit' disabled={numberCorrect? codeError : numberError} >
                    <img src={lockClosed} alt=''/>
                    { numberCorrect? "Verify" : "Sign In"}
                </button>
            </form>
        </div>
    );
}

export default SignIn;