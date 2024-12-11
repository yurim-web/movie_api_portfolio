"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <section
      style={{
        width: "100%",
        height: "600px",
        padding: "50px 0px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid #eeee",
          borderRadius: "30px",
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000 }}
          navigation={true}
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "30px",
          }}
        >
          <SwiperSlide>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url('https://image.tmdb.org/t/p/original/mQZJoIhTEkNhCYAqcHrQqhENLdu.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url('https://image.tmdb.org/t/p/original/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: " repeat-x",
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url('https://image.tmdb.org/t/p/original/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
