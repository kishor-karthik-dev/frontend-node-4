import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

const Forgetpassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values,formikbag) => {
      try {
        await axios.post("https://node-task-4-1.onrender.com//forget-password", values);
        alert('check your email')
        formikbag.resetForm();
      } catch (error) {
        console.log(error);
        alert("something went wrong");
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
                <div className="col-lg-6 d-none d-lg-block bg-password-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-2">
                        Forgot Your Password?
                      </h1>
                      <p className="mb-4">
                        We get it, stuff happens. Just enter your email address
                        below and we'll send you a link to reset your password!
                      </p>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          placeholder="Enter Email Address..."
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <input
                        type="submit"
                        value={"reset password"}
                        className="btn btn-primary "
                      />
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link to="/">Create an Account!</Link>
                    </div>
                    <div className="text-center">
                      <Link to="/login">Already have an account? Login!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
