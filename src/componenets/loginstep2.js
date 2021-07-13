import React, { useState, useEffect } from 'react';
import "flatpickr/dist/themes/material_green.css";
import { AddDetails } from '../Actions/loginaction';
import Flatpickr from "react-flatpickr";
import { useSelector, useDispatch } from "react-redux";

export default function Loginstep2() {
    const [id, setid] = useState({ id: 1 });
    const [myloginform, setmyloginform] = useState();
    const [errors, Seterrors] = useState([]);
    const [feild, setfeild] = useState({
        "Date": "",


    });
    const mystate = useSelector(state => state.feild);
    const clicknext2 = (myid) => {


        Nextvalidation();
        if (errors.iserror === "false") {
            const mypage = myid;


            let pageid = parseInt(mypage) + 1;
            myid = pageid;
            setid(myid);
            setmyloginform(pageid);
            const idstate = {
                ...mystate,
                myloginform: pageid
            }
            dispatch(AddDetails(idstate));
        }

        else {

            const errstate = {
                ...feild,
                isError: true,

            }
            const eridstate = {
                ...feild,
                myloginform: parseInt(myid),

            }
            const finalerr = { ...errstate, ...eridstate };
            dispatch(AddDetails(finalerr));
        }
    }



    const clickprevious = (myid) => {

        const mypage = myid;


        let pageid = parseInt(mypage) - 1;
        myid = pageid;
        setid(myid);
        setmyloginform(pageid);
        const previdstate = {
            ...mystate,
            myloginform: pageid
        }
        dispatch(AddDetails(previdstate));

    }
    const clickpublish = () => {
        alert(JSON.stringify(mystate))
    }
    // const mystate = useSelector(state => state.feild);

    const [Date, setDate] = useState();

    const [DateErr, setErrDate] = useState('');

    useEffect(() => {
        if (mystate !== "") {
            setDate(mystate.Date);
            // setfeild(mystate)
        }
    }, [mystate]);



    const dispatch = useDispatch();

    function handleChange(date) {

        const dateobj = {
            ...feild,
            Date: date
        }

        setfeild(dateobj);


        if (dateobj !== "") {
            dispatch(AddDetails(dateobj));
        }


    }

    function Nextvalidation() {

        errors["iserror"] = "false";
        if (feild.Date === "") {
            errors["Date"] = "Please select Date";
            errors["iserror"] = "true";

        }



        Seterrors(errors);
    }
    return (
        <>
            <h3>

            </h3>
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
                            <label className="has-float-label" >
                                <Flatpickr onChange={handleChange} defaultValue={Date} name="Date" id="datetime" className="form-control" placeholder="select date" />
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
                         className="btn btn-login prevbtn" type="button" onClick={() => clickprevious("1")}>Previous
                    </button>
                    <button 
                        className="btn btn-login Nextbtn" type="button" onClick={() => clicknext2("1")}>Next
                    </button>




                </div>

            </div>


        </>
    )
}
