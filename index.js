const web3 = require('./Ethereum/web3');
const cert = require('./certificate');
const hash = require('object-hash');
const CampaignFactory = require('./Ethereum/build/Certificate');

const certificate = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xB9eB184f1c06a35dF14B8F0E0948d3FBe9AB27d6'
);
