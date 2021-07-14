import React, { useState } from "react";
import { AddDetails } from "../Actions/loginaction";
import { useSelector, useDispatch } from "react-redux";
import Loginstep1 from "./loginstep1";
import Loginstep2 from "./loginstep2";
import Loginstep3 from "./loginstep3";
import Loginstep4 from "./loginstep4";
import Loginstep5 from "./loginstep5";
import Loginstep6 from "./loginstep6";

export default function Loginform() {
  const mystorestate = useSelector((state) => state.feild);
  const dispatch = useDispatch();

  if (mystorestate.length === 0 || mystorestate === undefined) {
    mystorestate.myloginform = 0;
    dispatch(AddDetails(mystorestate));
  }

  return (
    <div className="App">
      <div className="middle-container">
        <section className="postmic-secttion main">
          <div className="container">
            <div className="post-mic-form post-mic-form-steps">
              <div className="row">
                <div className="col-lg-12">
                  <div className="post-mic-heading">
                    <h3>Post your mic...</h3>

                    <p>
                      First, you need to open a free account so can you post,
                      edit and manage the details of your Open Mic. If you have
                      already signed-up{" "}
                      <a
                        href="#!"
                        data-toggle="modal"
                        data-target="#login-post-mic"
                        className="login-txt"
                      >
                        LOGIN
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <form
                method="POST"
                id="signup-form"
                className="signup-form"
                encType="multipart/form-data"
              >
                {mystorestate.myloginform === 0 && <Loginstep1 />}
                {mystorestate.myloginform === 1 && <Loginstep2 />}
                {mystorestate.myloginform === 2 && <Loginstep3 />}
                {mystorestate.myloginform === 3 && <Loginstep4 />}
                {mystorestate.myloginform === 4 && <Loginstep5 />}
                {mystorestate.myloginform === 5 && <Loginstep6 />}
              </form>

              <div className="actions clearfix test"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
