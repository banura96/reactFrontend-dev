import React, {Component}  from "react";
import {Card, CardBody, CardTitle, CardText, CardImg,  
  Button, Row, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import { Control, LocalForm, Errors} from 'react-redux-form';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderComments({comments}) {
  return(
 <Card>
              <CardBody>
                <CardText>
                  <strong>Comments</strong>
                </CardText>
                {comments.map((cmt) => {
                  return (
                    <div key={cmt.id}>
                      {" "}
                      <CardText>{cmt.comment} </CardText>
                      <CardText>
                        --{cmt.author}{" "}
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }).format(new Date(Date.parse(cmt.date)))}
                      </CardText>
                      <div></div>
                    </div>
                  );
                })}
              </CardBody>
           
            </Card> 
)
}

function RenderDetails({dish}){
  return(
  <Card>
    <CardImg
      width="100%"
      top
      src={dish.image}
      alt={dish.name}
    />
    <CardBody>
      <CardTitle>{dish.name}</CardTitle>
      <CardText>{dish.description}</CardText>
    </CardBody>
  </Card>)
}


class Dishdetail extends Component{
constructor(props){
  super(props)
  this.state={
    
    isModelOpen:false
  }

  this.modalOpen = this.modalOpen.bind(this);
}

modalOpen(){
  this.setState({
    isModelOpen:!this.state.isModelOpen
  })
}


handleSubmit(values) {
  // console.log('Current State is: ' + JSON.stringify(values));
  // alert('Current State is: ' + JSON.stringify(values));
  this.props.addComment(this.props.dish.id, values.rating, values.author,values.comment)
  // event.preventDefault();
}




  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDetails dish={this.props.dish}/>            
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={this.props.comments}/>
                <Button outline color="secondary" onClick={this.modalOpen}>
                  <i className="fa fa-pencil" aria-hidden="true"></i> Submit
                  Comment
                </Button>
              </div>
          </div>
       
      
        <Modal isOpen={this.state.isModelOpen} toggle={this.modalOpen}>
          <ModalHeader>Submit Comment</ModalHeader>
          <ModalBody>
            <div className="container">
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="rating">Rating</Label>

                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="firstname">Your Name</Label>

                  <Control.text
                    model=".firstname"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Row>
                <Row className="form-group">
                  <Label htmlFor="comment">Comment</Label>

                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows="6"
                    className="form-control"
                  />
                </Row>
                <Row className="form-group">
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Row>
              </LocalForm>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}  
   

export default Dishdetail;
