import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, InputGroup, Col, Row, Container} from 'reactstrap';
import web3 from '../Ethereum/web3';
import certificate from '../Ethereum/Contracts/certificateInstance';
import hash from 'object-hash';
import Link from 'next/link';

var h = '';
var tx = {
	logo: "sdfsdf",
	cname: "",
	fname: "",
	lname: "",
	desc: "",
	date: "",
	sign: ""
}

class VerifyCert extends Component{

	constructor(props){
		super(props);

		this.state = {
			tx: tx
		}
	}

	setJson(e){
		var json = e.target.files;
		var reader = new FileReader();
		 reader.readAsDataURL(json[0]);
		 reader.addEventListener('load', function(){
			tx = JSON.parse(atob(reader.result.substring(29)));		
			
			h = tx.txHash;
			delete tx.txHash ;
			console.log(typeof tx);
		});
	}

	async verify(){
		this.setState({tx});
		console.log(typeof tx);
		var hashedCert = hash(tx);
		var transaction = await web3.eth.getTransaction(h);
		var functionSignature = web3.eth.abi.encodeFunctionSignature('upload(string)');
		var input2 = web3.eth.abi.decodeParameter('string', transaction.input.replace(functionSignature, ''));
		if(hashedCert == input2) alert('Success! The certificate is verified.');
		else alert("Failure! The certificate is not verified.");
	}

	render(){
		return (
			<div>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"/>
			
			<Input type="file" onChange={(e) => this.setJson(e)} >Upload JSON file for verification</Input> <br/>
			<Button color="success" onClick={() => this.verify()}>Verify</Button> <br />

			<Container padding = {10} className = "block-example border border-dark">
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
						<Label value={this.state.tx.logo}
			      		 /><br />
					</Col>
			      	<Col  sm = {{size:'auto', offset:0}}>
			      	<Label value={this.state.tx.cname}
			      	/><br />
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
			      	<Label value={this.state.tx.fname}
			      	/><br />
			      	</Col>
			      	<Col  sm = {{size:'auto', offset:1}} >
			      	<Label value={this.state.tx.lname}
			      	/><br />
			      	</Col>
			      	</Row>
			      	</FormGroup>

			      	<FormGroup>
			      	<Row>
			      	<Col sm = {{size:5, order:5, offset:3}}> 
			      	<Label value={this.state.tx.desc}
			      	/><br />
					</Col>
					</Row>
					</FormGroup>

					<FormGroup>
					<Row>
					<Col  sm = {{size:'auto', offset:2}}>		      
			      	<Label value={this.state.tx.date}
			      	/><br />
			      	</Col>
			      	<Col  sm = {{size:'auto', offset:3}}>	
			      	<Label value={this.state.tx.sign}
			      	/><br />
			      	</Col>
			      	</Row>
			      	</FormGroup>

			      	
			      

			      	</Form>
				</Container>
			</div>
		);
	}
}

export default VerifyCert;


// <Button onClick={() => this.verify()}> Verify Certificate </Button>