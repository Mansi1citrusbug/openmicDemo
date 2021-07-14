import React, { useState, useEffect } from "react";
import "flatpickr/dist/themes/material_green.css";
import { AddDetails } from "../Actions/loginaction";
import Flatpickr from "react-flatpickr";
import { useSelector, useDispatch } from "react-redux";

export default function Loginstep2() {
  const [myloginform, setmyloginform] = useState();
  const [errors, Seterrors] = useState([]);
  const [feild, setfeild] = useState({
    myloginform: "",
    Date: "",
  });
  const mystorestate = useSelector((state) => state.feild);
  const dispatch = useDispatch();
  const clicknextbtn2 = (formstepid) => {
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

  const clickprevious = (formstepid) => {
    let pageid = formstepid - 1;

    const previdstate = {
      ...mystorestate,
      myloginform: pageid,
    };
    dispatch(AddDetails(previdstate));
  };

  useEffect(() => {
    if (mystorestate !== "") {
      setfeild({
        myloginform: mystorestate.myloginform,
        Date: mystorestate.Date,
      });
      setmyloginform(mystorestate.myloginform);
    }
  }, [mystorestate]);

  function handleChange(date) {
    const dateobj = {
      ...feild,
      Date: date,
    };

    setfeild(dateobj);
  }

  function nextbtnvalidation() {
    errors["iserror"] = "false";
    if (feild.Date === "" || feild.Date === undefined) {
      errors["Date"] = "Please select Date";
      errors["iserror"] = "true";
    }

    Seterrors(errors);
  }
  return (
    <>
      <h3></h3>
      <fieldset>
        <div className="row">
          <div className="col-lg-12">
            <div className="step-title">
              <h4>Step 2 of 6</h4>
              <p>When does this mic happen? </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <label className="has-float-label">
                <Flatpickr
                  onChange={handleChange}
                  value={feild.Date}
                  name="Date"
                  id="datetime"
                  className="form-control"
                  placeholder="select date"
                />
                <span>Schedule Date and Time</span>
              </label>
              <span style={{ color: "red" }}>{errors.Date}</span>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="actions clearfix test">
        <div className="btn-groups">
          <button
            className="btn btn-login prevbtn"
            type="button"
            onClick={() => clickprevious(myloginform)}
          >
            Previous
          </button>
          <button
            className="btn btn-login Nextbtn"
            type="button"
            onClick={() => clicknextbtn2(myloginform)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
