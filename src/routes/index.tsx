import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import theme from '../styles/theme';
import Home from '../presentational/Home';
import Topic from '../presentational/Topic';
import PostFront from '../presentational/FrontPost';
import PostComments from '../presentational/PostComments';

const Routes = () => {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: {backgroundColor: theme.colors.catskill_white},
				}}
				initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Topic" component={Topic} />
				<Stack.Screen name="PostFront" component={PostFront} />
				<Stack.Screen name="PostComments" component={PostComments} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
