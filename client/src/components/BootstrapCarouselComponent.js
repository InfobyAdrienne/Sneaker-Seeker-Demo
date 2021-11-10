import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

class BootstrapCarouselComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        index: 1,  //index which u want to display first
        direction: null, //direction of the carousel..u need to set it to either 'next' or 'prev' based on user click
        interval: 1000,
    }
}
    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-12">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://resources.stuff.co.nz/content/dam/images/4/y/v/k/m/j/image.related.StuffLandscapeSixteenByNine.1420x800.4yvkmr.png/1635889023870.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://resources.stuff.co.nz/content/dam/images/4/y/v/k/m/i/image.related.StuffLandscapeSixteenByNine.1240x700.4yvkmr.png/1635889023870.jpg?format=pjpg&optimize=medium"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://resources.stuff.co.nz/content/dam/images/4/y/v/k/m/q/image.related.StuffLandscapeSixteenByNine.1240x700.4yvkmr.png/1635889023870.jpg?format=pjpg&optimize=medium"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default BootstrapCarouselComponent;