import React from 'react';
import {logging} from 'react-server';
import styled, {ThemeProvider} from 'styled-components';
import Color from 'color';

// from http://www.colourlovers.com/palette/132637/Odd_but_trendy
const oddButTrendyPrimaryButtonColor = Color('#7DB4B5');
const oddButTrendySecondaryButtonColor = Color('#E0EFF1');
const oddButTrendyTheme = {
	primaryButtonColor: oddButTrendyPrimaryButtonColor.hexString(),
	primaryButtonLightColor: oddButTrendyPrimaryButtonColor.lighten(0.2).hexString(),
	secondaryButtonColor: oddButTrendySecondaryButtonColor.hexString(),
	secondaryButtonLightColor: oddButTrendySecondaryButtonColor.lighten(0.2).hexString(),
	'bannerTextColor': '#680148'
}

// from http://www.colourlovers.com/palette/154405/Ladbrokes
const ladbrokesPrimaryButtonColor = Color('#609000');
const ladbrokesSecondaryButtonColor = Color('#C0C078');
const ladbrokesTheme = {
	primaryButtonColor: ladbrokesPrimaryButtonColor.hexString(),
	primaryButtonLightColor: ladbrokesPrimaryButtonColor.lighten(0.2).hexString(),
	secondaryButtonColor: ladbrokesSecondaryButtonColor.hexString(),
	secondaryButtonLightColor: ladbrokesSecondaryButtonColor.lighten(0.2).hexString(),
	'bannerTextColor': '#F00000'
}


// from the styled-components docs
// https://github.com/styled-components/styled-components/blob/master/docs/api.md
const Banner = styled.h2`
	font-size: 3.5em;
	color: ${props => props.theme.bannerTextColor};
`;

const buttonStyles = `
	position: relative;
	vertical-align: top;
	width: 250px;
	height: 60px;
	margin: 0 50px 50px 0;
	padding: 0;
	font-size: 22px;
	text-align: center;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
	border: 0;
	cursor: pointer;
	display: inline-block;

	:active {
		top: 1px;
		outline: none;
		-webkit-box-shadow: none;
		box-shadow: none;
	}
`

// credit to http://cssdeck.com/labs/beautiful-flat-buttons
const PrimaryButton = styled.button`
	${buttonStyles}
	background: ${props => props.theme.primaryButtonColor};
	border-bottom: 2px solid ${props => props.theme.primaryButtonLightColor};
	-webkit-box-shadow: inset 0 -2px ${props => props.theme.primaryButtonLightColor};
	box-shadow: inset 0 -2px ${props => props.theme.primaryButtonLightColor};
`;

const SecondaryButton = styled.button`
	${buttonStyles}
	background: ${props => props.theme.secondaryButtonColor};
	border-bottom: 2px solid ${props => props.theme.secondaryButtonLightColor};
	-webkit-box-shadow: inset 0 -2px ${props => props.theme.secondaryButtonLightColor};
	box-shadow: inset 0 -2px ${props => props.theme.secondaryButtonLightColor};
`;

const CenteredDiv = styled.div`
	text-align: center;
`;

const logger = logging.getLogger(__LOGGER__);

export default class HelloWorld extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			exclamationCount: 0,
			themeName: 'oddButTrendyTheme',
			theme: oddButTrendyTheme
		};
		this.handlePrimaryClick = () => {
			logger.info(`Getting more excited! previously ${this.state.exclamationCount} excitements.`);
			this.setState({
				exclamationCount: this.state.exclamationCount + 1,
				themeName: this.state.themeName,
				name: this.state.theme
			});
		};

		this.handleSecondaryClick = () => {
			logger.info(`Changing theme.  Previously ${this.state.themeName}.`)
			this.setState({
				themeName: this.state.themeName === 'oddButTrendyTheme' ? 'LadbrokesTheme' : 'oddButTrendyTheme',
				theme: this.state.themeName === 'oddButTrendyTheme' ? ladbrokesTheme : oddButTrendyTheme,
				exclamationCount: this.state.exclamationCount
			});
		}
	}

	render() {
		return (
			<ThemeProvider theme={this.state.theme}>
				<CenteredDiv>
					<Banner>Hello, World{'!'.repeat(this.state.exclamationCount)}</Banner>
					<PrimaryButton onClick={this.handlePrimaryClick}>Get More Excited!</PrimaryButton>
					<SecondaryButton onClick={this.handleSecondaryClick}>Change Theme</SecondaryButton>
				</CenteredDiv>
			</ThemeProvider>
		);
	}
}
