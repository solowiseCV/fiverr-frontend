import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import upload from "../../utils/uploads";
import newRequest from "../../utils/newRequest";

const Register = () => {
  const [file, setFile] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSeller = (e) => {
    setUser((prev) => ({
      ...prev,
      isSeller: e.target.checked,
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
      
    const url = await upload(file);
    try {
      await newRequest.post("/auth/register",{
        user
      });
      // navigate("/home");
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new Account</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="johndoe"
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
          />

          <label htmlFor="file">Profile Picture</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            placeholder="Nigeria"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="isSeller">Activate the seller account</label>
            <label className="switch">
              <input
                type="checkbox"
                name="isSeller"
                onChange={handleSeller}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="+234 81 4555 9189"
            onChange={handleChange}
          />
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            placeholder="A short description of yourself"
            cols={30}
            rows={10}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Register;
