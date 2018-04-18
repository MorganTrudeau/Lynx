import React, { Component } from "react";
import "../styles/component.css";

const Carousel = require("react-bootstrap/lib/Carousel");

class CarouselComp extends Component {
  render() {
    return (
      <div className="multiCarousel">
        <Carousel controls={false} pauseOnHover={false}>
          <Carousel.Item>
            <div className="gridRow setCol3">
              {this.props.imgs
                ? this.props.imgs.map((img, index) => (
                    <img src={img.src} alt={img.alt} className="coverWidth" />
                  ))
                : null}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselComp;
