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
let sig, pk;
class VerifyCert extends Component{

	constructor(props){
		super(props);

		this.state = {
			tx: {
				logo: "abcd"
			}
		}
	}

	setJson(e){
		var json = e.target.files;
		var reader = new FileReader();
		 reader.readAsDataURL(json[0]);
		 reader.addEventListener('load', function(){
			tx = JSON.parse(atob(reader.result.substring(29)));		
			h = tx.txHash;
			sig = tx.digitalSignature.replace('\"', '').replace('\"', '');
			pk = tx.pk;
			delete tx.pk;
			delete tx.txHash ;
			delete tx.digitalSignature;
			console.log(typeof tx);
		});
	}

	async verify(){
		this.setState({tx});
		console.log(typeof tx);
		var hashedCert = hash(tx);
		console.log("sig " + sig);
		var transaction = await web3.eth.getTransaction(h);
		var functionSignature = web3.eth.abi.encodeFunctionSignature('upload(string)');
		var input2 = web3.eth.abi.decodeParameter('string', transaction.input.replace(functionSignature, ''));
		input2 = input2.replace('\"', '');
		console.log("input2 = " + input2);
		if(input2 === hashedCert) alert("Certificate contents verified");
		else alert("Certificate contents not verified");
		var fromAccount = transaction.from;
		
		var method = 'personal_ecRecover';
		var params = [hashedCert, sig];

		web3.currentProvider.sendAsync({
			method,
			params,
			fromAccount
		}, function(err, result){
			var recovered = fromAccount;
			console.log("recovered " + recovered);
			console.log("from " + fromAccount);
			if(recovered === pk) alert("Sender verified");
			else alert("Sender not verified");
		});
	}

// 	personalSignButton.addEventListener('click', function(event) {
//   event.preventDefault()
//   var text = terms
//   var msg = ethUtil.bufferToHex(new Buffer(text, 'utf8'))
//   // var msg = '0x1' // hexEncode(text)
//   console.log(msg)
//   var from = web3.eth.accounts[0]
//   if (!from) return connect()

//   /*  web3.personal.sign not yet implemented!!!
//    *  We're going to have to assemble the tx manually!
//    *  This is what it would probably look like, though:
//     web3.personal.sign(msg, from) function (err, result) {
//       if (err) return console.error(err)
//       console.log('PERSONAL SIGNED:' + result)
//     })
//   */

//    console.log('CLICKED, SENDING PERSONAL SIGN REQ')
//   var params = [msg, from]
//   var method = 'personal_sign'

  // web3.currentProvider.sendAsync({
  //   method,
  //   params,
  //   from,
  // }, function (err, result) {
  //   if (err) return console.error(err)
  //   if (result.error) return console.error(result.error)
  //   console.log('PERSONAL SIGNED:' + JSON.stringify(result.result))

  //   console.log('recovering...')
  //   const msgParams = { data: msg }
  //   msgParams.sig = result.result
  //   console.dir({ msgParams })
  //   const recovered = sigUtil.recoverPersonalSignature(msgParams)
  //   console.dir({ recovered })

  //   if (recovered === from ) {
  //     console.log('SigUtil Successfully verified signer as ' + from)
  //   } else {
  //     console.dir(recovered)
  //     console.log('SigUtil Failed to verify signer when comparing ' + recovered.result + ' to ' + from)
  //     console.log('Failed, comparing %s to %s', recovered, from)
  //   }


//     /*
//     method = 'personal_ecRecover'
//     var params = [msg, result.result]
//     web3.currentProvider.sendAsync({
//       method,
//       params,
//       from,
//     }, function (err, recovered) {
//       console.dir({ err, recovered })
//       if (err) return console.error(err)
//       if (result.error) return console.error(result.error)
//       if (result.result === from ) {
//         console.log('Successfully verified signer as ' + from)
//       } else {
//         console.log('Failed to verify signer when comparing ' + result.result + ' to ' + from)
//       }
//     })
//     */
//   })

// })

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
						<Label
			      		 >{this.state.tx.logo}</Label><br />
					</Col>
			      	<Col  sm = {{size:'auto', offset:0}}>
			      	<Label 
			      	>{this.state.tx.cname}</Label><br />
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
			      	<Label 
			      	>{this.state.tx.fname}</Label><br />
			      	</Col>
			      	<Col  sm = {{size:'auto', offset:1}} >
			      	<Label 
			      	>{this.state.tx.lname}</Label><br />
			      	</Col>
			      	</Row>
			      	</FormGroup>

			      	<FormGroup>
			      	<Row>
			      	<Col sm = {{size:5, order:5, offset:3}}> 
			      	<Label 
			      	>{this.state.tx.desc}</Label><br />
					</Col>
					</Row>
					</FormGroup>

					<FormGroup>
					<Row>
					<Col  sm = {{size:'auto', offset:2}}>		      
			      	<Label 
			      	>{this.state.tx.date}</Label><br />
			      	</Col>
			      	<Col  sm = {{size:'auto', offset:3}}>	
			      	<Label 
			      	>{this.state.tx.sign}</Label><br />
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