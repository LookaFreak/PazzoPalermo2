import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import "./App.css";
import DetailBlog from "./pages/Blogs/DetailBlog";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectRoute";
import Createblogs from "./pages/Blogs/Createblogs";
// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { loading } = useSelector((state) => state.alert);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/blogs/detail/:id"
            element={
              <ProtectedRoute>
                <DetailBlog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-blogs"
            element={
              <ProtectedRoute>
                <Createblogs />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </>
  );
};

export default App;
