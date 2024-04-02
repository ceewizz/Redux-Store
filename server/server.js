const express = require('express');

// Importing the apollo server
const { ApolloServer } = require('apollo-server-express');

const path = require('path');
require('dotenv').config();

// Importing typeDefs and resolvers
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  
  persistedQueries: false,
  typeDefs,
  resolvers,
  context: authMiddleware,


  

});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Setting up static
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Create new apollo server with graphql schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });


  db.once('open', () => {
    app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })

  })
};

// Function to start the server
startApolloServer(typeDefs, resolvers);