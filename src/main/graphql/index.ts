import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

const schemasOptions = { recursive: true, extensions: ['graphql'] };
const schemasArray = loadFilesSync(
  path.join(__dirname, './schemas'),
  schemasOptions,
);
const typeDefs = mergeTypeDefs(schemasArray);

const resolversOptions = { recursive: true, ignoreIndex: true };
const resolversArray = loadFilesSync(
  path.join(__dirname, './resolvers/**/*.ts'),
  resolversOptions,
);
const resolvers = mergeResolvers(resolversArray);

export { typeDefs, resolvers };
