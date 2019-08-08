import React, {Component} from 'react';
import ErrorIndicator from './../error-indicator/';
import Spinner from './../spinner/';

export default class ErrorBounder extends Component {
	state = {
		hasError: false
	}

	componentDidCatch(error) {
		this.setState({hasError:false});
	}

	render(){
		if(this.state.hasError) {
			return <ErrorIndicator/>
		}
		return <Spinner/>
	}
};


