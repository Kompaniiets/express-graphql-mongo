const { getPostById, getAllPosts, createPost, updatePost } = require('../../services/post.service');

module.exports = {
  Query: {
    async post(_, { id }) {
      return getPostById(id);
    },
    async posts(_, { search }) {
      return getAllPosts(search);
    }
  },
  Mutation: {
    async createPost(_, { authorId, content }, context) {
      try {
        return createPost(authorId, content);
      } catch(err) {
        console.error(err);
      }
    },
    async updatePost(_, args, context) {
      const { id, content } = args;
      return updatePost(id, content);
    }
  }
};
