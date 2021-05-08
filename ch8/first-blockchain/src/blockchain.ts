import {Block} from "./block";

export class Blockchain {
    private readonly chain: Block[] = [];

    constructor() {
        this.chain.push(new Block(0, '0', Date.now().toString(), 'Initial block'))
    }

    private lastBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    addBlock(data: string): void {
        let lastBlock = this.lastBlock();
        this.chain.push(new Block(
            lastBlock.index + 1,
            lastBlock.hash,
            Date.now().toString(),
            data))
    }
}
