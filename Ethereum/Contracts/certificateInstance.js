import web3 from '../web3';
import Certificate from '../build/Certificate.json';

const instance = new web3.eth.Contract(
	JSON.parse(Certificate.interface),
	'0xB9eB184f1c06a35dF14B8F0E0948d3FBe9AB27d6'
);

export default instance;

