import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, formikbag) => {
      try {
        await axios
          .post("https://node-task-4-1.onrender.com//login",values)
          formikbag.resetForm()
          navigate('/hero')
      } catch (error) {
        console.log(error);
        alert("email or password incorrect");
      }
    },
  });
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user" onSubmit={formik.handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Email Address..."
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control mt-3"
                          placeholder="Password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small mt-1">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <input
                        type="submit"
                        className="btn btn-primary mt-2"
                        value={"login"}
                      />

                      <hr />
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to="/forget-passsword">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/">
                        Create an Account!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="btn btn-info">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
