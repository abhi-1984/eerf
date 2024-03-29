import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import image1 from "../assets/hero-1.jpg"
import image2 from "../assets/hero-2.jpg"

export default function HeroSlider() {
  return (
    <section className="w-full min-h-[320px] md:min-h-[640px] relative">
      
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 1000
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full h-full absolute inset-0"
      >
        <SwiperSlide>
            <img src={image1.src} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={image2.src} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
        
      </Swiper>

      <div className="absolute inset-0 p-5 z-10 pointer-events-none text-white grid place-items-center text-center">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">Creating more Inclusive World</h1>
          <p className="max-w-[56ch] mx-auto md:text-2xl">
            Our organization aims to create a universal platform for
            communities, promote harmony among them, and raise awareness about
            various aspects of human life through mass communication.
          </p>
        </div>
      </div>
    </section>
  )
}
