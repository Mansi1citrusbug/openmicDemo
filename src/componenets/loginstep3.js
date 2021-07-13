import React, { useState, useEffect } from 'react';
import { AddDetails } from '../Actions/loginaction';
import { useSelector, useDispatch } from "react-redux";

export default function Loginstep3() {
    const [id, setid] = useState({ id: 2 });
    const [myloginform, setmyloginform] = useState();
    const [errors, Seterrors] = useState([]);
    const mystate = useSelector(state => state.feild);


    const clicknextstep3 = (myid) => {


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
        "describe": "",
        "radio": ""

    });
    const [radio, setRadio] = useState(Boolean);
    const [describe1, setDescription] = useState('');
    const [radioErr, setErrradio] = useState('');
    const [describeErr, setErrdescribe] = useState('');

    useEffect(() => {

        if (mystate != "") {

            setDescription(mystate.describe);
            setRadio(mystate.radio);


        }
        else {
            const mystate = {
                ...mystate,
                radio: true
            }
        }
    }, [mystate]);



    const dispatch = useDispatch();
    function handleChangeradio(evt) {


        // const value = evt.target.value;
        const objradio = {
            ...feild,
            radio: evt
        }
        setfeild(objradio);
        // validationform(Name,value);


        if (objradio.radio != "") {
            dispatch(AddDetails(objradio));
        }


    }
    function handleChange(evt) {

        const Name = evt.target.name;
        const value = evt.target.value;
        const objdescribe = {
            ...feild,
            [evt.target.name]: value
        }
        setfeild(objdescribe);



        if (objdescribe.describe !== "") {
            dispatch(AddDetails(objdescribe));
        }


    }
    function validationform(Name, value) {


        if (Name === "describe") {
            if (value === '' || value.trim() === "") {
                setErrdescribe("please describe it");
            }
            else {
                setErrdescribe("");
            }
        }
        if (Name === "radio") {
            if (value === '') {
                setErrradio("Please select any one option");
            }
            else {
                setErrradio("");
            }
        }
    }

    function Nextvalidation() {

        errors["iserror"] = "false";
        if (mystate.radio === "") {
            errors["radio"] = "Please select radio button";
            errors["iserror"] = "true";

        }
        if (mystate.describe === "") {
            errors["describe"] = "Please describe it";
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
                    <div className="col-lg-6">
                        <div className="step-title">
                            <h4>Step 3 of 6</h4>
                            <p>Is this mic open to all Performance? </p>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="radio-check">
                            <label className="container-radio">Yes
                                <input type="radio" onChange={event => handleChangeradio("true", event.target.value)} className="radio-yes" name="radio" checked={mystate.radio === "true"} />
                                <span className="checkmark"></span>
                            </label>

                            <label className="container-radio">No, <span>This mic is open only certian demographics.</span>
                                <input type="radio" onChange={event => handleChangeradio("false", event.target.value)} className="radio-no" name="radio" checked={radio === "false"} />
                                <span className="checkmark"></span>
                            </label>
                            <span style={{ color: "red" }}>{errors.radio}</span>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group radio-checked" >
                            <label className="has-float-label">
                                <textarea onChange={handleChange} value={describe1} className="form-control text-area-100" name="describe" rows="4" id="describe" placeholder="please describe requirments to perform." > </textarea>
                                <span className="">Describe requirments</span>
                            </label>
                            <span style={{ color: "red" }}>{errors.describe}</span>
                        </div>
                    </div>
                </div>

            </fieldset>
            <div className="actions clearfix test">
                <div className="btn-groups">

                    <button id="prevbtn"
                        className="btn btn-login prevbtn" type="button" onClick={() => clickprevious("2")}>Previous
                    </button>
                    <button
                        className="btn btn-login Nextbtn" type="button" onClick={() => clicknextstep3("2")}>Next
                    </button>




                </div>

            </div>

        </>
    )
}
