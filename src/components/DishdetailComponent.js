import React, {Component} from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem,Label, Button, Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

            class CommentForm extends Component {
                constructor(props) {
                    super(props);
                    this.state = {
                    isModalOpen: false,
                    };
                    this.toggleModal = this.toggleModal.bind(this);
                }

                toggleModal() {
                    this.setState({
                    isModalOpen: !this.state.isModalOpen,
                    });
                }

                handleSubmit(values) {
                    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
                }

            render() {
                return (
                <React.Fragment>
                    <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-edit fa-lg"></span> Submit Comment
                    </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={12}>
                            Rating
                            </Label>
                            <Col md={12}>
                            <Control.select
                                model=".rating"
                                defaultValue="1"
                                className="form-control"
                                name="rating"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author" md={12}>
                            Your Name
                            </Label>
                            <Col md={12}>
                            <Control.text
                                model=".author"
                                id="author"
                                className="form-control"
                                name="author"
                                placeholder="Your Name"
                                validators={{
                                required,
                                minLength: minLength(3),
                                maxLength: maxLength(15),
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                required: "Required. ",
                                minLength: "Must be greater than 2 numbers. ",
                                maxLength: "Must be 15 numbers or less. ",
                                }}
                            />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={12}>
                            Comment
                            </Label>
                            <Col md={12}>
                            <Control.textarea
                                model=".comment"
                                id="comment"
                                rows="6"
                                className="form-control"
                                name="comment"
                            />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                            </Col>
                        </Row>
                        </LocalForm>
                    </ModalBody>
                    </Modal>
                </React.Fragment>
                );
            }
            }


        const RenderDish = ({selectedDish}) => {
                    return(
                        <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                            <Card>
                                <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                                <CardBody>
                                    <CardTitle>{selectedDish.name}</CardTitle>
                                    <CardText>{selectedDish.description}</CardText>
                                </CardBody>
                            </Card>
                        </FadeTransform>
                    );
                 }

        function RenderComments({comments, addComment, dishId}) {
                if(comments!=null){
                   
                    return(
                        <div>
                        <ul className="list-unstyled list-group">
                        <Stagger in>
                            {comments.map((comment) => {
                                return (
                                    <Fade in>
                                    <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    </li>
                                    </Fade>
                                );
                            })}
                        </Stagger>
                        </ul>
                        <CommentForm dishId={dishId} addComment={addComment} />
                        </div>   
                    )
                }else{
                    return(
                        <div></div>
                    )
                }
                
            }


            const DishDetail= (props) =>{
                    if (props.isLoading) {
                        return(
                            <div className="container">
                                <div className="row">            
                                    <Loading />
                                </div>
                            </div>
                        );
                    }
                    else if (props.errMess) {
                        return(
                            <div className="container">
                                <div className="row">            
                                    <h4>{props.errMess}</h4>
                                </div>
                            </div>
                        );
                    }
               
                    else if(props.selectedDish!=null){
                        return(
                            <div className="container">
                                <div className="row">
                                    <Breadcrumb>
                                        <BreadcrumbItem> <Link to='/menu'>Menu</Link> </BreadcrumbItem>
                                        <BreadcrumbItem active> {props.selectedDish.name}</BreadcrumbItem>
                                    </Breadcrumb>
                                </div>
                                <div className="row">
                                <div className="col-12 col-md-5 m-1">
                                    <RenderDish selectedDish={props.selectedDish} />
                                </div>
                                <div className="col-12 col-md-5 m-1">
                                    <h4>Comments</h4>
                                    <RenderComments comments={props.comments}
                                        addComment={props.addComment}
                                        dishId={props.selectedDish.id}
                                    />
                                
                                </div>
                                </div>
                            </div>
                        
                        );
                    }else{
                        return(
                            <div></div>
                        );
                    }
            

            }
      

export default DishDetail;