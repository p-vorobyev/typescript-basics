import * as crypto from 'crypto';

let nonce = 0;

async function generateHash(input: string): Promise<string> {
    return crypto.createHash('sha256')
        .update(input)
        .digest('hex');
}

async function calculateHashWithNonce(nonce: number): Promise<string> {
    return generateHash('Hello World' + nonce);
}

async function mine(difficulty: number): Promise<void> {
    let startWith: string = ''
    for (let i = 0; i < difficulty; i++) {
        startWith += '0'
    }
    let hash: string;
    do {
        hash = await calculateHashWithNonce(++nonce);
    } while (!hash.startsWith(startWith));

    console.log(`Hash: ${hash}\nnonce: ${nonce}`)
}

mine(4);
