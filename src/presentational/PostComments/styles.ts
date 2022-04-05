import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface TextType {
	textWeight?: string;
	textColor?: string;
	textSize?: string;
}

export const StyledView = styled.View`
	background-color: ${theme.colors.athens_gray};
	flex: 1;
`;

export const StyledContainer = styled.View`
	flex: 1;
	padding-left: 25px;
	padding-right: 25px;
`;

export const StyledText = styled.Text<TextType>`
	margin-top: 15px;
	color: ${(props) => props.textColor || theme.colors.eden};
	font-weight: bold;
	font-size: ${(props) => props.textSize || '16px'};
	font-weight: ${(props) => props.textWeight || 300};
`;