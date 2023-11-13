const postResolvers = require('./post.resolver');
const authorResolvers = require('./author.resolver');
const commentResolvers = require('./comment.resolver');

const resolvers = {
  Query: {
    ...postResolvers.Query,
    ...authorResolvers.Query,
    ...commentResolvers.Query
  },
  Mutation: {
    ...postResolvers.Mutation,
    ...authorResolvers.Mutation,
    ...commentResolvers.Mutation
  }
};

module.exports = resolvers;
