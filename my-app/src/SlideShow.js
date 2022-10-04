import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "",
  lastname:"",
  email:"",
  countryCode:"", 

};
const validationSchema = yup.object().shape({
    firstName: yup.string()
      .min(2, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Name is required'),
  });

function App() {
    
  const { values, handleBlur, handleChange, handleSubmit,resetForm, errors,validationSchema, touched} = useFormik({
    
    initialValues: initialValues,
    
    onSubmit: () => {
        console.log(values)
        resetForm()       
    },
    
  });

  return (
    <div>
      <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light py-3">
          <div class="container">
            <a href="#" class="navbar-brand">
              <img
                src="https://bootstrapious.com/i/snippets/sn-registeration/logo.svg"
                alt="logo"
                width="150"
              />
            </a>
          </div>
        </nav>
      </header>

      <div class="container">
        <div class="row py-5 mt-4 align-items-center">
          <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img
              src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
              alt=""
              class="img-fluid mb-3 d-none d-md-block"
            />
            <h1>Create an Account</h1>
            <p class="font-italic text-muted mb-0">
              Create a minimal registeration page using Bootstrap 4 HTML form
              elements.
            </p>
            <p class="font-italic text-muted">
              Snippet By{" "}
              <a href="https://bootstrapious.com" class="text-muted">
                <u>Bootstrapious</u>
              </a>
            </p>
          </div>

          <div class="col-md-7 col-lg-6 ml-auto">
            <form action="#" onSubmit={handleSubmit}>
              <div class="row">
                <div class="input-group col-lg-6 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="firstName"
                    type="text"
                    name="name"
                    placeholder="First Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class="form-control bg-white border-left-0 border-md"
                  />
                </div>
                <div class="input-group col-lg-6 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="lastName"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class="form-control bg-white border-left-0 border-md"
                  />
                </div>
                <div class="input-group col-lg-12 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fa fa-envelope text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email Address"
                    class="form-control bg-white border-left-0 border-md"
                  />
                </div>
                <div class="input-group col-lg-12 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fa fa-phone-square text-muted"></i>
                    </span>
                  </div>
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={values.countryCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted"
                    valuw
                  >
                    <option value="+12">+12</option>
                    <option value="+10">+10</option>
                    <option value="+15">+15</option>
                    <option value="+18">+18</option>
                  </select>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    class="form-control bg-white border-md border-left-0 pl-3"
                  />
                </div>
                .
                <div class="input-group col-lg-12 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fa fa-black-tie text-muted"></i>
                    </span>
                  </div>
                  <select
                    id="job"
                    name="jobtitle"                    
                    class="form-control custom-select bg-white border-left-0 border-md"
                  >
                    <option value="">Choose your job</option>
                    <option value="">Designer</option>
                    <option value="">Developer</option>
                    <option value="">Manager</option>
                    <option value="">Accountant</option>
                  </select>
                </div>
                <div class="input-group col-lg-6 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fa fa-lock text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    class="form-control bg-white border-left-0 border-md"
                  />
                </div>
                <div class="input-group col-lg-6 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fa fa-lock text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="passwordConfirmation"
                    type="text"
                    name="passwordConfirmation"
                    placeholder="Confirm Password"
                    class="form-control bg-white border-left-0 border-md"
                  />
                </div>
                <div class="form-group col-lg-12 mx-auto mb-0">
                  <a href="#" class="btn btn-primary btn-block py-2">
                    <input type="submit" value="Submit" />
                  </a>
                </div>
                <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div class="border-bottom w-100 ml-5"></div>
                  <span class="px-2 small text-muted font-weight-bold text-muted">
                    OR
                  </span>
                  <div class="border-bottom w-100 mr-5"></div>
                </div>
                <div class="form-group col-lg-12 mx-auto">
                  <a
                    href="#"
                    class="btn btn-primary btn-block py-2 btn-facebook"
                  >
                    <i class="fa fa-facebook-f mr-2"></i>
                    <span class="font-weight-bold">Continue with Facebook</span>
                  </a>
                  <a
                    href="#"
                    class="btn btn-primary btn-block py-2 btn-twitter"
                  >
                    <i class="fa fa-twitter mr-2"></i>
                    <span class="font-weight-bold">Continue with Twitter</span>
                  </a>
                </div>
                <div class="text-center w-100">
                  <p class="text-muted font-weight-bold">
                    Already Registered?{" "}
                    <a href="#" class="text-primary ml-2">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
