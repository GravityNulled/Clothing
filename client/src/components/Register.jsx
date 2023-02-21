import React from "react";
import axios from "axios";
import { useState } from "react";
import { publicRequest } from "../axiosConfig";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      return console.log("Email and Pass should be same");
    }
    const { data } = await publicRequest.post(
      "/users/register",
      JSON.stringify(userData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  const userData = {
    email,
    password,
    username: firstName + lastName,
  };
  return (
    <section onSubmit={(e) => handleSubmit(e)} className="py-10 h-[100vh]">
      <div className="container mx-auto md:w-5/6">
        <form className="flex max-w-[360px] mx-auto flex-col gap-3">
          <div className="block md:flex gap-2">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              className="border w-full mb-[0.7rem] border-black h-[50px] px-2"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              className="border w-full border-black h-[50px] px-2"
            />
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="border border-black h-[50px] px-2"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border border-black h-[50px] px-2"
          />
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            className="border border-black h-[50px] px-2"
          />
          <button className="border px-2 py-1 bg-teal-300">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
