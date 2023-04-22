import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={flag:false};
		this.show=this.show.bind(this);
	};
	show(){
		this.setState({flag:true});
	}
    render() {
    	return(
    		<div id="main">
				{ this.state.flag && (<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>) }
				<button id="click" onClick={this.show}>click</button>
    		</div>
    	);
    }
}


export default App;

