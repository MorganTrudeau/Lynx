import React, { Component } from 'react';
import '../styles/component.css';

const Carousel = require('react-bootstrap/lib/Carousel');
const Button = require('react-bootstrap/lib/Button');

class CarouselComp extends Component {
  render() {
    return (
      <div className="carousel">
        <Carousel controls={false} pauseOnHover={false}>
          {this.props.pictures.map((pic) => 
            <Carousel.Item>
              <img src={pic.pic} alt={pic.alt} />
            </Carousel.Item>
          )}
        </Carousel>
        <div className="blanket"></div>
        <div className="hoverDiv">
          <h1>Good Company</h1>
          <h3>Something that makes people like you</h3>
          <Button bsSize="large" className="whiteButton"><b>GET A QUOTE</b></Button>
        </div>
      </div>
    );
  }
}

export default CarouselComp;
