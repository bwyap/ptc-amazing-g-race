import {
	GraphQLString,
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLBoolean,
  GraphQLNonNull
} from 'graphql';

import types from '../types';
import resolvers from '../resolvers';


const getResponse = {
	type: types.responseType,
	description: 'Get a response for a challenge by id',
	args: {
		responseId: {
			name: 'responseId',
			description: 'The response id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params, ctx, options) {
		return resolvers.responseResolver.getResponse(root, params, ctx, options);
	}
};


const getResponseData = {
	type: types.uploadDataType,
	description: 'Gets the data from a response (admin only)',
	args: {
		responseId: {
			name: 'responseId',
			description: 'The response id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params, ctx, options) {
		return resolvers.responseResolver.getResponseData(root, params, ctx, options);
	}
};


const getResponses = {
	type: new GraphQLList(types.responseType),
	description: 'Get responses for a challenge',
	args: {
		challengeKey: {
			name: 'challengeKey',
			description: 'The challenge key',
			type: GraphQLString
		},
		itemKey: {
			name: 'itemKey',
			description: 'The challenge item key (optional)',
			type: GraphQLString
		},
		uncheckedOnly: {
			name: 'uncheckedOnly',
			description: 'True if the query should only return unchecked responses (default is false)',
			type: GraphQLBoolean
		}
	},
	resolve(root, params, ctx, options) {
		return resolvers.responseResolver.getResponses(root, params, ctx, options);
	}
};


const getTeamResponses = {
	type: new GraphQLList(types.responseType),
	description: 'Get a user\'s team\'s responses for a challenge item',
	args: {
		challengeKey: {
			name: 'challengeKey',
			description: 'The challenge key',
			type: GraphQLString
		},
		itemKey: {
			name: 'itemKey',
			description: 'The challenge item key',
			type: GraphQLString
		}
	},
	resolve(root, params, ctx, options) {
		return resolvers.responseResolver.getTeamResponses(root, params, ctx, options);
	}
};


const getResponsesByTeam = {
	type: new GraphQLList(types.responseType),
	description: 'Get responses from a specified team',
	args: {
		teamId: {
			name: 'teamId',
			description: 'The id of the team',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params, ctx, options) {
		return resolvers.responseResolver.getResponsesByTeam(root, params, ctx, options);
	}
};



export default {
	getResponse,
	getResponseData,
	getResponses,
	getResponsesByTeam,
	getTeamResponses
};
