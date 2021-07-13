import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function Postinsignin() {
    const history = useHistory();
    const clickAgree = () => history.push('/Loginform');
    return (
        <div>
            <div className="middle-container">
		<section className="postmic-secttion">
			<div className="container">
					<div className="post-mic-form">
							<div className="row">
								<div className="col-lg-12">
									<div className="post-mic-heading">
									
										<h3 >Post your mic...</h3>
								
										<p>Guide for Posting Your Open Mic</p>

										<ul className="post-guide">
											<li>Your mic must permit Stand Up Comedy. </li>
											<li>You must not require performers to bring audience members.</li>
											<li>You must list all fees (including drink minimums) that are required to perform.</li>
										</ul>
									</div>
								</div>
								
							

							
									
						</div>
	
						<div className="login-form-footer">
							<div className="row">
							
								<div className="col-lg-12 text-right">
									<div className="btn-groups">
                          
										<button onClick={clickAgree} className="btn btn-login" type="button">Agree</button>
                                  
									</div>
								</div>
							</div>
						</div>
			</div>
            </div>  
		</section>
	</div>
        </div>
    )
}
