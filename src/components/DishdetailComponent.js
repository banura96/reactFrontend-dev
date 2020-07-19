import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
// import Moment from "react-moment";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderDish(dish) {
    if (dish != null)
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">           
            <Card>            
              <CardBody>
              <CardText>
                <strong>Comments</strong>
                </CardText>  
                  {dish.comments.map((cmt) => {
                    return (
                      <div key={cmt.id}> <CardText>
                        {cmt.comment} </CardText>                   
                        <CardText>--{cmt.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</CardText>
                        <div></div>
                      </div>                     
                    );
                  })}              
              </CardBody>            
            </Card>
          </div>
          </div>
      );
    else return <div></div>;
  }

  render() {
    return <div className="container">{this.renderDish(this.props.dish)}</div>;
  }
}
export default Dishdetail;
