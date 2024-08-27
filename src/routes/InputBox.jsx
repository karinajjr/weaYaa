import React, { useState } from 'react';
import './InputBox.css'; // Assuming you have a CSS file for styles
import './media.css';
// import logo from './img/klu.png';
// import out from './img/out.png';

function InputBox() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="input-box">
            {/* WeaYaa ID Field */}
            <div className="input-field">
                <input
                    type="text"
                    className="input"
                    id="weayaa-id"
                    required
                    autoComplete="off"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <label htmlFor="weayaaa-id">
                    <i className="fa-soli"></i> 
                     <div className="col">WeaYaa ID</div>
                    
                </label>
            </div>
        </div>
        
    );
}

export default InputBox;
