import express from 'express';

import setupMiddlewares from './middlewares';
import setupApolloServer from './apollo-server';
import setupRoutes from './routes';

export const app = express();
setupApolloServer(app);
setupMiddlewares(app);
setupRoutes(app);
