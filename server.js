const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const employees = [
    { id: '1', first_name: 'Pritesh', last_name: 'Pratel', gender: 'Male', salary: 45000, email: '' },
    { id: '2', first_name: 'Julien', last_name: 'Byrnes', gender: 'Male', salary: 42200, email: '' },
  ];

// Define your type definitions
const typeDefs = gql`
  type Employee {
    id: ID!
    first_name: String!
    last_name: String!
    gender: String!
    salary: Float!
    email: String!
  }

  type Query {
    getAllEmployees: [Employee!]!
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    getAllEmployees: () => employees,
  },
};

// Create the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Create an Express application
const app = express();

// Start the server and apply the Apollo middleware to the Express application
server.start().then(() => {
  server.applyMiddleware({ app });

  // Start the server
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});