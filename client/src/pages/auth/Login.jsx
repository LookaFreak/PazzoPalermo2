import React, { useEffect, useState } from "react";
import Navabar from "../../components/Navabar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/actions/alertSlice";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { setLoggedIn, setUser } from "../../redux/actions/dataSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");

  const handlLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        const data = [res.data.user.name, res.data.user.email];
        dispatch(
          setLoggedIn({
            isLoggedIn: true,
            token: res.data.token,
          })
        );

        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      }
    } catch (error) {
      // alert(error);
      message.error("Something went wrong");
    }
  };


  // form handler
  return (
    <div style={{ marginTop: "5rem" }}>
      <Navabar />
      <div className="login template d-flex justify-content-center align-items-center 100-w 100-vh">
        <div
          className="40-w p-5 rounded d-flex align-items-center"
          style={{ height: "100vh" }}
        >
          <form className="login-form" onSubmit={handlLogin}>
            <h3 className="mb-4">Login</h3>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter email"
                className="form-control"
                value={email}
                onChange={(e) => Setemail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                value={password}
                onChange={(e) => Setpassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="text-right">
              Don't have an Account ? <a href="/register">Register</a>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
