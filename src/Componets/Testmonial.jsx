import React from 'react';
import Slider from "react-slick";
const testimonialData = [
    {
      id: 1,
      name: "Samuel",
      designation:"Lorem ipsum dolor ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      
    },
    {
      id: 1,
      name: "John Doe",
      designation:"Lorem ipsum dolor ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    },
    {
      id: 1,
      name: "Smith",
      designation:"Lorem ipsum dolor ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    },
  ];

const Testmonial = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 12000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-20 bg-slate-100">
        <div className="container">
          {/* Header section */}
          <div className="text-center space-y-4 mb-8 max-w-[800px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-6xl font-bold text-red-600">What Other Says
            </h1>
            <p className="text-xl  text-gray-400">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
              quam! Nulla?
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[1500px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name,designation, text }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-200  relative">
                      <div>
                      <h1 className="text-3xl font-bold text-red-600">{name}</h1>
                      <h1 className="text-xsfont-bold pt-1 text-red-400">{designation}</h1>
                      </div>
                      <p className="text-gray-500 text-sm">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testmonial