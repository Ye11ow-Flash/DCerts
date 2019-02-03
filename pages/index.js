import React, {Component} from 'react';
import CertificateForm from '../components/loginform';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginForm from '../components/loginform';
import Menu from '../components/menu';
import Verify from '../components/verify';
import history from '../history';


class Index extends Component{
	render(){
		return (
			<LoginForm />
			);
	}
}

export default Index;