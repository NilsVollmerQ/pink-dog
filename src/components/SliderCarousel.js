import PropTypes from 'prop-types';
import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'


const CarouselContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;
  padding-bottom: 40px;
  box-shadow: 0 2px 1px #f0f1f2;

  .slides {
    position: relative;
    .slick-prev, .slick-next {
      position: absolute;
      top: 50%;
    }
    .slick-prev {
      left: 20px;
      z-index: 1;
    }
    .slick-next {
      right: 20px;
      z-index: 1;
    }
  }
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`

class SliderCarousel extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'Title',
  }

  render() {
    const { title, children } = this.props;
    const settings = {
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      className: 'slides',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <CarouselContainer>
        <Title>{title}</Title>
        <Slider {...settings}>
          {children.map((child, index) => <div key={index}>{child}</div>)}
        </Slider>
      </CarouselContainer>
    );
  }
}

export default SliderCarousel
