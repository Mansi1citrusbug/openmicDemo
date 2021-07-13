import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

	const Header = ({ activeTab }) => {
		
	return (
		<div className="App">
	
			<header>

				<div className="header-div cbp-af-header clearfix">
					<div className="inner-top-header-div clearfix">
						<div className="container">
							<div className="row">
								<div className="col-sm-12 col-lg-12">
									<div className="logo-div">
										<a className="logo_link clearfix" href="index.html">
											<img src="./images/logo.svg" className="logo-white" alt="I-mobile" /></a>

									</div>
									<nav>
										<div className="top-nav1">
											<div className="cd-shadow-layer"></div>
											<div className="nav-m-bar">
												<a href="#" onClick="openNav()" className="opennav" data-placement="bottom" title="" data-original-title="Menu">
													<i className="menu-bars"></i></a>
											</div>
											<div className="fest-icon-bar">
												<a href="comedy-festival.html" ><img src="images/icon/theater.svg" alt="search" />
													<li className={`${activeTab === 'Home' ? 'active' : ''}`} style={{ margin: '0 23px 0 0' }}>
														<Link to="/" className="nav-link">
															<span>  Comedy festivals</span>
														</Link>
													</li>
												</a>
											</div>
											<div className="nav-div clearfix" id="mySidenav">
												<a href="#" className="closebtn"
													onClick="closeNav()">&times;</a>


												<ul className="nav ullist-inline " id="nav-res">

													<li><a href="#" data-toggle="modal" data-target="#modal-conatct">Contact us</a></li>
													<li><a href="#" data-toggle="modal" data-target="#login-post-mic">Login</a></li>
													<li className="btn-signup"  >
														<Link to="/Postmic" className="nav-link">
														<a >Post Your Mic</a>
														</Link>
													</li>
													{/* <li className="btn-signup"><a href="guide-for-post-mic.html" >Post Your Mic</a></li> */}
												</ul>
											</div>

										</div>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}
export default Header;
Header.propTypes = {
	activeTab: PropTypes.string,
};