import React, { useState, useEffect } from "react";

import { AddDetails } from "../Actions/loginaction";
import { useSelector, useDispatch } from "react-redux";

export default function Loginstep6() {
  const [myloginform, setmyloginform] = useState(5);
  const dispatch = useDispatch();
  const mystorestate = useSelector((state) => state.feild);

  const clickprevious = (formstepid) => {
    let pageid = formstepid - 1;

    const previdstate = {
      ...mystorestate,
      myloginform: pageid,
    };
    dispatch(AddDetails(previdstate));
  };
  const clickpublish = () => {
    alert(JSON.stringify(mystorestate));
  };

  const [files, setFiles] = useState("");

  useEffect(() => {
    if (mystorestate !== "") {
      setFiles(mystorestate.your_picture);
      setmyloginform(mystorestate.myloginform);
    }
  }, [mystorestate]);

  return (
    <>
      <h3></h3>
      <fieldset>
        <div className="row">
          <div className="col-lg-12">
            <div className="step-title">
              <h4>Step 6 of 6</h4>
              <p>Review Your Mic Details </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="review-details">
              <h4>Uploaded Poster</h4>
              <img src={files} alt="" />
            </div>
          </div>

          <div className="col-lg-9 col-md-9">
            <ul className="post-review">
              <li>
                <span>Name of Mic:</span>Comedy open mic
              </li>
              <li>
                <span>Address:</span>6649 N Blue Gum St New Orleans Orleans -
                70116
              </li>
              <li>
                <span>City:</span>Orleans
              </li>
            </ul>
          </div>

          <div className="col-lg-12 text-right">
            <button style={{ marginBottom: "30px" }} className="btn btn-draft">
              Save in draft
            </button>
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
            onClick={() => clickpublish()}
          >
            Publish
          </button>
        </div>
      </div>
    </>
  );
}
