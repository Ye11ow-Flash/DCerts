const Web3 = require('web3');
let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
	// in browser and mm is running
	web3 = new Web3(window.web3.currentProvider);
} else{
	// we are on server or user not running mm
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/v3/0ee8112fe7754369a520a9182901a8dc'
	);
	web3 = new Web3(provider);
}

export default web3;