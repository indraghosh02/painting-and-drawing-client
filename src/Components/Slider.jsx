import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import '../css/style.css';
import { Navigation,Autoplay } from 'swiper/modules';
const Slider = () => {
    return (
        <div className="flex justify-center items-center w-full h-full mt-10 mb-10">
        <div className="w-full md:w-5/6 ">
         <Swiper
         navigation={true}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={
             {
                 delay:2000
             }
          }
         >
             <SwiperSlide>
             <div className="relative">
                         <div className="slide slide1">
                             
                         </div>
                     </div>
             </SwiperSlide>

             <SwiperSlide>
             <div className="relative">
                         <div className="slide slide2">
                            
                         </div>
                     </div>
             </SwiperSlide>

             <SwiperSlide>
             <div className="relative">
                         <div className="slide slide3">
                             {/* <h1 className="absolute top-0 text-center w-full rounded-3xl text-white text-6xl font extrabold bg-fuchsia-800 bg-opacity-50">Vacation Rental</h1> */}
                         </div>
                     </div>
         </SwiperSlide>

         <SwiperSlide>
         <div className="relative">
                         <div className="slide slide4">
                            
                         </div>
                     </div>
             </SwiperSlide>
         </Swiper>




       
         
     </div>
  </div>
    );
};

export default Slider;
