// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';



// const Results = (props) => {
//   return (
//     <h1>results page</h1>
//   )
// }
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row, Col, Card, CardBody, CardTitle, CardText, CardImg
} from 'reactstrap'
import './index.css'
import './Search.js'

    const Results = (sneaker) => {
        return (
          <div>
            <div>
               <Row className="App">
                <Col xs="6">
                  <Card>
                    {/* <CardImg top width="100%" src={(sneaker.media.smallImageUrl)}></CardImg> */}
                    <CardBody>
                      <CardTitle>
                        {sneaker.id}
                      </CardTitle>
                      <CardText>
                        {sneaker.retailPrice}
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        )
      }

export default Results