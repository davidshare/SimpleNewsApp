import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import Components
import Header from './components/header';
import JSON from './db.json';

class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
    		<div>
    			<Header/>
    		</div>
    	)
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));