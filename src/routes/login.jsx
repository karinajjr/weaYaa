import React, { useState } from 'react';
import './register.css';
import './media.css';
import { useRef } from 'react';
import SegmentedControl from "./SegmentedControl";
import PasswordInput from './PasswordInput'; 
import logo from './img/klu.png'
import out from './img/out.png'
import InputBox from './InputBox';
import ut from './img/Logo-WeaYaa.png'
import ou from './img/Background.png'



const LoginPage = () => {
  const [accountType, setAccountType] = useState('staff');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
 
  const [selectedValue2, setSelectedValue2] = useState("");


  const handleAccountTypeChange = (type) => {
    setAccountType(type);
  };
  

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  
  const handleSubmit = (e) => {

    e.preventDefault();
    // Simulate a login check
    if (id === 'correctId' && password === 'correctPassword') {
      setError('');
      // Proceed with login
      console.log('Logged in successfully:', { accountType, id, password });
    } else {
      setError('Please check your Password and ID');
    }
    console.log('WeaYaa ID:', id);
    console.log('Password:', password);
  };

  return (
    <div className="bac">

  
    <div className="login-page">
      <div className="login-container">
       
      <div className="logo-container">
   <img src={ut} alt="" className="ut-image" />
   <h1 className="wee">WeaYaa-Intranet</h1>
  </div>


        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            <span className="error-wrar"> Warning</span>
            <span className="error-text">{error}</span>
            <button className="error-close" onClick={() => setError('')}>✖</button>
          </div>
        )}
        <h2>Enter Your Account</h2>
        <p>Welcome Back, Please enter Your details</p>

        <SegmentedControl
        name="group-2"
        callback={(val) => setSelectedValue2(val)}
        controlRef={useRef()}
        defaultIndex={1}
        segments={[
          {
            label: "Staff Account",
            ref: useRef()
          },
          {
            label: "Master Account",
            ref: useRef()
          },
      
        ]}
      />
      <p className="selected-item"> 
      <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="weayaa-id">
            <span className="icon">
            <img src= {out}  alt="" />
              </span> 
              <InputBox/>
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="password">
            <span className="icon">
              <img src={logo} alt="" />
              </span> 

              <PasswordInput/> 
           
          </label>
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>

        
        
        {selectedValue2}</p>
     
        <p className="lorem-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
          Lorem Ipsum has been the industry's standard dummy text ever since.
        </p>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;


        
