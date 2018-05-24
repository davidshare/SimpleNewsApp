import React, {Component} from 'react';

//header component
class Header extends Component{

	constructor(props){
		super(props);

		this.state = {
			keywords: 'Jon'
		}
	}

	inputChange(event){
		console.log(event.target.value);
	}

	render(){
		return(
				<header>
					<div className="logo"
					onClick={()=>console.log('clicked')}>Logo</div>
					<input onChange={this.inputChange}/>
				</header>
			)
	}
}
export default Header;