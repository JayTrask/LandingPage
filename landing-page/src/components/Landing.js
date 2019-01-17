import React from "react";

/**

Landing is a 'landing page' for LandingPage. It is intended only to be shown when a person opens the program for the first time, but may also be used as a settings page to change the preferences of their page.

**/

class Landing extends React.Component{
	render(){
		return(
		<div><img src={this.props.landingImage}></img></div>
		);
	}
};

export default Landing;