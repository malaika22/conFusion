import React, {Component} from 'react';
import {Button , Label, Modal, ModalBody, ModalHeader, Row, Col} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';




const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen : false
        }
        this.toggleModal = this.toggleModal.bind(this);   
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
      
    }
  render(){
      return(
       <div>
            <Button outline onClick={this.toggleModal} className="mt-20"><span className="fa fa-pencil-alt fa-lg"></span> Submit Comment</Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
               <ModalHeader>Submit Comment</ModalHeader>
               <ModalBody>
                    <LocalForm onSubmit={(values) => {this.handleSubmit(values)}}>
                        <Row>
                            <Label sm={12}> Rating</Label>
                            <Col>
                            <Control.select model='.rating' name='rating' className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="name" sm={12}>Your Name</Label>
                            <Col sm={12} >
                                <Control.text model=".author" id="name" name="name" placeholder="Your name" className="form-control"
                                validators={
                                    {
                                        required, minLength : minLength(2) , maxLength: maxLength(15)
                                    }
                                }
                                />
                                <Errors
                                 className="text-danger"
                                 model=".author"
                                 show="touched"
                                 messages={{
                                     required: 'Required',
                                     minLength: 'Must be greater than 2 characters',
                                     maxLength: 'Must be 15 characters or less'
                                 }}
                                 />
                            </Col>
                        </Row>
                        <Row className="form-group">
                                <Label htmlFor="comment" sm={12}>Your Feedback</Label>
                                <Col sm={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                        <Row className="form-group mt-30">
                                <Col sm={12}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                        </Row>
                    </LocalForm>
               </ModalBody>

            </Modal>


       </div>
      );
  }
}


export default CommentForm;



