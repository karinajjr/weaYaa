import React, { useState } from 'react';
import './PasswordInput.css'; // Assuming you have a CSS file for styles
import './media.css';

function PasswordInput() {
    const [password, setPassword] = useState('');


    return (
        <div className="input-field">
            <input
                type="password"
                className="input"
                id="password"
                required
                autoComplete="off"
                value={password}
               
                onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">
                <i className="fa-solid fa-lock"></i> 
                <div className="col">Password</div>
            </label>
        </div>
    );
}

export default PasswordInput;
