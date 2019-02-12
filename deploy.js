const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'winter game puppy gadget convince domain nerve crime derive snack walk soon',
  'https://rinkeby.infura.io/v3/07784ee77ba84d9a9b5c701b3d83e3ba'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000', from: accounts[0] });
  
  console.log('Contract deployed to', result.options.address);
}

deploy();