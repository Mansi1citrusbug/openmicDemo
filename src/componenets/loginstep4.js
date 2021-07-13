import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { AddDetails } from '../Actions/loginaction';
import { useSelector, useDispatch } from "react-redux";
// import 'react-select/dist/css/react-select.css';

export default function Loginstep4() {
    const [id, setid] = useState({ id: 3 });
    const [myloginform, setmyloginform] = useState();
    const [errors, Seterrors] = useState([]);
    const mystate = useSelector(state => state.feild);

    const clicknextstep4 = (myid) => {


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
  
    const [feild, setfeild] = useState({
        "Select": ""
    });
    const [Selection, setSelection] = useState('');

    const [selectionErr, setErrSelection] = useState('');

    useEffect(() => {
        if (mystate !== "") {

            setSelection(mystate.Select);

        }
    }, [mystate]);



    const dispatch = useDispatch();

    function handleChange(evt) {

        const Name = evt.target.name;
        const value = evt.target.value;
        const obj = {
            ...feild,
            [evt.target.name]: value
        }
        setfeild(obj);

        validationform(Name, value)

        if (feild.Selection === '' && value.trim() === "") {
            setErrSelection("Please select Selection ");
        }
        else {
            setErrSelection("");
        }

        if (obj !== "") {
            dispatch(AddDetails(obj));
        }


    }
    function validationform(Name, value) {


        if (Name === "Selection") {
            if (value === '' || value.trim() === "") {
                setErrSelection("please select it");
            }
            else {
                setErrSelection("");
            }
        }

    }
    function Nextvalidation() {

        errors["iserror"] = "false";
        if (mystate.Select === "") {
            errors["Select"] = "Please select ";
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
                            <h4>Step 4 of 6</h4>
                            <p>Cost of Performance? </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <span className="has-float-label">
                                <div className="select2-div">

                                    <select style={{ width: "415px", height: "33px", fontWeight: "bold" }} id="selection" className="select" value={Selection} name="Select" onChange={handleChange}>
                                        <option value="">-</option>
                                        <option value="CompletlyFree" >Completly Free</option>
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
                        className="btn btn-login prevbtn" type="button" onClick={() => clickprevious("3")}>Previous
                    </button>
                    <button
                        className="btn btn-login Nextbtn" type="button" onClick={() => clicknextstep4("3")}>Next
                    </button>




                </div>

            </div>


        </>
    )
}
