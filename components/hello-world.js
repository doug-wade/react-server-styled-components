import React from 'react';
import {logging} from 'react-server';
import styled from 'styled-components';

// from the styled-components docs
// https://github.com/styled-components/styled-components/blob/master/docs/api.md
const Banner = styled.h2`
  font-size: 3.5em;
  color: palevioletred;
`;

// credit to http://cssdeck.com/labs/beautiful-flat-buttons
const WisteriaButton = styled.button`
  position: relative;
  vertical-align: top;
  width: 250px;
  height: 60px;
  padding: 0;
  font-size: 22px;
  color: white;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  background: #8e44ad;
  border: 0;
  border-bottom: 2px solid #80399d;
  cursor: pointer;
  -webkit-box-shadow: inset 0 -2px #80399d;
  box-shadow: inset 0 -2px #80399d;
  display: inline-block;

  :active {
    top: 1px;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

const CenteredDiv = styled.div`
  text-align: center;
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
			<CenteredDiv>
				<Banner>Hello, World{'!'.repeat(this.state.exclamationCount)}</Banner>
				<WisteriaButton onClick={this.handleClick}>Get More Excited!</WisteriaButton>
			</CenteredDiv>
			);
	}
}
