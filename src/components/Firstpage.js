import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Firstpage.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Firstpage() {
  const navigate = useNavigate();

  const initialValues = { Email: "", password: "", cpassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
    setIssubmit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };
  useEffect(() => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      (async () => {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        console.log(data.data);
      })();

      navigate("/Secondpage");

      // data()
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // email
    if (!values.Email) {
      errors.Email = " Email is required";
    } else if (!regex.test(values.Email)) {
      errors.Email = " Not a valid email ";
    }

    // password

    if (!values.password) {
      errors.password = " Password  is required";
    } else if (values.password.length < 4) {
      errors.password = " Must be more than 4 character";
    } else if (values.password.length > 12) {
      errors.password = " Not more  than 12  character";
    }

    // confirm password

    if (values.cpassword !== values.password) {
      errors.cpassword = " Confirm Password not matched with password ";
    }

    return errors;
  };

  localStorage.setItem("loginDetails", JSON.stringify(formValues));

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1> <br></br>
          <div className="uidivider">
            <div className="uiform">
              <div className="feild">
                <label>
                  {" "}
                  <h5>EMAIL</h5>{" "}
                </label>
                <br></br>
                <input
                  className=" inp"
                  type="text"
                  name="Email"
                  placeholder=" Enter Email  id "
                  onChange={handleChange}
                  value={formValues.Email}
                />
              </div>
              <p className="red">{formErrors.Email}</p>

              <div className="feild">
                <label>
                  <h5 className="downcc ">PASSWORD</h5>{" "}
                </label>
                <br></br>
                <input
                  className="inp"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  value={formValues.password}
                />
              </div>
              <p className="red">{formErrors.password}</p>

              <div className="feild">
                <label>
                  {" "}
                  <h5 className="downcc ">CONFIRM PASSWORD</h5>
                </label>
                <br></br>
                <input
                  className=" inp"
                  type="password"
                  name="cpassword"
                  placeholder="Confirm password  "
                  onChange={handleChange}
                  value={formValues.cpassword}
                />
              </div>
              <p className="red">{formErrors.cpassword}</p>

              <button className="button"> Next</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Firstpage;
