import React from "react";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {StyledButton, StyledContainer, StyledMenu, StyledTitle} from "./styles";

const Header = () => {
	const navigation = useNavigation();

	return (
		<>
			<StyledContainer>
				<StyledButton
					onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
				>
					<StyledMenu source={require("../../assets/icons/menu.png")} />
				</StyledButton>
				<StyledTitle>tamo</StyledTitle>
				<StyledTitle textWeight={"bold"}>junto</StyledTitle>
			</StyledContainer>
		</>
	);
};

export default Header;
