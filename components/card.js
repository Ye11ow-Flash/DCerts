import React, { Component } from 'react';
// import styles from './card.css';

import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
       <img />
       <img />
       <img />

        <Row>

        <Col xs="12" md="2"></Col> 
          <Col xs="12" md="9">        
            <Card>
              <CardHeader>
                <strong></strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  
                  <FormGroup row>
                    <Col xs="12" md="4">
                      <Col md="3">
                        <Label htmlFor="file-input">Logo</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="sign" name="file-input" />
                      </Col>
                    </Col>
                    <Col xs="12" md="4">
                      <Input type="text" className=" c_name"id="c_name" name="text-input" placeholder="Company Name" /> 
                    </Col>
                  </FormGroup>

                  <Row>
                  <Col xs="12">
                    <FormGroup>
                    <center><h1>
                      <Label>Certificate of Recognition</Label></h1>
                    </center>
                    </FormGroup>
                  </Col>
                </Row>


                  <FormGroup row>
                  <Col xs="12" md="3"></Col>
                    <Col xs="12" md="6">
                      <Input type="text" id="name" name="text-input" placeholder="Name"/>                     
                    </Col>
                  </FormGroup>

                  
                  <FormGroup row>
                  <Col xs="12" md="3"></Col>
                    <Col xs="12" md="6">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="In recognition for your outstanding academic performance, and your efforts in assisting others to achieve their goals. Your volunteer services for students with learning disabilities has resulted in a rise in their academic performance as well." />
                    </Col>
                  </FormGroup>
                                   
                  <FormGroup row>

                    <Col xs="12" md="3">
                      <Input type="date" className="d" id="date-input" name="date-input" placeholder="date" />
                    </Col>

                    <Col xs="12" md="5"></Col>

                    <Col xs="12" md="4">
                      <Col md="3">
                        <Label htmlFor="file-input">Signature</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="sign" name="file-input" />
                      </Col>
                    </Col>

                  </FormGroup>

                  <FormGroup row hidden>
                    <Col md="3">
                      <Label className="custom-file" htmlFor="custom-file-input">Signature</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Label className="custom-file">
                        <Input className="custom-file sign" type="file" id="custom-file-input" name="file-input" />
                        <span className="custom-file-control sign"></span>
                      </Label>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>

              <CardFooter>
              <center>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Certify</Button>
              </center>
              </CardFooter>
            </Card>



          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
