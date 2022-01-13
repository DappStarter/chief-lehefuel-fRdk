require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush strategy crawl pave proud install clock army gauge'; 
let testAccounts = [
"0xccce88dbec9183fb9edf07287d55a36ba45e7297decb69a46a91342d2829f81f",
"0xb85293ed790adf4a8c12a0823c740fab72b2e7e5c8f0232af183af32a7a9d589",
"0xe60623b474422f3de450e012e4158edfa502eef1a8d7efb4d399e2e96ff22b22",
"0xb688d15ade43c67635f37cb79e437573145946015d707e9c497895c889722b93",
"0xafbf1f50761634d515637776502c157e1403b43c3e28a2e48b00562ca1941975",
"0x7242b15dd2d3a11bae888a7fae686f556407f4049c1b54ab33811e876f4f3f02",
"0xe3fb98681e1e67fdc2737ae1b8a5d21a408ae4390ec9566a60ab4304e113f183",
"0x0ccfe52f9c76d70182b476fb0ae824d43885c72e7ac697080318b9d13232253a",
"0x39817fe85f41e7fa95efebb22e21820ee818c7282ca2db6b30a1f15a9b2d3e35",
"0xe1503067c86adf9fe64d7bcbe5c95b338f3939f1ad028f1fe6162a60ad2212fd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


