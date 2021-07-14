import React, { useState, useEffect } from "react";
import { AddDetails } from "../Actions/loginaction";
import { useSelector, useDispatch } from "react-redux";

export default function Loginstep4() {
  const [myloginform, setmyloginform] = useState();
  const [errors, setErrors] = useState([]);
  const mystorestate = useSelector((state) => state.feild);
  const dispatch = useDispatch();
  const clicknextstep4 = (formstepid) => {
    nextbtnvalidation();
    if (errors.iserror === "false") {
      let pageid = formstepid + 1;
      const idstate = {
        ...mystorestate,
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

  const [feild, setfeild] = useState({
    Select: "",
  });

  useEffect(() => {
    if (mystorestate !== "") {
      setfeild({
        myloginform: mystorestate.myloginform,
        Select: mystorestate.Select,
      });
      setmyloginform(mystorestate.myloginform);
    }
  }, [mystorestate]);

  function handleChange(evt) {
    const Name = evt.target.name;
    const value = evt.target.value;
    const obj = {
      ...feild,
      [evt.target.name]: value,
    };
    setfeild(obj);

    validationform(Name, value);

    if (obj !== "") {
      dispatch(AddDetails(obj));
    }
  }
  function validationform(Name, value) {
    if (Name === "Selection") {
      if (value === "" || value.trim() === "") {
        errors["Select"] = "Please select ";
      } else {
        errors["Select"] = "";
      }
    }
    setErrors(errors);
  }
  function nextbtnvalidation() {
    errors["iserror"] = "false";
    if (feild.Select === "" || feild.Select === undefined) {
      errors["Select"] = "Please select ";
      errors["iserror"] = "true";
    }

    setErrors(errors);
  }
  return (
    <>
      <h3></h3>
      <fieldset>
        <div className="row">
          <div className="col-lg-12">
            <div className="step-title">
              <h4>Step 4 of 6</h4>
              <p>Cost of Performance? </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <span className="has-float-label">
                <div className="select2-div">
                  <select
                    style={{
                      width: "415px",
                      height: "33px",
                      fontWeight: "bold",
                    }}
                    id="selection"
                    className="select"
                    value={feild.Select}
                    name="Select"
                    onChange={handleChange}
                  >
                    <option value="">-</option>
                    <option value="CompletlyFree">Completly Free</option>
                  </select>
                  <span style={{ color: "red" }}>{errors.Select}</span>
                </div>
                <label for="second">Select</label>
              </span>
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
            onClick={() => clicknextstep4(myloginform)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
