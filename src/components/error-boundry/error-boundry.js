import React, {Component} from 'react';
import ErrorIndicator from './../error-indicator/';


export default class ErrorBounder extends Component {
	state = {
		hasError: false
	}

	componentDidCatch(error) {
		this.setState({hasError:true});
	}

	render(){
		if(this.state.hasError) {
			return <ErrorIndicator/>
		}
		return this.props.children;
	}
};


