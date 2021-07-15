import { ApolloServer } from 'apollo-server-express';
import { Express } from 'express';

import { BlockChain } from '@/main/services/blockchain';
import { resolvers, typeDefs } from '@/main/graphql';

const chain = new BlockChain();

export default async (app: Express): Promise<void> => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    introspection: true,
    //schemaDirectives,
    context: async (context) => {
      Object.assign(context, { chain });
      return context;
    }
  });
  await server.start();
  server.applyMiddleware({ app });
};
