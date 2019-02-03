import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, InputGroup, Col} from 'reactstrap';
import web3 from '../Ethereum/web3';
import certificate from '../Ethereum/Contracts/certificateInstance';
import hash from 'object-hash';
import Link from 'next/link';

var h = '';
let tx;

class VerifyCert extends Component{

	constructor(props){
		super(props);
	}

	async setJson(e){
		var json = e.target.files;
		var reader = new FileReader();
		await reader.readAsDataURL(json[0]);
		reader.onload = (e) => {
			var tx = JSON.parse(atob(e.target.result.substring(29)));			
			h = tx.txHash;
			delete tx.txHash ;
			console.log(typeof tx);
		};
	}

	async verify(){
		console.log(typeof tx);
		var hashedCert = hash(tx);
		var transaction = await web3.eth.getTransaction(h);
		var functionSignature = web3.eth.abi.encodeFunctionSignature('upload(string)');
		var input2 = web3.eth.abi.decodeParameter('string', transaction.input.replace(functionSignature, ''));
		console.log(hashedCert == input2);
	}

	render(){
		return (
			<div>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"/>
			
			<Input type="file" onChange={(e) => this.setJson(e)} >Upload JSON file for verification</Input> <br/>
			<Button color="success" onClick={() => this.verify()}>Verify</Button> <br />
			
			</div>
		);
	}
}

export default VerifyCert;


// <Button onClick={() => this.verify()}> Verify Certificate </Button>