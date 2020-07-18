import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import Moment from "react-moment";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comt: null,
    };
  }
  set(dish) {
    this.setState({ comt: dish });
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
            
              <CardTitle><div>
                <strong>Comments</strong></div>
              </CardTitle>
              <CardBody>
                <ul>
                  {dish.comments.map((cmt) => {
                    return (
                      <div key={cmt.id}>
                        {cmt.comment}
                        <div>
                          --{cmt.author} <Moment format="ll">{cmt.date}</Moment>
                        </div>
                      </div>
                    );
                  })}
                </ul>
              </CardBody>
             
            </Card>
          </div>
        </div>
      );
    else return <div></div>;
  }

  render() {
    return <div>{this.renderDish(this.props.dish)}</div>;
  }
}
export default Dishdetail;
