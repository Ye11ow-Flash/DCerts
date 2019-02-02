const assert = require('assert'); //make assertions
const ganache = require('ganache-cli')
const Web3 = require('web3'); //constructor fn, thats why capitalize
const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledCerti = require('../Ethereum/build/Certificate.json');
const exampleCerti = require('../certificate');
let accounts;
let certificate;

beforeEach(async() => {
//get a list of all accounts
	accounts = await web3.eth.getAccounts();
//use one of those accts to deploy the contract
	certificate = await new web3.eth.Contract(JSON.parse(compiledCerti.interface)).deploy({data: compiledCerti.bytecode, arguments : []}).send({from:accounts[0], gas:'1000000'});
	certificate.setProvider(provider);

});


describe('Certificate', () =>{
	it('deploys a contract', () => {
		//console.log(inbox);
		assert.ok(certificate.options.address); //check if deployed. ok - check if value exists
	});

	//no change to blockchain made
	

	// //makes changes
	// it('can change the message', async() => {
	// 	await inbox.methods.setMessage('bye').send({from :accounts[0]}); // who will pay the gas?
	// 	const message = await inbox.methods.message().call();
	// 	assert.equal(message, 'bye');
	// });
});