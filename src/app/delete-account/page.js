"use client";

import React, { useEffect, useState } from "react";
import { request } from "@/store/request";
import { useRouter } from "next/navigation";
const DeleteAccount = () => {
  const [message, setMessage] = useState("");
  const [user, setIsUser] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("user")) || "";
    if (getUser?.user) {
      setIsUser(getUser);
      console.log(getUser?.user);
      return;
    }
  }, [user]);

  const handleDeleteAccount = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${user?.user?.token}`,
      };
      const options = {
        endpoint: `/users/${user?.user?.user?.id}`,
        method: "DELETE",
        headers: headers,
      };
      const response = await request(options);
      console.log(response);
      setIsDeleted("Your account has been deleted.");
      localStorage.removeItem("user");
    } catch (error) {
      setMessage("An error occurred while deleting your account.");
    }
  };

  return (
    <div className="container pt-6">
      <div className="box ">
        <div className="flex flex-column">
          {user ? (
            <>
              {isDeleted ? (
                <h3 className="heading-center"> {isDeleted}</h3>
              ) : (
                <>
                  <h3> Are you sure you want to delete your account?</h3>
                  {message && (
                    <p className="label" style={{ color: "red" }}>
                      {message}
                    </p>
                  )}
                  <button
                    className="btn-main"
                    type="button"
                    onClick={handleDeleteAccount}
                  >
                    Delete Your Account
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              <h3 className="heading-center"> User Not Found!</h3>
              <button onClick={() => router.push("/signin")}> Signin </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
