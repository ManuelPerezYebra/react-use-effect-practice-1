import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 540px;
	height: 332px;
	background-color: #313a48;
	justify-content: center;
	margin: 223px auto;
	position: relative;
	border-radius: 10px;
	p {
		margin: 0;
		color: #53ffaa;
		text-align: center;
		font-size: 13px;
		padding-top: 48px;
	}
	h1 {
		color: #cee3e9;
		padding: 24px 48px 0px 48px;
		text-align: center;
		font-size: 28px;
	}
	img {
		margin: 0 auto;
	}
	button {
		background-color: #53ffaa;
		border: none;
		padding: 20px;
		border-radius: 50%;
		margin: 0 auto;
		position: absolute;
		bottom: -32px;
		left: 50%;
		transform: translateX(-50%);
	}
	@media (max-width: 425px) {
		width: 343px;
		height: auto;
		padding-bottom: 70px;
		p {
			margin: 0;
			color: #53ffaa;
			text-align: center;
			font-size: 11px;
			padding-top: 48px;
		}
		h1 {
			color: #cee3e9;
			padding: 24px 48px 0px 48px;
			text-align: center;
			font-size: 24px;
		}
		img {
			margin: 0 auto;
			width: 80%;
		}
	}
`;
export { StyledContainer };
