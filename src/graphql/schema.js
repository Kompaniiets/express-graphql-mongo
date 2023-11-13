const typeDefs = `#graphql
type Post {
    _id: ID!
    title: String!
    body: String!
    createdAt: String!
    author: Author
    comments: [Comment]
}

type Author {
    _id: ID!
    name: String!
    createdAt: String!
    posts: [Post]
}

type Comment {
    _id: ID!
    text: String!
    createdAt: String!
    author: Author
    post: Post
}

# Inputs
input PostContent {
    title: String!
    body: String!
}

# Queries
type Query {
    post(id: ID!): Post
    posts(search: String): [Post]
    author(id: ID!): Author
    comments(postId: ID!): [Comment]
}

# Mutations
type Mutation {
    createAuthor(name: String!): Author
    createPost(authorId: ID!, content: PostContent!): Post
    updatePost(id: ID!, content: PostContent!): Post
    addComment(authorId: ID!, postId: ID!, text: String!): Comment
}
`;

module.exports = typeDefs;
