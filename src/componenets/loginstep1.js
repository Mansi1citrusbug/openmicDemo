import React, { useState, useEffect } from "react";
import { AddDetails } from "../Actions/loginaction";
import { useSelector, useDispatch } from "react-redux";

export default function Loginstep1() {
  const [myloginform, setmyloginform] = useState();
  const [errors, setErrors] = useState([]);
  const [feild, setfeild] = useState({
    myloginform: "",
    first_name: "",
    last_name: "",
    email: " ",
    Cellno: "",
    Password: "",
    ConfirmPassword: "",
    Venue: "",
    AboutShow: "",
    isError: "",
  });

  const mystorestate = useSelector((state) => state.feild);
  const clicknext = (formstepid) => {
    nextbtnvalidation();
    if (errors.iserror === "false") {
      let pageid = formstepid + 1;
      const idstate = {
        ...feild,
        myloginform: pageid,
      };
      dispatch(AddDetails(idstate));
    } else {
      const errstate = {
        ...feild,
        isError: true,
      };
      const eridstate = {
        ...feild,
        myloginform: formstepid,
      };
      const finalerr = { ...errstate, ...eridstate };
      dispatch(AddDetails(finalerr));
    }
  };

  useEffect(() => {
    if (mystorestate !== "") {
      setfeild({
        myloginform: mystorestate.myloginform,
        first_name: mystorestate.first_name,
        last_name: mystorestate.last_name,
        email: mystorestate.email,
        Cellno: mystorestate.Cellno,
        Password: mystorestate.Password,
        ConfirmPassword: mystorestate.ConfirmPassword,
        Venue: mystorestate.Venue,
        AboutShow: mystorestate.AboutShow,
      });
    }
  }, [mystorestate]);

  const dispatch = useDispatch();

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    const obj = {
      ...feild,
      [evt.target.name]: value,
    };
    setfeild(obj);

    validatononchange(name, value);
  }

  function validatononchange(Name, value) {
    if (Name == "email") {
      let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (value === "" || value.trim() == "") {
        errors["email"] = "Please enter email";
      } else if (!re.test(value)) {
        errors["email"] = "Enter a valid email";
      } else {
        errors["email"] = "";
      }
    }
    if (Name === "first_name") {
      if (value === "" || value.trim() == "") {
        errors["firstname"] = "Please enter firstname";
      } else {
        errors["firstname"] = "";
      }
    }
    if (Name === "last_name") {
      if (value === "" || value.trim() == "") {
        errors["lastname"] = "Please enter lastname";
      } else {
        errors["lastname"] = "";
      }
    }
    if (Name === "Cellno") {
      let rexp = /^\d{10}$/;
      if (value === "" || value.trim() == "") {
        errors["cellno"] = "Please enter cellno";
      } else if (!rexp.test(value)) {
        errors["cellno"] = "Enter valid number";
      } else {
        errors["cellno"] = "";
      }
    }
    if (Name === "Password") {
      if (value === "" || value.trim() == "") {
        errors["password"] = "Please enter password";
      } else {
        errors["password"] = "";
      }
    }
    if (Name === "ConfirmPassword") {
      if (value === "" || value.trim() == "") {
        errors["confirmpassword"] = "Please enter confirmpassword";
      } else {
        errors["confirmpassword"] = "";
      }
    }
    if (Name === "Venue") {
      if (value === "" || value.trim() == "") {
        errors["venue"] = "Please enter venue";
      } else {
        errors["venue"] = "";
      }
    }
    if (Name === "AboutShow") {
      if (value === "" || value.trim() == "") {
        errors["aboutshow"] = "Please enter aboutshow";
      } else {
        errors["aboutshow"] = "";
      }
    }
    setErrors(errors);
  }

  function nextbtnvalidation() {
    errors["iserror"] = "false";
    if (feild.first_name === "" || feild.first_name === undefined) {
      errors["firstname"] = "Please enter firstname";
      errors["iserror"] = "true";
    }

    if (feild.last_name === "" || feild.last_name === undefined) {
      errors["lastname"] = "Please enter lastname";
      errors["iserror"] = "true";
    }

    if (
      feild.email === "" ||
      feild.email.trim() == "" ||
      feild.email === undefined
    ) {
      errors["email"] = "Please enter email";
      errors["iserror"] = "true";
    }

    if (feild.Cellno === "" || feild.Cellno === undefined) {
      errors["cellno"] = "Please enter cellno";
      errors["iserror"] = "true";
    }

    if (
      feild.Password === "" ||
      feild.Password.trim() == "" ||
      feild.Password === undefined
    ) {
      errors["password"] = "Please enter password";
      errors["iserror"] = "true";
    }

    if (feild.ConfirmPassword === "" || feild.ConfirmPassword === undefined) {
      errors["confirmpassword"] = "Please enter confirmpassword";
      errors["iserror"] = "true";
    }

    if (feild.Venue === "" || feild.Venue === undefined) {
      errors["venue"] = "Please enter venue";
      errors["iserror"] = "true";
    }

    if (feild.AboutShow === "" || feild.AboutShow === undefined) {
      errors["aboutshow"] = "Please enter aboutshow";
      errors["iserror"] = "true";
    }

    setErrors(errors);
  }

  return (
    <>
      <h3></h3>
      <fieldset>
        <div className="row mt20">
          <div className="col-lg-12">
            <div className="step-title">
              <h4>Step 1 of 6</h4>
              <p>Account Details </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label className="has-float-label">
                <input
                  onChange={handleChange}
                  value={feild.first_name}
                  type="text"
                  className="form-control"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                />
                <span className="">First Name </span>
              </label>

              <span style={{ color: "red" }}>{errors.firstname}</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label className="has-float-label">
                <input
                  onChange={handleChange}
                  value={feild.last_name}
                  type="text"
                  className="form-control"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                />
                <span className="">Last Name </span>
              </label>

              <span style={{ color: "red" }}>{errors.lastname}</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label className="has-float-label">
                <input
                  onChange={handleChange}
                  value={feild.email}
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <span className="">Email </span>
              </label>

              <span style={{ color: "red" }}>{errors.email}</span>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label className="has-float-label">
                <input
                  type="Number"
                  onChange={handleChange}
                  value={feild.Cellno}
                  className="form-control"
                  name="Cellno"
                  id="Cell"
                  placeholder="Cell Number"
                />
                <span className="">Cell Number </span>
              </label>

              <span style={{ color: "red" }}>{errors.cellno}</span>
              <span className="note">
                will not post on this site unless you request us to do so.
              </span>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label className="has-float-label">
                <input
                  type="password"
                  onChange={handleChange}
                  value={feild.Password}
                  className="form-control"
                  name="Password"
                  id="password"
                  placeholder="password"
                />
                <span className="">Password </span>
              </label>

              <span style={{ color: "red" }}>{errors.password}</span>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label className="has-float-label">
                <input
                  type="password"
                  onChange={handleChange}
                  value={feild.ConfirmPassword}
                  className="form-control"
                  name="ConfirmPassword"
                  id="password"
                  placeholder="Confirm password"
                />
                <span className="">Confirm password </span>
              </label>

              <span style={{ color: "red" }}>{errors.confirmpassword}</span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label className="has-float-label">
                <input
                  type="Text"
                  onChange={handleChange}
                  value={feild.Venue}
                  className="form-control"
                  name="Venue"
                  id="Venue"
                  placeholder="Venue"
                />
                <span className="">Venue</span>
              </label>

              <span style={{ color: "red" }}>{errors.venue}</span>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <label className="has-float-label">
                <textarea
                  className="form-control text-area"
                  value={feild.AboutShow}
                  onChange={handleChange}
                  rows="4"
                  name="AboutShow"
                  id="about"
                  placeholder="About show"
                ></textarea>
                <span>About show</span>
              </label>

              <span style={{ color: "red" }}>{errors.aboutshow}</span>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="actions clearfix test">
        <div className="btn-groups">
          <button
            className="btn btn-login Nextbtn"
            type="button"
            onClick={() => clicknext(feild.myloginform)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
