import React from "react";
import Form from "./Form";
import HeaderForm from "./HeaderForm"
import BackgroundForm  from "./BackgroundForm"

/**

Landing is a 'landing page' for LandingPage. It is intended only to be shown when a person opens the program for the first time, but may also be used as a settings page to change the preferences of their page.

**/

class Landing extends React.Component{
 
	render(){
		return(
		<div>
		{ this.props.landing && <img src={this.props.landingImage}></img> }
		{ this.props.landing && !this.props.headerImage && <HeaderForm getImage={this.props.getImage}/>}
		{ this.props.headerImage && !this.props.BackgroundImage && <BackgroundForm getBGImage={this.props.getBGImage}/>}
		{ this.props.BackgroundImage && !this.props.temperature && <Form getWeather={this.props.getWeather}/>}
		{ this.props.landing && this.props.temperature && <button onClick={this.props.enterSite}>Enter</button> }
		</div>
		);
	}
};

export default Landing;