import * as crypto from "crypto";

export class Block {
    readonly hash: string;
    readonly nonce: number;

    constructor(readonly index: number,
                readonly prevHash: string,
                readonly timestamp: string,
                readonly data: string) {
        const mineResult = this.mine();
        this.hash = mineResult.hash;
        this.nonce = mineResult.nonce;
    }K

    private calculateHash(nonce: number): string {
        const data = this.index + this.prevHash + this.timestamp + this.data + nonce;

        return crypto.createHash('sha256')
            .update(data)
            .digest('hex');
    }

    private mine(): {hash: string, nonce: number} {
        let hash: string;
        let nonce: number = 0;
        do {
            hash =  this.calculateHash(++nonce);
        } while (!hash.startsWith('00000'));

        return {hash, nonce};
    }
}
