import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: async (values,formikbag) => {
      try {
        await axios.post("https://node-4-s2zu.onrender.com", values);
        alert("user created");
        formikbag.resetForm();
      } catch (error) {
        console.log(error);
        alert("something went wrong");
      }
    },
  });
  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image" />
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form className="user" onSubmit={formik.handleSubmit}>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstname"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="lastname"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control mt-4"
                      placeholder="Email Address"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        className="form-control  mt-3"
                        placeholder="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    value={"create user"}
                    className="btn btn-primary mt-3"
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
                  <Link className="btn" to="/login">
                    Already have an account? Login!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/login">
          <button className="btn btn-info">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
