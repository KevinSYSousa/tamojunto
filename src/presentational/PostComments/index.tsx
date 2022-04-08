import React from 'react';

import {
	StyledContainer,
	StyledView,
	StyledText,
	StyledAlertContainer,
} from './styles';
import Header from '../../components/Header';
import {ScrollView} from 'react-native';
import NewTopicShortcut from '../../components/NewTopicShortcut';
import Breadcrumb from '../../components/Breadcrumb';
import ForumCard from '../../components/ForumCard';
import LoadButton from '../../components/LoadButton';
import RedGreenButton from '../../components/RedGreenButton';
import CommentCard from '../../components/CommentCard';
import theme from '../../styles/theme';
import ToggleSwitch from 'toggle-switch-react-native';
import TurnOnNotifications from '../../components/TurnOnNotifications';

const PostComments = () => {
	return (
		<StyledView>
			<Header />
			<StyledContainer>
				<ScrollView>
					<Breadcrumb />
					<ForumCard fullScream />
					<StyledText textWeight={'bold'}>XX Comentários</StyledText>
					<CommentCard />
					<CommentCard />
					<CommentCard />
					<CommentCard />
					<TurnOnNotifications />
					<LoadButton isComment />
					<RedGreenButton />
				</ScrollView>
				<NewTopicShortcut />
			</StyledContainer>
		</StyledView>
	);
};

export default PostComments;
