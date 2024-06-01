import React, { useState } from "react";
import Navabar from "../../components/Navabar";
import Footer from "../../components/Footer";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [avatar, Setavatar] = useState("");
  const [password, Setpassword] = useState("");
  const [Cpassword, Setcpassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        { name, email, avatar, password, Cpassword }
      );
      if (res.data.success) {
        message.success("Regiter Successfully");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      message.error("Something went wrong");
    }
  };

  return (
    <div style={{ marginTop: "5rem" }}>
      <Navabar />
      <div className="login template d-flex justify-content-center align-items-center  100-vh">
        <div
          className=" p-5 rounded d-flex align-items-center"
          style={{ height: "100vh" }}
        >
          <form className="login-form" onSubmit={handleRegister}>
            <h3 className="mb-4">Register</h3>
            <div className="mb-4">
              <input
                type="name"
                placeholder="Full Name"
                className="form-control"
                value={name}
                onChange={(e) => Setname(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => Setemail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                value={password}
                onChange={(e) => Setpassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control"
                value={Cpassword}
                onChange={(e) => Setcpassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Inset image link"
                className="form-control"
                value={avatar}
                onChange={(e) => Setavatar(e.target.value)}
              />
            </div>
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p className="text-right">
              Already have an Account ? <a href="/login">login</a>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
