import { request } from "@/store/request";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const OTPVerification = (props) => {
  const { otp, setOtp, mobileNumber } = props;
  const router = useRouter();

  const handleOTPCodeChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyOTPClick = async () => {
    try {
      const options = {
        endpoint: "/auth/otp",
        method: "POST",
      };
      const requestData = {
        otpCode: otp,
        phoneNumber: mobileNumber,
        fcmToken:
          "fstmbezzSCmqyUK5HdhD7f:APA91bEOTGMqUJtWdiHSLGX2iQRqPZrAyUn4y98J8UNXks4s8mTiI9cRL-_GTnQdWjuMQv7TWiafZP0YgXYfpQcNcCeUVnpXpCxanHjjOtL9nEphJ6tQIrvV4S4hiMybVPOFcxTq9ERb",
      };
      const responseData = await request(options, requestData);
      localStorage.setItem(
        "user",
        JSON.stringify({ user: responseData?.data })
      );
      router.push("/delete-account");
      console.log("OTP Verification Response:", responseData);
    } catch (error) {
      console.error("OTP Verification Error:", error);
    }
  };

  return (
    <div className="box">
      <div className="flex flex-column">
        <h1 className="heading-center pb-4">OTP Verification</h1>
        <p className="label">OTP Code:</p>
        <input
          className="inp-main"
          type="text"
          value={otp}
          onChange={handleOTPCodeChange}
          placeholder="Enter your OTP code"
        />
        <button
          type="button"
          className="btn-main"
          onClick={handleVerifyOTPClick}
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
