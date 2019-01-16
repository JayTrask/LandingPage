import React from "react";
/** 

	This component will display a background image behind the page based on an image uploaded by the user. The code will only display an image if a valid image is uploaded.

**/

class Background extends React.Component {
	render(){
		return(
		<div>
			{this.props.Image && <img src={this.props.Image}></img>}
		</div>
		);
	}
};

export default Background;