import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

class BootstrapCarouselComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        index: 1,  //index which u want to display first
        direction: null, //direction of the carousel..u need to set it to either 'next' or 'prev' based on user click
        // interval: (1000),
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
                        <div className="col-sm-12">
                            <Carousel interval='3000'>

                                <Carousel.Item>
                                    <img
                                        className="d-block mx-auto w-50"
                                        src="https://image.goat.com/crop/2200/attachments/product_template_additional_pictures/images/061/099/893/original/786348_01.jpg.jpeg?1632922701"
                                        alt="First slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block mx-auto w-50"
                                        src="https://image.goat.com/crop/2200/attachments/product_template_additional_pictures/images/062/098/198/original/793043_01.jpg.jpeg?1634837591"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block mx-auto w-50"
                                        src="https://image.goat.com/crop/1500/attachments/product_template_additional_pictures/images/060/556/802/original/815475_01.jpg.jpeg?1631906017"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block mx-auto w-50"
                                        src="https://image.goat.com/crop/1800/attachments/product_template_additional_pictures/images/044/126/474/original/693037_01.jpg.jpeg?1603126875"
                                        alt="Fourth slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block mx-auto w-50"
                                        src="https://image.goat.com/crop/1800/attachments/product_template_additional_pictures/images/010/244/932/original/178964_01.jpg.jpeg?1519794302"
                                        alt="Fifth slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block mx-auto w-50"
                                        src="https://image.goat.com/crop/2200/attachments/product_template_additional_pictures/images/058/281/112/original/784741_01.jpg.jpeg?1627996380"
                                        alt="Sixth slide"
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block mx-auto w-50"
                                        src="https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/059/096/663/original/784809_01.jpg.jpeg?1629385446"
                                        alt="Seventh slide"
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