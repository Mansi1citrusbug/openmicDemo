import React, { useState, useEffect } from 'react';

import { AddDetails } from '../Actions/loginaction';
import { useSelector, useDispatch } from "react-redux";

export default function Loginstep6() {
	const [id, setid] = useState({ id: 5 });
	const [myloginform, setmyloginform] = useState();
	const dispatch = useDispatch();
	const mystate = useSelector(state => state.feild);

	const clickprevious = (myid) => {

		const mypage = myid;


		let pageid = parseInt(mypage) - 1;
		myid = pageid;
		setid(myid);
		setmyloginform(pageid);
		const previdstate = {
			...feild,
			myloginform: pageid
		}
		dispatch(AddDetails(previdstate));

	}
	const clickpublish = () => {
		alert(JSON.stringify(mystate))
	}

	const [feild, setfeild] = useState({
		"myloginform": ""
	});
	const [files, setFiles] = useState('');

	useEffect(() => {
		if (mystate !== "") {

			setFiles(mystate.your_picture);
		}
	}, [mystate]);

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
							<li><span>Name of Mic:</span>Comedy open mic</li>
							<li><span>Address:</span>6649 N Blue Gum St New Orleans Orleans - 70116</li>
							<li><span>City:</span>Orleans</li>
						</ul>

					</div>

					<div className="col-lg-12 text-right">
						<button style={{ "marginBottom": "30px" }} className="btn btn-draft">Save in draft</button>
					</div>

				</div>
			</fieldset>
			<div className="actions clearfix test">
				<div className="btn-groups">

					<button
						className="btn btn-login prevbtn" type="button" onClick={() => clickprevious("5")}>Previous
					</button>

					<button
						className="btn btn-login Nextbtn" type="button" onClick={() => clickpublish()}  >Publish
					</button>



				</div>

			</div>

		</>
	)
}
