import React, {Component}  from "react";
import {Card, CardBody, CardTitle, CardText, CardImg,  
  Button, Form, FormGroup,Input, Label} from "reactstrap";

  const initialComment ={
    name:'',
    textarea:'',
    rating:'1', 
}
class Dishdetail extends Component{
  // Modal, ModalBody, ModalHeader,
constructor(props){
  super(props)
  this.state={
    // isModelOpen:false,

      name:'',
      textarea:'',
      rating:'1',
      nameError:'',
      initialState:initialComment,

  
    touched : {
      name:false,
      textarea:false
    }

   
  }


  // this.name = React.createRef();
  // this.rating = React.createRef();
  // this.textarea = React.createRef();


  this.modalOpen = this.modalOpen.bind(this);
  // this.handleLogin = this.handleLogin.bind(this);
  this.handleBlur =this.handleBlur.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
  // this.handleInputChange = this.handleInputChange.bind(this)
}

modalOpen(){
  this.setState({
    isModelOpen:!this.state.isModelOpen
  })
}

// handleLogin(event) {
//   this.modalOpen();
//   if(event){
//     alert("Username: " + this.username.value + " Password: " + this.password.value
//     + " Remember: " + this.remember.checked);
// event.preventDefault();
//   }
// }

handleBlur =(field)=>(evt)=>{
  this.setState({
    touched:{...this.state.touched, [field]:true}
  })
}

validate(){
  // let nameError = '';
  if(this.state.name.length < 3){
    console.log("i run")
   
    this.setState({
      nameError : 'Must be greater than 2 characters'
    })
    return false;
  }
  // if(this.nameError){
  //   console.log("i am true")
 
  // }
  // else if(this.state.touched.name && this.state.name.length>15){
  //   errors.name = 'Must be 15 characters or less';
  // }
  return true;
}

handleInputChange=(event)=>{
  // this.setState({
  //   name : event.target.value,
  //   rating:event.target.value,
  //   textarea:event.target.value
  // })
  const target = event.target;
  const value = target.name === 'isGoing' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
 
}


handleSubmit=(event)=>{
  event.preventDefault();
    const isValid = this.validate();
    if(isValid){
      alert("Content is" +  this.state.name)
      console.log(this.state.name.length)
      this.setState({
        initialState:initialComment
      })
      event.preventDefault();
    }
  
 

}

  render(){
    // const errors = this.validate(this.state.name)
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                width="100%"
                top
                src={this.props.dish.image}
                alt={this.props.dish.name}
              />
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardBody>
                <CardText>
                  <strong>Comments</strong>
                </CardText>
                {this.props.comments.map((cmt) => {
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
              <div>
                <Button outline color="secondary" onClick={this.modalOpen}>
                  <i className="fa fa-pencil" aria-hidden="true"></i> Submit Comment
                </Button>
              </div>
            </Card>
          </div>
        </div>
        {/* <Modal isOpen={this.state.isModelOpen} toggle={this.modalOpen}>
          <ModalHeader>Submit Comment</ModalHeader>
          <ModalBody> */}
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="rating">Rating</Label>
                <Input
                  type="select"
                  id="rating"
                  name="rating"
                  // onBlur={this.handleBlur('rating')}
                  onChange={this.handleInputChange}
                  // innerRef={(input) => this.rating = input}
                  value={this.state.rating}
                  // ref={this.rating}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>

                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Your Name</Label>
                <Input  
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  // valid={errors.name === ''}
                  // invalid={errors.name !== ''}
                  onBlur={this.handleBlur('name')}
                  onChange={this.handleInputChange}
                  // innerRef={(input) => this.name = input}
                  value={this.state.name}
                  // ref={this.name}
                  // onBlur={this.handleBlur('name')}
                />
                <div style={{color:"red"}}>{this.state.nameError}</div>
              </FormGroup>  
              <FormGroup>
                <Label htmlFor="textarea">Comment</Label>
                <Input type="textarea"
                name="textarea" 
                id="textarea" 
                rows="6" 
                value={this.state.textarea}
                // innerRef={(input) => this.textarea = input}
                // onBlur={this.handleBlur('textarea')}
                // ref={this.textarea}                  
                onChange={this.handleInputChange}
                  />
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </Form>
          {/* </ModalBody>
        </Modal> */}
      </div>
    );
  }
}  
   

export default Dishdetail;
