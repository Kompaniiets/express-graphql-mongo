const { getAuthorById, createAuthor } = require('../../services/author.service');

module.exports = {
  Query: {
    async author(_, { id }) {
      return getAuthorById(id);
    }
  },

  Mutation: {
    async createAuthor(_, { name }, context) {
      try {
        return createAuthor({ name });
      } catch(err) {
        console.error(err);
      }
    }
  }
};
