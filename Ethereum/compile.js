const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Certificates.sol');

const src = fs.readFileSync(campaignPath, 'utf8');

const comp = solc.compile(src, 1);
const output = comp.contracts;
// console.log(output);


fs.ensureDirSync(buildPath);
	
for(let contract in output){
	fs.outputJsonSync(
		path.resolve(buildPath, contract.replace(':', '') + '.json'),
		output[contract]
	);
}

