import React, {Component} from 'react';

//header component
class Header extends Component{

	constructor(props){
		super(props);

		this.state = {
			keywords: ''
		}
	}

	inputChange(event){
		this.setState({keywords:event.target.value});
		this.props.newsSearch(event.target.value);
	}

	render(){
		return(
				<header>
					<div className="logo">Logo</div>
					<input placeholder="Enter your search string" onChange={this.inputChange.bind(this)}/>
				</header>
			)
	}
}
export default Header;