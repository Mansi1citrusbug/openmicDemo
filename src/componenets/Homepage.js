import React from 'react'
import Select from 'react-select';
export default function Homepage() {
    return (
        <div>
           <section className="banner-section">
		</section>

		<section className="quick-search">
				<div className="quick-search-div">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-3 col-6">
								<span className="has-float-label readyonly" >
									<input type="button" className="btn btn-modal" value="Manhattan" data-toggle="modal" data-target="#change-region"/>
									<label for="first">Change Region</label>
								</span>
							</div>
							<div className="col-lg-3 col-md-3 col-6 mobile-view ">
									<a href="" className="btn btn-modal btn-filter" value="Manhattan" data-toggle="modal" data-target="#moadl-filter">
										Apply Filter <i className="material-icons"> filter_list </i>
									</a>
							</div>


							<div className="col-lg-3 col-md-3 destop-view">
								<span className="has-float-label">
										<div className="select2-div">
												<Select className="select-multiple" styles={{height:"52px"}}>
														<option>No Drink Minimum</option>
													<option>Drink Minimum</option>
													
												</Select>
											</div>
									<label for="second">Select Mic Type</label>
								</span>
							</div>
								<div className="col-lg-3 col-md-3 destop-view">
								<span className="has-float-label">
											<div className="select2-div">
												<Select className="select-multiple" styles={{height:"52px"}}>
													<option>All Mic</option>
													<option>Featured mic</option>
												</Select>
											</div>
									<label for="third">Short By</label>
								</span>
							</div>
							<div className="col-lg-3 col-md-3 destop-view">
								<div className="form-group search-bar">
									<input type="text" className="form-control search" placeholder="Quick Search"/>
									<i className="fa fa-search icon"></i>
								</div>
							</div>
							</div>

						</div>
					</div>
			</section>

		<div className="comedy-festival">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="heading-comedy">
							<div className="img-circle">
									<img src="images/icon/theater.svg" alt="theater" />
							</div>
							<h3>Comedy festival</h3>
							
						</div>
						<div className="content-comedy">
							<p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<section className="grid-section">
			<div className="grid-div-header">
				<div className="container">
						<div className="row">
								<div className="col-lg-7">
										
											<div className="days">
												<div className="weekend">
														<ul className="nav nav-tabs">
														<li className="active"><a data-toggle="tab" href="#saturday">Saturday</a></li>
														<li><a data-toggle="tab" href="#sunday">Sunday</a></li>
														</ul>
												</div>
												<div className="other-days" id="other-days">
														<ul className="nav nav-tabs">
														<li><a data-toggle="tab" href="#monday">Monday</a></li>
														<li><a data-toggle="tab" href="#sunday">Tuesday</a></li>
														<li><a data-toggle="tab" href="#sunday">Thursday</a></li>
														<li><a data-toggle="tab" href="#sunday">Friday</a></li>
														</ul>
												</div>
											</div>
										
									
								</div>
								<div className="col-lg-5">
									<div className="btn-group ">
										<div className="btn-view-othersday">
											<a  id="toggle-view" className="btn btn-primary btn-blue">View Other week days</a>
										</div>
										<div className="btn-icons" id="btn-icons">
											<a className="btn-view listView active" onClick="listView()"><i className="material-icons">view_module</i></a>
											<a className="btn-view gridView" onClick="gridView()"><i className="material-icons">view_list</i></a>
										</div>

									</div>
								</div>
			
						</div>
						<div className="row">
							<div className="col-lg-12">
									<div className="grid-div-result">
											<div className="tab-content">
													
												<div id="saturday" className="tab-pane active">
													<div className="grid-layout">
															<div className="row">
																	<div className=" grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<span className="featured-label">Featured</span>
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-1.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																				<h4>Best about show</h4>
																				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																			</a>
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<span className="featured-label">Featured</span>
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-2.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																				<h4>Best about show</h4>
																				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																			</div>
																			</a>
																		
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<span className="featured-label">Featured</span>
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-3.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																					<h4>Best about show</h4>
																					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																				</a>
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<span className="featured-label">Featured</span>
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-4.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																					<h4>Best about show</h4>
																					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																			</a>
																		</div>
																	</div>
															</div>
	
															<div className="row">
																	<div className=" grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-1.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																				<h4>Best about show</h4>
																				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																			</a>
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-2.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																				<h4>Best about show</h4>
																				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																			</div>
																			</a>
																		
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-3.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																					<h4>Best about show</h4>
																					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																				</a>
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-4.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																					<h4>Best about show</h4>
																					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																			</a>
																		</div>
																	</div>
															</div>
	

															<div className="row">
																	<div className=" grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-1.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																				<h4>Best about show</h4>
																				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																			</a>
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-2.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																				<h4>Best about show</h4>
																				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																			</div>
																			</a>
																		
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-3.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																					<h4>Best about show</h4>
																					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																				</a>
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-4.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																					<h4>Best about show</h4>
																					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																			</a>
																		</div>
																	</div>
															</div>
	

																<div className="row">
																	<div className=" grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-1.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																				<h4>Best about show</h4>
																				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																			</a>
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-2.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																					<h4>Best about show</h4>
																					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																			</a>
																		</div>
																	</div>
																	<div id="adds-banner" className="grid-list col-lg-6 col-md-6 col-sm-6">
																		<div className="grid-box grid-bg-none">
																			<div className="img-add add-one">
																				<img src="images/add/add-two.png" alt="add" />
																			</div>
																			<div className="img-add add-two">
																				<img src="images/add/add-bottom.png" alt="add" />
																			</div>
																		</div>
																	</div>
																	
																</div>
	
													</div>	
													</div>
													<div id="sunday" className="tab-pane ">
															<div className="list-layout">
																	<div className="row">
																	<div className=" grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-1.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																				<h4>Best about show</h4>
																				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																			</a>
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-2.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																				<h4>Best about show</h4>
																				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																			</div>
																			</a>
																		
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-3.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																					<h4>Best about show</h4>
																					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																				</a>
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="post-mic-details.html">
																				<div className="img-box">
																					<img src="images/grid-images/img-4.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																					<h4>Best about show</h4>
																					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																			</a>
																		</div>
																	</div>
																	</div>

																	<div className="row">
																			<div className=" grid-list col-lg-3 col-md-6 col-sm-6">
																				<div className="grid-box">
																					<a href="post-mic-details.html">
																						<div className="img-box">
																							<img src="images/grid-images/img-1.svg" alt="product-1"/>
																						</div>
																						<div className="content-box">
																							<h3>Comedy openmic</h3>
																							<p><i className="material-icons"> access_time </i>08:00 pm</p>
																							<p><i className="material-icons"> location_on </i>Brighton bar</p>
																							<p >First come first serves</p>
																							<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																						</div>
																						<div className="content-box2">
																						<h4>Best about show</h4>
																						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																						</div>
																					</a>
																				</div>
																			</div>
				
																			<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																				<div className="grid-box">
																					<a href="post-mic-details.html">
																						<div className="img-box">
																							<img src="images/grid-images/img-2.svg" alt="product-1"/>
																						</div>
																						<div className="content-box">
																							<h3>Comedy openmic</h3>
																							<p><i className="material-icons"> access_time </i>08:00 pm</p>
																							<p><i className="material-icons"> location_on </i>Brighton bar</p>
																							<p >First come first serves</p>
																							<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																						</div>
																						<div className="content-box2">
																							<h4>Best about show</h4>
																							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																						</div>
																					</a>
																				</div>
																			</div>
																			<div id="adds-banner" className="grid-list col-lg-6 col-md-6 col-sm-6">
																				<div className="grid-box grid-bg-none">
																					<div className="img-add add-one">
																						<img src="images/add/add-two.png" alt="add" />
																					</div>
																					<div className="img-add add-two">
																						<img src="images/add/add-bottom.png" alt="add" />
																					</div>
																				</div>
																			</div>
																			
																		</div>
															</div>
													</div>

													<div id="monday" className="tab-pane">
															<div className="list-layout">
																	<div className="row">
																	<div className=" grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="#">
																				<div className="img-box">
																					<img src="images/grid-images/img-1.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																				<h4>Best about show</h4>
																				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																			</a>
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="#">
																				<div className="img-box">
																					<img src="images/grid-images/img-2.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																				<h4>Best about show</h4>
																				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																			</div>
																			</a>
																		
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="#">
																				<div className="img-box">
																					<img src="images/grid-images/img-3.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																					<h4>Best about show</h4>
																					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																				</a>
																		</div>
																	</div>
		
																	<div className="grid-list col-lg-3 col-md-6 col-sm-6">
																		<div className="grid-box">
																			<a href="#">
																				<div className="img-box">
																					<img src="images/grid-images/img-4.svg" alt="product-1"/>
																				</div>
																				<div className="content-box">
																					<h3>Comedy openmic</h3>
																					<p><i className="material-icons"> access_time </i>08:00 pm</p>
																					<p><i className="material-icons"> location_on </i>Brighton bar</p>
																					<p >First come first serves</p>
																					<p className="address">8 W Cerritos Ave #54, Bridgeport	Gloucester, 856-264-4130</p>
																				</div>
																				<div className="content-box2">
																					<h4>Best about show</h4>
																					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend urna ligula…</p>
																				</div>
																			</a>
																		</div>
																	</div>
																	</div>
															</div>
													</div>
													
											</div>
									</div>
							</div>
									
						</div>
				</div>

				
			</div>
		</section>		 
        </div>
    )
}
