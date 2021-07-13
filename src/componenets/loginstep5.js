import React, { useState, useEffect } from 'react';
import { AddDetails } from '../Actions/loginaction';
import { useSelector, useDispatch } from "react-redux";

export default function Loginstep5() {
	const [id, setid] = useState({ id: 4 });
	const [myloginform, setmyloginform] = useState();
	const [errors, Seterrors] = useState([]);
	const mystate = useSelector(state => state.feild);

	const clicknextstep5 = (myid) => {


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
		"your_picture": "",
		"Description": ""
	});

	const [files, setFiles] = useState({
		file: '',
		imagePreviewUrl: '',

	});
	const [Discription, setDiscription] = useState('');


	const [fileErr, setErrfile] = useState('');
	const [DescriptionErr, setErrDescription] = useState('');

	useEffect(() => {
		if (mystate !== "") {
			setFiles(mystate.your_picture);
			setDiscription(mystate.Description);

		}
	}, [mystate]);



	const dispatch = useDispatch();

	const handleuploadfile = (e) => {

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {


			setFiles({
				file: file,
				imagePreviewUrl: reader.result,

			});

		}
		let myobj = {
			...feild,
			[e.target.name]: URL.createObjectURL(file)
		}
		setfeild(myobj);

		reader.readAsDataURL(file)
		if (myobj.your_picture === '') {
			setErrfile("Please choose file");
		}
		else {
			setErrfile("");
		}
		if (myobj.your_picture !== "") {
			dispatch(AddDetails(myobj));
		}

	}
	function handleChange(evt) {

		const value = evt.target.value;
		setfeild({
			...feild,
			[evt.target.name]: value
		});
		let obj = {
			...feild,
			[evt.target.name]: value
		};

		setfeild(obj);
		if (obj.Description === '') {
			setErrDescription("Please enter description");
		}
		else {
			setErrDescription("");
		}
		if (obj.Description !== "") {
			dispatch(AddDetails(obj));
		}


	}
	function Nextvalidation() {

		errors["iserror"] = "false";
		if (mystate.your_picture === "") {
			errors["your_picture"] = "Please choose image";
			errors["iserror"] = "true";

		}
		if (mystate.Description === "") {
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
							<input type="file" className="inputfile" name="your_picture" id="your_picture" onChange={handleuploadfile}
								data-multiple-caption="{count} files selected" multiple style={{ display: "none" }} />

							<label htmlFor="your_picture">
								<figure>

									<img src={mystate.your_picture} alt="" className="your_picture_image" />
								</figure>
								<span className="file-button">Upload Poster</span>
							</label>
							<span style={{ color: "red" }}>{errors.your_picture}</span>
						</div>
					</div>
					<div className="col-lg-10  col-md-9 col-sm-6">
						<div className="form-group">
							<label className="has-float-label">
								<textarea onChange={handleChange} defaultValue={Discription} className="form-control text-area mt-0" rows="4" name="Description" id="Description" placeholder="Additional description"></textarea>
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
						className="btn btn-login prevbtn" type="button" onClick={() => clickprevious("4")}>Previous
					</button>
					<button 
						className="btn btn-login Nextbtn" type="button" onClick={() => clicknextstep5("4")}>Next
					</button>




				</div>

			</div>
		</>
	)
}
