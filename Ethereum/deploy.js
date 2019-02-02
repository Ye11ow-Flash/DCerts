const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/Certificate.json');
const provider = new HDWalletProvider(
	'vicious half dance tornado deer egg inherit medal major key nominee quick',
	'https://rinkeby.infura.io/v3/0ee8112fe7754369a520a9182901a8dc'
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account ', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
	.deploy({
		data: '0x' + compiledFactory.bytecode,
		arguments: []
	})
	.send({
		gas: '1000000',
		from: accounts[0]
	});

	console.log(result.options.address);
};

deploy();