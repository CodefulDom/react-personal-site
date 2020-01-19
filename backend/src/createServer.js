const { GraphqlServer } = require('graphql-yoga')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const { db } = require('./db')

function createServer() {
  return new GraphqlServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidation: {
      requireResolversForResolvedType: false
    },
    context: (req) => ({ ...req, db })
  })
}

module.exports = createServer
