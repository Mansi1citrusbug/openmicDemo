import React, { useState, useEffect } from "react";
import { AddDetails } from "../Actions/loginaction";
import { useSelector, useDispatch } from "react-redux";

export default function Loginstep5() {
  const [myloginform, setmyloginform] = useState();
  const [errors, Seterrors] = useState([]);
  const mystorestate = useSelector((state) => state.feild);
  const dispatch = useDispatch();
  const clicknextstep5 = (formstepid) => {
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
    your_picture: "",
    Description: "",
  });

  const [files, setFiles] = useState({
    file: "",
    imagePreviewUrl: "",
  });

  useEffect(() => {
    if (mystorestate !== "") {
      setfeild({
        myloginform: mystorestate.myloginform,
        your_picture: mystorestate.your_picture,
        Description: mystorestate.Description,
      });
      setmyloginform(mystorestate.myloginform);
    }
  }, [mystorestate]);

  const handleuploadfile = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFiles({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    let myobj = {
      [e.target.name]: URL.createObjectURL(file),
    };
    setfeild(myobj);

    reader.readAsDataURL(file);

    dispatch(AddDetails(myobj));
  };
  function handleChange(evt) {
    const value = evt.target.value;

    let obj = {
      [evt.target.name]: value,
    };

    setfeild(obj);

    dispatch(AddDetails(obj));
  }
  function nextbtnvalidation() {
    errors["iserror"] = "false";
    if (feild.your_picture === "" || feild.your_picture === undefined) {
      errors["your_picture"] = "Please choose image";
      errors["iserror"] = "true";
    }
    if (feild.Description === "" || feild.your_picture === undefined) {
      errors["Description"] = "Please enter description";
      errors["iserror"] = "true";
    }

    Seterrors(errors);
  }
  return (
    <>
      <h3></h3>
      <fieldset>
        <div className="row">
          <div className="col-lg-6">
            <div className="step-title">
              <h4>Step 5 of 6</h4>
              <p>Upload image and additional information</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="form-file">
              <input
                type="file"
                className="inputfile"
                name="your_picture"
                id="your_picture"
                onChange={handleuploadfile}
                data-multiple-caption="{count} files selected"
                multiple
                style={{ display: "none" }}
              />

              <label htmlFor="your_picture">
                <figure>
                  <img
                    src={feild.your_picture}
                    alt=""
                    className="your_picture_image"
                  />
                </figure>
                <span className="file-button">Upload Poster</span>
              </label>
              <span style={{ color: "red" }}>{errors.your_picture}</span>
            </div>
          </div>
          <div className="col-lg-10  col-md-9 col-sm-6">
            <div className="form-group">
              <label className="has-float-label">
                <textarea
                  onChange={handleChange}
                  value={feild.Description}
                  className="form-control text-area mt-0"
                  rows="4"
                  name="Description"
                  id="Description"
                  placeholder="Additional description"
                ></textarea>
                <span>Additional description</span>
              </label>
              <span style={{ color: "red" }}>{errors.Description}</span>
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
            onClick={() => clicknextstep5(myloginform)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
