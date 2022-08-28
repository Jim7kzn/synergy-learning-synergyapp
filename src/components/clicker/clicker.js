import { Component } from "react";
import './clicker.css';
import styled from "styled-components";

class Clicker extends Component{
	state = {
		counter: 0
	}

	onClickButton = () => {
		this.setState({
			counter: this.state.counter + 1
		})
	}

	render() {
		let counter = this.state.counter

		const Button = styled.a`
			  display: inline-block;
			  border-radius: 3px;
			  padding: 0.5rem 0;
			  margin: 0.5rem 1rem;
			  width: 11rem;
			  background: black;
			  color: white;
			  border: 2px solid white;
			  `
		const TomatoButton = styled(Button)`
			  color: tomato;
			  border-color: tomato;
			`

		// const link = 'https://github.com/styled-components/styled-components'
		const link = '#'

		return (
			<div className="Clicker">
				<h1>You clicked {counter} times</h1>
				<button onClick={() => this.onClickButton()}>Click me!</button>
				<Button href={link} rel='noopener'
						// target='_blank'
				>Github</Button>

				<TomatoButton href={link} rel='noopener'
							  target='_blank'
				>Github</TomatoButton>
			</div>
		);
	}
}

export default Clicker;
