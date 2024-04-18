import React from 'react';
import from './index.css'
import PhoneInput from 'react-phone-number-input'

const Home=()=>{
    const[number,setNumber]=useState()
    return{
        <>
          <div className="p-4 box">
              <h1 className="mb-3">Login</h1>
              <form onSubmit={getOtp}>
               <form className="mb-3">
                  <PhoneInput
                  defaultCountry="PH"
                  value={}
                  onChange={}
                  placeholder="Enter Phone Number">

                  </PhoneInput>
              </form>

              </form>
              <div className="g-btn">
                  <button className="btn btn-primary">Send Otp</button>
                  <button className="btn btn-secondary">Cancel</button>
              </div>
              
          </div>
        </>  
    };
};

export default Home