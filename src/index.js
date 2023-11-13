const express = require('express');
const http = require('http');
const cors = require('cors');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const {
  ApolloServerPluginDrainHttpServer
} = require('@apollo/server/plugin/drainHttpServer');

const connectDB = require('./config/db');
const router = require('./routes');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();
const PORT = process.env.PORT || 3001;

async function startServer() {
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: process.env.NODE_ENV !== 'production',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  });

  await server.start();
  await connectDB();

  // middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Graphql entry point
  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: async({ req, res }) => ({
        // Add optional configuration options
        request: req,
        response: res
      })
    })
  );

  app.use('/api/', router);

  httpServer.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
  });
}

startServer();
