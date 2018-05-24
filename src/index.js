import React from 'react';
import ReactDOM from 'react-dom';

//import Components
import Header from './components/header';

const App = () =>{
    return (
    		<div>
    			<Header/>
    			<h1>Hello word</h1>
    		</div>
    	)
}

ReactDOM.render(<App/>, document.querySelector('#root'));