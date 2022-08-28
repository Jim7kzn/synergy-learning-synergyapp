import { Component } from 'react';
import './framework.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

class Framework extends Component{

	render() {
		return (
			<div className="Framework">
				<div className="testClass">
					<Stack spacing={2} direction="row">
						<Button variant="text">Text</Button>
						<Button variant="contained">Contained</Button>
						<Button variant="outlined">Outlined</Button>
					</Stack>
				</div>

				<div className='testClass'>&nbsp;</div>

				<div className="testClass">
					<Stack direction="row" spacing={2}>
						<Button color="secondary">Secondary</Button>
						<Button variant="contained" color="success">
							Success
						</Button>
						<Button variant="outlined" color="error">
							Error
						</Button>
					</Stack>
				</div>

			</div>
		);
	}
}

export default Framework;
