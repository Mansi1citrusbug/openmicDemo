import React, { useState, useEffect } from "react";
import { AddDetails } from "../Actions/loginaction";
import { useSelector, useDispatch } from "react-redux";

export default function Loginstep3() {
  const [myloginform, setmyloginform] = useState();
  const [errors, setErrors] = useState([]);
  const mystorestate = useSelector((state) => state.feild);
  const dispatch = useDispatch();
  const clicknextbtn3 = (formstepid) => {
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
    describe: "",
    radio: "",
  });

  useEffect(() => {
    if (mystorestate != "") {
      setfeild({
        myloginform: mystorestate.myloginform,
        describe: mystorestate.describe,
        radio: mystorestate.radio,
      });
      setmyloginform(mystorestate.myloginform);
    } else {
      const mystorestate = {
        ...mystorestate,
        radio: true,
      };
    }
  }, [mystorestate]);

  
  function handleChangeradio(evt) {
    const objradio = {
      radio: evt,
    };
    setfeild(objradio);

    if (objradio.radio != "") {
      dispatch(AddDetails(objradio));
    }
  }
  function handleChange(evt) {
    const value = evt.target.value;
    const objdescribe = {
      [evt.target.name]: value,
    };
    setfeild(objdescribe);

    if (objdescribe.describe !== "") {
      dispatch(AddDetails(objdescribe));
    }
  }

  function nextbtnvalidation() {
    errors["iserror"] = "false";
    if (feild.radio === "" || feild.radio === undefined) {
      errors["radio"] = "Please select radio button";
      errors["iserror"] = "true";
    }
    if (feild.describe === "" || feild.describe === undefined) {
      errors["describe"] = "Please describe it";
      errors["iserror"] = "true";
    }

    setErrors(errors);
  }
  return (
    <>
      <h3></h3>
      <fieldset>
        <div className="row">
          <div className="col-lg-6">
            <div className="step-title">
              <h4>Step 3 of 6</h4>
              <p>Is this mic open to all Performance? </p>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="radio-check">
              <label className="container-radio">
                Yes
                <input
                  type="radio"
                  onChange={(event) =>
                    handleChangeradio("true", event.target.value)
                  }
                  className="radio-yes"
                  name="radio"
                  checked={feild.radio === "true"}
                />
                <span className="checkmark"></span>
              </label>

              <label className="container-radio">
                No, <span>This mic is open only certian demographics.</span>
                <input
                  type="radio"
                  onChange={(event) =>
                    handleChangeradio("false", event.target.value)
                  }
                  className="radio-no"
                  name="radio"
                  checked={feild.radio === "false"}
                />
                <span className="checkmark"></span>
              </label>
              <span style={{ color: "red" }}>{errors.radio}</span>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group radio-checked">
              <label className="has-float-label">
                <textarea
                  onChange={handleChange}
                  value={feild.describe}
                  className="form-control text-area-100"
                  name="describe"
                  rows="4"
                  id="describe"
                  placeholder="please describe requirments to perform."
                >
                  {" "}
                </textarea>
                <span className="">Describe requirments</span>
              </label>
              <span style={{ color: "red" }}>{errors.describe}</span>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="actions clearfix test">
        <div className="btn-groups">
          <button
            id="prevbtn"
            className="btn btn-login prevbtn"
            type="button"
            onClick={() => clickprevious(myloginform)}
          >
            Previous
          </button>
          <button
            className="btn btn-login Nextbtn"
            type="button"
            onClick={() => clicknextbtn3(myloginform)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
