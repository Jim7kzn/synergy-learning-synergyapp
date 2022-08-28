import { Component } from 'react';
// import './framework.css';

class State extends Component{
constructor(props) {
	super(props)
	this.state = {
		// text: ''
		num: 0
	}
}

	onHandleChange = (e) => {
		this.setState({
			// text: e.target.value
			num: this.state.num + 1
		})
	}

	render() {
		return (
			<div>
				{/*<input type="text" placeholder="Введите чего-нить!" value={this.state.text}*/}
				{/*onChange={e => this.onHandleChange(e)}/>*/}
				{/*<p>{this.state.text}</p>*/}
				<input type="button" value="+++"
					   onClick={e => this.onHandleChange(e)}/>
				<p>{this.state.num}</p>
			</div>
		);
	}
}

export default State;
