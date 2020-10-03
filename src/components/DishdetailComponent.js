import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';



class DishDetail extends Component{
            constructor(props){
                super(props);
            }

            renderDish(selectedDish) {
                    return(
                        <Card>
                            <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                            <CardBody>
                              <CardTitle>{this.props.selectedDish.name}</CardTitle>
                              <CardText>{this.props.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    );
                 }
                 renderDate(date){
                    let dateArr = date.split(" ", 4);
                    return `${dateArr[1]} ${dateArr[2]} , ${dateArr[3]}`;
                 }
            renderComments(comments){
                if(comments!=null){
                   
                    return(
                        <ul className="list-unstyled list-group">
                           {comments.map((comment)=>{
                               return(
                               <li key={comment.id} className="list-group-item">{comment.comment}<br></br> -- {comment.author} , {this.renderDate(new Date(comment.date).toString())}</li>
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


    render(){
        if(this.props.selectedDish!=null){
            return(
                 <div className="container">
                     <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.selectedDish.comments)}
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
}

export default DishDetail;