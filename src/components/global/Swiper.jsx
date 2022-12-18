// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SlideCard from "../cards/SlideCard";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Swiper spaceBetween={70} slidesPerView={2.2} loop={true}>
      <SwiperSlide>
        <SlideCard
          img="/assets/sliderImg1.png"
          name="Alex andrina"
          desc="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideCard
          img="/assets/sliderImg1.png"
          name="Alex andrina"
          desc="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideCard
          img="/assets/sliderImg1.png"
          name="Alex andrina"
          desc="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideCard
          img="/assets/sliderImg1.png"
          name="Alex andrina"
          desc="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
        />
      </SwiperSlide>
    </Swiper>
  );
};
