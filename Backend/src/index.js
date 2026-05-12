const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const typeDefs = `
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello from PointCloudArShop backend!'
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

async function startServer() {
  const app = express();
  const httpServer = require('http').createServer(app);
  const server = new ApolloServer({ schema });
  await server.start();
  app.use(cors(), express.json(), expressMiddleware(server));
  const PORT = process.env.PORT || 4000;
  httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
}

startServer();