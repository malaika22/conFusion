import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';




        const RenderDish = ({selectedDish}) => {
                    return(
                        <Card>
                            <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                            <CardBody>
                              <CardTitle>{selectedDish.name}</CardTitle>
                              <CardText>{selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    );
                 }

            const RenderComments = ({comments}) => {
                if(comments!=null){
                   
                    return(
                        <ul className="list-unstyled list-group">
                           {comments.map((comment)=>{
                               return(
                               <li key={comment.id} className="list-group-item">{comment.comment}<br></br> -- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                               );
                           })}
                        </ul>
                    )
                }else{
                    return(
                        <div></div>
                    )
                }
                
            }


            const DishDetail= (props) =>{
                if(props.selectedDish!=null){
                    return(
                         <div className="container">
                             <div className="row">
                            <div className="col-12 col-md-5 m-1">
                                <RenderDish selectedDish={props.selectedDish} />
                            </div>
                            <div className="col-12 col-md-5 m-1">
                                <h4>Comments</h4>
                                <RenderComments comments={props.selectedDish.comments} />
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