"use client";
import SendMobileNumber from "./sendMobileNumber";
import OTPVerification from "./otpVerification";
import React, { useState } from "react";

export default function Signin() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(false);
  console.log(otp);
  return (
    <div className="container pt-6">
      {otp ? (
        <OTPVerification
          otp={otp}
          setOtp={setOtp}
          mobileNumber={mobileNumber}
        />
      ) : (
        <SendMobileNumber
          mobileNumber={mobileNumber}
          setMobileNumber={setMobileNumber}
          setOtp={setOtp}
        />
      )}
    </div>
  );
}
