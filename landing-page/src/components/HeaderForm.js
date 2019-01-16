import React from "react";
/**
This is the first component I am making in solitude. I am focusing, while writing this code, to remember as much javascript syntax as I can without aide. 

HeaderForm is a form component that allows the user to link an image or animated gif from the internet to be used as a header on the landing page. This will be one of two image customizations available; the other being a background image or animated gif. 

**/
class HeaderForm extends React.Component{
	render(){
		return(
			<form onSubmit={this.props.getImage}>
				<input type="text" name="headerImage" placeholder="URL of image/gif ex: https://example.com/image.png"/>
				<button>Place Header Image</button>
			</form>
		);
	}
};

export default HeaderForm;