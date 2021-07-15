import { Block } from './';

export class BlockChain {
  private blockchain: any

  constructor() {
    this.blockchain = [this.startGenesisBlock()];
  }

  private startGenesisBlock() {
    return new Block({ name: 'first', info: null });
  }

  private obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  public addNewBlock(newBlock: any) {
    newBlock.prevHash = this.obtainLatestBlock().hash;
    newBlock.hash = newBlock.computeHash();
    this.blockchain.push(newBlock);
    return newBlock;
  }

  public checkChainValidity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currBlock = this.blockchain[i];
      const prevBlock = this.blockchain[i - 1];

      if (currBlock.hash !== currBlock.computeHash()) {
        return false;
      }

      if (currBlock.prevHash !== prevBlock.hash) {
        return false;
      }

    }
    return true;
  }
}
