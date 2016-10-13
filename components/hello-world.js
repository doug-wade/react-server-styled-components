import React from 'react';
import {logging} from 'react-server';
import styled from 'styled-components';

const Banner = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const logger = logging.getLogger(__LOGGER__);

export default class HelloWorld extends React.Component {
	constructor(props) {
		super(props);
		this.state = {exclamationCount: 0};
		this.handleClick = () => {
			logger.info(`Getting more excited! previously ${this.state.exclamationCount} excitements.`);
			this.setState({exclamationCount: this.state.exclamationCount + 1});
		};
	}

	render() {
		return (
			<div>
				<Banner>Hello, World{'!'.repeat(this.state.exclamationCount)}</Banner>
				<button onClick={this.handleClick}>Get More Excited!</button>
			</div>
			);
	}
}
