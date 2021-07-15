import dotenv from 'dotenv';
dotenv.config();

import { Environment } from '@/interfaces';

const nodeEnvironment = process.env.NODE_ENV as string;
const nodePort = process.env.PORT as string;

const capitalizedName = nodeEnvironment.charAt(0).toUpperCase() + nodeEnvironment.slice(1);

export const environment: Environment = {
  name: nodeEnvironment,
  capitalizedName,
  port: nodePort
};
