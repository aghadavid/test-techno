import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./slider.css"

const Slider = ({param}) =>
     (
    <div className='w-full h-[10rem]'>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
             {param.banner.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="flex items-center justify-center h-full bg-gray-200">
                        <img src={item} alt={item} className="object-cover w-full h-full" />
                        
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    </div>
);

export default Slider;
