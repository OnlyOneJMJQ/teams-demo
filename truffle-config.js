const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*'
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider("4c226bfa6fb7e66f4f8219fda65a708622e3bfc8ae3f5052f8983ba3c1e6574b", "https://ropsten.infura.io/v3/416c36ceb9ca4f2aac6f3603464ca5f0");
      },
      network_id: '3',
    }
  }
};
