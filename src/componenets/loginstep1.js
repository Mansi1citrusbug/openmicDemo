import React, { useState, useEffect } from 'react';
import { AddDetails } from '../Actions/loginaction';
import { useSelector, useDispatch } from "react-redux";

export default function Loginstep1() {
    const [id, setid] = useState({ id: 0 });
    const [myloginform, setmyloginform] = useState(0);
    const [errors, Seterrors] = useState([]);
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

    const mystate = useSelector(state => state.feild);
    const clicknext = (myid) => {

        Nextvalidation();
        if (errors.iserror === "false") {
            const mypage = myid;


            let pageid = parseInt(mypage) + 1;
            myid = pageid;
            setid(myid);
            setmyloginform(pageid);
            const idstate = {
                ...feild,
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

    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [Email, setEmail] = useState('');
    const [Cellno, setCellNo] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [Venue, setVenue] = useState('');
    const [AboutShow, setAboutshow] = useState('');

    useEffect(() => {

        if (mystate != "") {
            setmyloginform(mystate.myloginform)
            setFname(mystate.first_name);
            setLname(mystate.last_name);
            setEmail(mystate.email);
            setCellNo(mystate.Cellno);
            setPassword(mystate.Password);
            setConfirmPassword(mystate.ConfirmPassword);
            setVenue(mystate.Venue);
            setAboutshow(mystate.AboutShow);
            setfeild(mystate);

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

        validationform(Name, value);


        if (obj.email != "" && obj.first_name != "" && obj.last_name != "" &&
            obj.Cellno != "" && obj.Password != "" && obj.ConfirmPassword != "" && obj.Venue != "" && obj.AboutShow != "") {
            dispatch(AddDetails(obj));

        }
    }

    function validationform(Name, value) {

        if (Name == "email") {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (value === '' || value.trim() == "") {
                errors["email"] = "Please enter email";

            }
            else if (!re.test(value)) {
                errors["email"] = "Enter a valid email";

            }
            else {
                errors["email"] = "";

            }
        }
        if (Name === "first_name") {
            if (value === '' || value.trim() == "") {
                errors["firstname"] = "Please enter firstname";


            }
            else {
                errors["firstname"] = "";

            }
        }
        if (Name === "last_name") {
            if (value === '' || value.trim() == "") {
                errors["lastname"] = "Please enter lastname";
            }


            else {
                errors["lastname"] = "";
            }
        }
        if (Name === "Cellno") {
            let rexp = /^\d{10}$/;
            if (value === '' || value.trim() == "") {
                errors["cellno"] = "Please enter cellno";
            }
            else if (!rexp.test(value)) {
                errors["cellno"] = "Enter valid number";

            }
            else {
                errors["cellno"] = "";
            }
        }
        if (Name === "Password") {
            if (value === '' || value.trim() == "") {
                errors["password"] = "Please enter password";
            }
            else {
                errors["password"] = "";
            }
        }
        if (Name === "ConfirmPassword") {
            if (value === '' || value.trim() == "") {
                errors["confirmpassword"] = "Please enter confirmpassword";
            }
            else {
                errors["confirmpassword"] = "";
            }
        }
        if (Name === "Venue") {
            if (value === '' || value.trim() == "") {
                errors["venue"] = "Please enter venue";
            }
            else {
                errors["venue"] = "";
            }
        }
        if (Name === "AboutShow") {
            if (value === '' || value.trim() == "") {
                errors["aboutshow"] = "Please enter aboutshow";
            }
            else {
                errors["aboutshow"] = "";
            }
        }
        Seterrors(errors);
    }

    function Nextvalidation() {

        errors["iserror"] = "false";
        if (feild.first_name === "") {
            errors["firstname"] = "Please enter firstname";
            errors["iserror"] = "true";

        }

        if (feild.last_name === "") {
            errors["lastname"] = "Please enter lastname";
            errors["iserror"] = "true";

        }

        if (feild.email === "" || feild.email.trim() == "") {
            errors["email"] = "Please enter email";
            errors["iserror"] = "true";

        }

        if (feild.Cellno === "") {
            errors["cellno"] = "Please enter cellno";
            errors["iserror"] = "true";

        }

        if (feild.Password === "" || feild.Password.trim() == "") {
            errors["password"] = "Please enter password";
            errors["iserror"] = "true";

        }

        if (feild.ConfirmPassword === "") {
            errors["confirmpassword"] = "Please enter confirmpassword";
            errors["iserror"] = "true";

        }

        if (feild.Venue === "") {
            errors["venue"] = "Please enter venue";
            errors["iserror"] = "true";

        }

        if (feild.AboutShow === "") {
            errors["aboutshow"] = "Please enter aboutshow";
            errors["iserror"] = "true";

        }

        Seterrors(errors);
    }



    return (
        <>
            <h3>
            </h3>
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
                                <input onChange={handleChange} defaultValue={Fname} type="text" className="form-control" name="first_name" id="first_name" placeholder="First Name" />
                                <span className="">First Name </span>
                            </label>

                            <span style={{ color: "red" }}>{errors.firstname}</span>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="has-float-label">
                                <input onChange={handleChange} defaultValue={Lname} type="text" className="form-control" name="last_name" id="last_name" placeholder="Last Name" />
                                <span className="">Last Name </span>
                            </label>

                            <span style={{ color: "red" }}>{errors.lastname}</span>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="has-float-label">
                                <input onChange={handleChange} defaultValue={Email} type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                <span className="">Email </span>
                            </label>

                            <span style={{ color: "red" }}>{errors.email}</span>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="has-float-label">
                                <input type="Number" onChange={handleChange} defaultValue={Cellno} className="form-control" name="Cellno" id="Cell" placeholder="Cell Number" />
                                <span className="">Cell Number </span>
                            </label>

                            <span style={{ color: "red" }}>{errors.cellno}</span>
                            <span className="note">will not post on this site unless you request us to do so.</span>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="has-float-label">
                                <input type="password" onChange={handleChange} defaultValue={Password} className="form-control" name="Password" id="password" placeholder="password" />
                                <span className="">Password </span>
                            </label>

                            <span style={{ color: "red" }}>{errors.password}</span>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <label className="has-float-label">
                                <input type="password" onChange={handleChange} defaultValue={ConfirmPassword} className="form-control" name="ConfirmPassword" id="password" placeholder="Confirm password" />
                                <span className="">Confirm password </span>
                            </label>

                            <span style={{ color: "red" }}>{errors.confirmpassword}</span>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="has-float-label">
                                <input type="Text" onChange={handleChange} defaultValue={Venue} className="form-control" name="Venue" id="Venue" placeholder="Venue" />
                                <span className="">Venue</span>
                            </label>

                            <span style={{ color: "red" }}>{errors.venue}</span>
                        </div>
                    </div>


                    <div className="col-lg-12">
                        <div className="form-group">
                            <label className="has-float-label">
                                <textarea className="form-control text-area" defaultValue={AboutShow} onChange={handleChange} rows="4" name="AboutShow" id="about" placeholder="About show"></textarea>
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
                        className="btn btn-login Nextbtn" type="button" onClick={() => clicknext("0")}>Next
                    </button>




                </div>

            </div>


        </>
    )
}
