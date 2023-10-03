import React, { useState } from "react";
import { request } from "@/store/request";
const SendMobileNumber = (props) => {
  const { mobileNumber, setMobileNumber, setOtp } = props;
  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSendCodeClick = async () => {
    try {
      const options = {
        endpoint: "auth/phone-number",
        method: "POST",
      };

      const requestData = {
        phoneNumber: mobileNumber,
      };
      const responseData = await request(options, requestData);
      console.log("API Response:", responseData);
      setOtp(responseData?.devOnlyData?.otpCode);
    } catch (error) {
      console.error("API Error:", error);
    }
  };
  return (
    <div className="box">
      <div className="flex flex-column">
        <h1 className="heading-center pb-4">Login</h1>
        <p className="label" >Mobile Number:</p>
        <input
          className="inp-main"
          type="tel"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
          placeholder="Enter your mobile number"
        />
        <button
          type="button"
          className="btn-main"
          onClick={handleSendCodeClick}
        >
          Send Code
        </button>
      </div>
    </div>
  );
};

export default SendMobileNumber;
