import React, { useRef } from 'react';
import { PROJECT } from '../utils/project';
import { ProjectCard } from './ProjectCard';
import Slider from 'react-slick';

const Project = () => {
  
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRight = () => {
    sliderRef.current.slickNext();
  }

  const sliderLeft = () => {
    sliderRef.current.slickPrev();
  }

  return (
    <>
      <div className="Project-container" id='projects'>
        <h2 className='Project-MainHeading'>Projects</h2>
        <div className="Project-content">
          <div className="arrow-right" onClick={sliderRight}>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div className="arrow-left" onClick={sliderLeft}>
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {PROJECT.map((item) => (
              <ProjectCard key={item.title} details={item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Project;
