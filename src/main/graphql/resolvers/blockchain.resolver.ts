import { Block } from '@/main/services/blockchain';
import { BlockchainDataInput } from '@/interfaces';

export default {
  Query: {
    getBlocks: async (root: any, args: void, context: any) => context.chain.blockchain
  },
  Mutation: {
    addBlock: async (root: any, data: BlockchainDataInput, context: any) => {
      const blockchain = context.chain;
      return blockchain.addNewBlock(new Block(data));
    }
  }
};
