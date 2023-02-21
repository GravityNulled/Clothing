import React from "react";
import { publicRequest } from "../axiosConfig";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { loginStart, isError, loginuser } from "../Redux/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
 
  const [redirect, setRedirect] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await publicRequest.post(
        "users/login",
        JSON.stringify(userData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(loginuser(data));
      setRedirect(true);
    } catch (error) {
      setError(true);
    }
  };
  const userData = {
    email,
    password,
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  console.log(redirect);
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
          <p>{error && "Error occurred"}</p>
          <button
            onClick={(e) => dispatch(loginStart(e))}
            className="border px-2 py-1 bg-teal-300"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
