import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, InputGroup, Col} from 'reactstrap';
import web3 from '../Ethereum/web3';
import certificate from '../Ethereum/Contracts/certificateInstance';
import hash from 'object-hash';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import 'jquery/src/jquery';
// import 'bootstrap';

// import {FormControl} from 'react-bootstrap';
var	 x = "";
class CertificateForm extends Component{

	// static async getInitialProps(){
	// 	const accounts = await web3.eth.getAccounts();
	// 	return {accounts: accounts};
	// }

	async componentDidMount(){
		const accounts = await web3.eth.getAccounts();
		this.setState({accounts: accounts});
	}

	constructor(props){
		super(props);
		this.state = {
			logo: "",
			cname: "",
			fname: "",
			lname: "",
			desc: "",
			date: "",
			sign: "",
			txHash: "",
			msg: "Hello"
		};

		
	}


	async signAndSend(){
		var hashedCert = hash(this.state);
		this.setState({msg: "Signing the message.."});
		await web3.eth.sign(hashedCert, this.state.accounts[0], (txHash) => {
			console.log(txHash);
		});
		this.setState({msg: "Signing complete. Uploading to the blockchain.."});
		// await certificate.methods.upload(hashedCert).send({
		// 	from: this.state.accounts[0]
		// }).on('transactionHash', function(txHash){
		// 	x = txHash;
		// });
		this.setState({msg: "Uploaded to blockchain. The transactionHash is {x}"});
	}

	async verify(txHash){
		// console.log("hi");
		var hashedCert = hash(this.state);
		console.log('waiting..');
		var tx = await web3.eth.getTransaction(x);
		console.log('done');
		console.log(tx);
		var functionSignature = web3.eth.abi.encodeFunctionSignature('upload(string)');
		
		// console.log(input.length);
		console.log(tx.input);
		console.log(typeof (tx.input));
		var input2 = web3.eth.abi.decodeParameter('string', tx.input.replace(functionSignature, ''));
		console.log(hashedCert == input2);
		// console.log(tx);
		// console.log(functionSignature);
	}

	render(){



		return (
			      <div>
			      	<input className="abc" type="text" placeholder="logo" 
			      	value={this.state.logo} onChange={(event) => this.setState({logo: event.target.value})} /><br />
			      	<input type="text" placeholder="company name" 
			      	value={this.state.cname} onChange = {(event) => this.setState({cname: event.target.value})}/><br />
			      	<input type="text" placeholder="first name" 
			      	value={this.state.fname} onChange = {(event) => this.setState({fname: event.target.value})}/><br />
			      	<input type="text" placeholder="last name" 
			      	value={this.state.lname} onChange = {(event) => this.setState({lname: event.target.value})}/><br />
			      	<input type="text" placeholder="description" 
			      	value={this.state.desc} onChange = {(event) => this.setState({desc: event.target.value})}/><br />
			      	<input type="date" placeholder="date" 
			      	value={this.state.date} onChange = {(event) => this.setState({date: event.target.value})}/><br />
			      	<input type="text" placeholder="sign" 
			      	value={this.state.sign} onChange = {(event) => this.setState({sign: event.target.value})}/><br />
			      	<Button onClick={() => this.signAndSend()}>Submit</Button> <br />
			      	<Button onClick={() => this.verify(this.txHash)}>Verify</Button> <br />
			      	<input value={this.state.msg} />
			      </div>

			      


		);
	}
}

export default CertificateForm;




// 0x60095ea77f093baf7d12372d68c027f272da667414ce11431aa2c73d63b1b0bb