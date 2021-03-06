import React from "react";

import {StyledViewContainer, StyledText} from "./styles";
import theme from "../../styles/theme";

const TextArea = ({
	placeholder = "Título...",
	size = "55px",
	borderColor = theme.colors.tide,
	placeholderTextColor = theme.colors.fuscous_gray,
	...rest
}) => {
	return (
		<>
			<StyledViewContainer sizeArea={size} borderColor={borderColor}>
				<StyledText
					{...rest}
					placeholder={placeholder}
					placeholderTextColor={placeholderTextColor}
				/>
			</StyledViewContainer>
		</>
	);
};

export default TextArea;
