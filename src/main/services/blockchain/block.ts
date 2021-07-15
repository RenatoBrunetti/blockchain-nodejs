import crypto from 'crypto';

export class Block {
  private timestamp: number
  private data: any
  private prevHash: string
  private hash: string

  constructor(data: any, prevHash = '') {
    this.timestamp = Date.now();
    this.data = data;
    this.prevHash = prevHash;
    this.hash = this.computeHash();
  }

  computeHash() {
    const strBlock = this.prevHash + this.timestamp + JSON.stringify(this.data);
    return crypto.createHash('sha256').update(strBlock).digest('hex');
  }
}
