import React, { useState } from 'react';
import Store from '../Services/Store';
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import Loginstep1 from './loginstep1'
import Loginstep2 from './loginstep2';
import Loginstep3 from './loginstep3';
import Loginstep4 from './loginstep4';
import Loginstep5 from './loginstep5';
import Loginstep6 from './loginstep6';


export default function Loginform() {
	const mystate = useSelector(state => state.feild);
	debugger
	if (mystate.length === 0 || mystate === undefined) {
		mystate.myloginform = 0;

	}

	return (
		<Provider store={Store}>
			<div className="App">
				<div className="middle-container">
					<section className="postmic-secttion main">

						<div className="container">
							<div className="post-mic-form post-mic-form-steps">

								<div className="row">
									<div className="col-lg-12">
										<div className="post-mic-heading">

											<h3 >Post your mic...</h3>

											<p>First, you need to open a free account so can you post, edit and manage the details of your Open Mic. If you have already signed-up <a href="#!" data-toggle="modal" data-target="#login-post-mic" className="login-txt">LOGIN</a></p>
										</div>
									</div>
								</div>


								<form method="POST" id="signup-form" className="signup-form" encType="multipart/form-data">
									{mystate.myloginform === 0 && <Loginstep1 />}
									{mystate.myloginform === 1 && <Loginstep2 />}
									{mystate.myloginform === 2 && <Loginstep3 />}
									{mystate.myloginform === 3 && <Loginstep4 />}
									{mystate.myloginform === 4 && <Loginstep5 />}
									{mystate.myloginform === 5 && <Loginstep6 />}



								</form>

								<div className="actions clearfix test">

								</div>
							</div>


						</div>

					</section>
				</div>
			</div>

		</Provider>

	)
}
