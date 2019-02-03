import React, {Component} from 'react';
// import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { Container, Button, Form, FormGroup, Label, Input, FormText, InputGroup, Col, Row} from 'reactstrap';
import web3 from '../Ethereum/web3';
import certificate from '../Ethereum/Contracts/certificateInstance';
import hash from 'object-hash';
import Link from 'next/link';
import Loginform from './loginform';
import MenuCert from './menu';
import Verify from './verify';
class CertMenu extends Component{

	constuctor() {
  this.routeChange = this.routeChange.bind(this);
   }
   routeChange(){
    let path = `./loginform.js`;
    this.props.history.push(path);
    }
 

	render(){
		return(
			<div>
			
			<div>
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" />

				<Form>

					<FormGroup>
					
			      	<Row>
			      	<Col md = {{size:6, offset:2}}>
			      	<Label></Label>
			      	</Col>
			      	<Col md = {{size:6, offset:4}}>
					<Label></Label>
					</Col>
			      	<Col md = {{size:6, offset:6}}>
					<Label></Label>			     
 					</Col>
			      	</Row>
			      	</FormGroup>

					<FormGroup>
					<Row>
			      	<Col md = {{size:6, offset:3}}>
			      	<Label></Label>
			      	</Col>
			      	<Col md = {{size:6, offset:5}}>
					<Label></Label>
					</Col>
			      	<Col md = {{size:6, offset:7}}>
					<Label></Label>			     
 					</Col>
			      	</Row>
			      	</FormGroup>
					<FormGroup>

			      	<Row>
			      	<Col md = {{size:6, offset:3}}>
			      	<Button size = "lg" color="info"onClick={this.routeChange}>Create Certificate</Button> <br />
			      	</Col>
			      	<Col md = {{size:6, offset:5}}>
			      	<Button size = "lg" color="warning" onClick={() => this.signAndSend()}>View Certificate</Button> <br />
			      	</Col>
			      	<Col md = {{size:6, offset:7}}>
			      	<Button size = "lg" color="success" onClick={() => this.signAndSend()}>Verify Certificate</Button> <br />
			      	</Col>
			      	</Row>
			      	</FormGroup>
				</Form>
			</div>
			</div>
		);

	}
}

export default CertMenu;