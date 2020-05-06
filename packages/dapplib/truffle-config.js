require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remove combine inflict kite symptom tattoo'; 
let testAccounts = [
"0x83887fab7b23b46e61ab0dcd96c89a1fd031b6bfe26317a7b8c2bc943209b585",
"0x721817cac4ad7c97b6f8a8a7fcbe9f7d3b665075329241f366259f9ee1ab2ccf",
"0x77a5bf7158eb0697ece368a6b74c0d081c63ada74b0b8e08ebd6abc6d9c7f00f",
"0xf910b42ce8a16d975af102857921c3dc4c3588732475999e30fb72b8ffb79306",
"0xafee377a9d35d45fe77e651067447625feb1dee768885481f947507fff2acea6",
"0xbe52bd98fe946ddb505e03b94208f7ed0329d4ad79f595c3e1f8643454acf33c",
"0x8545e6c15c3db36c2c8ffab34dbd2547114e2832ac52e1c820d9b0324b75e72f",
"0xadbea4a1ab565fe3f8e57ac48b58b35af96042a5da3c0c26d94a126a0dd7335f",
"0x3f3a39bb3cd11ab2911379badd937c9f185438d91c6ce88011f70a2db4991726",
"0xb8a6c038a46355cc04d95026e7df46b447ee72285eb58101f39e3378068eff90"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
