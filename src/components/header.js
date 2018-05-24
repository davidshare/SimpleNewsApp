import React, {Component} from 'react';

//header component
class Header extends Component{

	inputChange(event){
		console.log(event.target.value);
	}

	render(){
		return(
				<header>
					<div className="logo"
					onClick={()=>console.log('clicked')}>Logo</div>
					<input/>
				</header>
			)
	}
}
export default Header;