import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import axios from 'axios';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';

const Slider = () => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    axios.get('/sliderData.json').then(res => setSlideData(res.data));
  }, []);

  return (
    <div className="min-h-96 border-2">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {slideData.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="relative h-full">
                <img
                  className="h-full w-full object-cover"
                  src={item.imageUrl}
                  alt=""
                />

                <div className="absolute left-0 top-0   h-full w-full  bg-black bg-opacity-50 ">
                  <div className="flex flex-col p-20  text-white items-center justify-center h-full  ">
                    <h3 className="text-4xl text-white font-bold  capitalize ">
                      {item.header}
                    </h3>
                    <p className="text-center text-base">{item.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
