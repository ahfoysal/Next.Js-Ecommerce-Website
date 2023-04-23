import { useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';


const HeroCarousel = ({ data }) => {
    
  return (
    <div className='mt-3'>
      <Splide
        id="hero-carousel"
        className={`splide heroCarousel`}
        options={{
          lazyLoad: 'nearby',
          type: 'loop',
          rewind: true,
          focus: 'center',
          drag: true,
          autoplay: false,
          interval: 4500,
          keyboard: true,
          autoWidth: true,
          autoHeight: true,
          padding: 0,
          arrows: true,
          pagination: true,
        }}
      >
        {data.map((item) => (
          <SplideSlide key={item.title}>
            <section className={`hero`}>
              <img className={`image`}  src={item.img} />
              
              <div className={`hero-content`}>
                <h1 className={`title`}>{item.title} </h1>

                <p className={`summary`}>{item.description}</p>
                <button className='custom-btn btn-11'>Shop Now</button>
              </div>
            </section>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default HeroCarousel;
