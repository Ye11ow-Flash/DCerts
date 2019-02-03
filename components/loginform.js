import React, {Component} from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText, InputGroup, Col, Row} from 'reactstrap';
import web3 from '../Ethereum/web3';
import certificate from '../Ethereum/Contracts/certificateInstance';
import hash from 'object-hash';
import Link from 'next/link';

// import InputGroup from 'react-bootstrap';
// import Button from 'react-bootstrap/lib/Button';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import Form from 'react-bootstrap/lib/Form';
// import FormControl from 'react-bootstrap/lib/FormControl';
// const ganache = require('ganache-cli');
// const Web3 = require('web3');
// const web3 = new Web3(ganache.provider());



// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import 'jquery/src/jquery';
// import 'bootstrap';

// import {FormControl} from 'react-bootstrap';
var	 x = "";
var pk = "";
var sign = "";
var cert = {};
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
			done: false,
			cert: cert
		};

		
	}


	// async signAndSend(){
	// 	var hashedCert = hash(this.state);
	// 	console.log("signing");
	// 	console.log(hashedCert);
	// 	// console.log(this.state.accounts[0]);
	// 	var signed = await web3.eth.signTypedData(hashedCert, this.state.accounts[0]);
	// 	// console.log("signed");
		// await certificate.methods.upload(hashedCert).send({
		// 	from: this.state.accounts[0]
		// }).on('transactionHash', function(txHash){
		// 	x = txHash;
		// });
	
	// }

	async signAndSend(){
		var that = this;
		cert = {
			logo: this.state.logo,
			sign: this.state.sign,
			fname: this.state.fname,
			lname: this.state.lname,
			desc: this.state.desc,
			date: this.state.date,
			cname: this.state.cname
		}
		var hashedCert = hash(cert);
		var fromAccount = this.state.accounts[0];
		var params = [hashedCert, fromAccount];
  		var method = 'personal_sign';
		// console.log(this.state.accounts[0]);
		// var signed = await web3.eth.signTypedData(hashedCert, this.state.accounts[0]);
		// console.log("signed");
		// await certificate.methods.upload(hashedCert).send({
		// 	from: this.state.accounts[0]
		// }).on('transactionHash', function(txHash){
		// 	x = txHash;
		// 	// alert('transaction successful. ');
		// 	cert.txHash = x;
		// });
		var signedCert = "";
		web3.currentProvider.sendAsync({
		    method,
		    params,
		    fromAccount,
		  }, async function (err, result) {
		    if (err) return console.error(err)
		    if (result.error) return console.error(result.error)
		    console.log('PERSONAL SIGNED:' + JSON.stringify(result.result))
			signedCert = JSON.stringify(result.result);

			await certificate.methods.upload(hashedCert).send({
				from: fromAccount
			}).on('transactionHash', function(txHash){
				console.log(txHash);
				x = txHash;
				cert.txHash = x;
				cert.digitalSignature = signedCert;
				cert.pk = fromAccount;
				console.log(cert.txHash);
				that.setState({cert: cert, done: true});
			});
		    // console.log('recovering...')
		    // const msgParams = { data: msg }
		    // msgParams.sig = result.result
		    // console.dir({ msgParams })
		    // const recovered = sigUtil.recoverPersonalSignature(msgParams)
		    // console.dir({ recovered })

		    // if (recovered === from ) {
		    //   console.log('SigUtil Successfully verified signer as ' + from)
		    // } else {
		    //   console.dir(recovered)
		    //   console.log('SigUtil Failed to verify signer when comparing ' + recovered.result + ' to ' + from)
		    //   console.log('Failed, comparing %s to %s', recovered, from)
		}
		)
		
		
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
					<Container padding = {10} className = "block-example border border-dark">
			      <div>
			      	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"/>
			      	
					<Form>

					<FormGroup row >
					<Row>
					</Row>
					<Row>
					</Row>
					<Row>
					</Row>
					</FormGroup>
					<FormGroup>
					<Row>
					<Col  sm = {{size:1, offset:2}}>
						<Input  type="text" placeholder="logo" 
			      		value={this.state.logo} onChange={(event) => this.setState({logo: event.target.value})} /><br />
					</Col>
			      	<Col  sm = {{size:'auto', offset:0}}>
			      	<Input type="text" placeholder="company name" 
			      	value={this.state.cname} onChange = {(event) => this.setState({cname: event.target.value})}/><br />
			      	</Col>	
			      	</Row>
			      	</FormGroup>


			      	<FormGroup >
			      	<Row>
			      	<Col sm = {{offset:4}}>
			      	<h2>Certificate Of Recognition</h2>
			      	</Col>
			      	</Row>
			      	
			      	</FormGroup>

			      	<FormGroup>
			      	<Row>
			      	<Col  sm = {{size:'auto', offset:3}}>
			      	<Input type="text" placeholder="first name" 
			      	value={this.state.fname} onChange = {(event) => this.setState({fname: event.target.value})}/><br />
			      	</Col>
			      	<Col  sm = {{size:'auto', offset:1}} >
			      	<Input type="text" placeholder="last name" 
			      	value={this.state.lname} onChange = {(event) => this.setState({lname: event.target.value})}/><br />
			      	</Col>
			      	</Row>
			      	</FormGroup>

			      	<FormGroup>
			      	<Row>
			      	<Col sm = {{size:5, order:5, offset:3}}> 
			      	<Input type="textarea" placeholder="In recognition for your outstanding academic performance, and your efforts in assisting others to achieve their goals. Your volunteer services for students with learning disabilities has resulted in a rise in their academic performance as well." 
			      	value={this.state.desc} onChange = {(event) => this.setState({desc: event.target.value})}/><br />
					</Col>
					</Row>
					</FormGroup>

					<FormGroup>
					<Row>
					<Col  sm = {{size:'auto', offset:2}}>		      
			      	<Input type="date" placeholder="date" 
			      	value={this.state.date} onChange = {(event) => this.setState({date: event.target.value})}/><br />
			      	</Col>
			      	<Col  sm = {{size:'auto', offset:3}}>	
			      	<Input type="text" placeholder="signature" 
			      	value={this.state.sign} onChange = {(event) => this.setState({sign: event.target.value})}/><br />
			      	</Col>
			      	</Row>
			      	</FormGroup>

			      	<FormGroup>
			      	<Row>
			      	<Col md = {{size:6, offset:5}}>
			      	<Button size = "lg" color="primary" onClick={() => this.signAndSend()}>Submit</Button> <br />
			      	</Col>
			      	</Row>
			      	</FormGroup>
			      	</Form>

			      	
			      	<div>
			      		{this.state.done? 
			      	<a
					  className="pull-right btn btn-success"
					  style={{ margin: 10 }}
					  href={`data:text/json;charset=utf-8,${encodeURIComponent(
					  JSON.stringify(cert)
					  )}`}
					  download="certificate.json"
					> Download Data as JSON</a>
					: ''}
			      	</div>
			      	

			      	<div>
					    Click{' '}
					    <Link href="./verify">
					      <a>here</a>
					    </Link>{' '}
					    to read more
					  </div>


			      </div>

			      
			      </Container>
			      


		);
	}
}

export default CertificateForm;




// 0x60095ea77f093baf7d12372d68c027f272da667414ce11431aa2c73d63b1b0bb