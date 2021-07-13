import React from 'react'

export default function Footer() {
    return (
        <div className="App">
           	<footer>
		<section className="copyright-section ">
				<div className="container">
					<div className="div-Copyright">
						<div className="row">
							<div className="col-lg-9 col-md-9 col-sm-6">
								<div className="social-media">
									<ul className="social-media-icon">
										<li><a href="#" className="icon-g-pluse"><i className="fa fa-google-plus "></i></a></li>
										<li><a href="#" className="icon-facebook"><i className="fa fa-facebook-official "></i></a></li>
										<li><a href="#" className="icon-twitter"><i className="fa fa-twitter "></i></a></li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet lacus turpis, vitae accumsan odio lobortis venenatis.</p>
								</div>
							</div>

							<div className="col-lg-3 col-md-3 col-sm-6">
								<div className="Copyright">
										<p>© 2019 openmiclist.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</footer>  
        </div>
    )
}
