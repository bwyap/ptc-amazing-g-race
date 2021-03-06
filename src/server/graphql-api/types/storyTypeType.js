import {
	GraphQLEnumType
} from 'graphql';


const storyTypeType = new GraphQLEnumType({
	name: 'StoryType',
	description: 'A story type',
	values: {
		challengeUnlock: { value: 'challengeUnlock' },
		challengeRespond: { value: 'challengeRespond' },
		challengeCheck: { value: 'challengeCheck' },
		custom: { value: 'custom' },
		user: { value: 'user' }
	}
});


export default storyTypeType;
