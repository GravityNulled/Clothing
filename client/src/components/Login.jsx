import React from "react";
import axios from "axios";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("", JSON.stringify(userData), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const userData = {
    email,
    password,
  };

  return (
    <section onSubmit={(e) => handleSubmit(e)} className="py-10 h-[100vh]">
      <div className="container mx-auto md:w-5/6">
        <form className="flex max-w-[360px] mx-auto flex-col gap-3">
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
          <button className="border px-2 py-1 bg-teal-300">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
