const { getCommentsByPost, addComment } = require('../../services/comment.service');

module.exports = {
  Query: {
    async comments(_, { postId }) {
      return getCommentsByPost(postId);
    }
  },

  Mutation: {
    async addComment(_, { authorId, postId, text }, context) {
      return addComment(authorId, postId, text);
    }
  }
};
