import React  from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


 function RenderDish({dish,comments}) {
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
                  {comments.map((cmt) => {
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

 const Dishdetail=(props)=>{
  return <div className="container"><RenderDish dish={(props.dish)} comments={(props.comments)}/></div>;
 }
   

export default Dishdetail;
