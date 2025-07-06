import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Will Smith",
      company: "Harper Education",
      rating: 5.0,
      comment: "The designs exceeded our expectations! Every element felt purposeful, creating a seamless and visually stunning brand identity",
      image: "https://framerusercontent.com/images/eFraHAe16muHsBuOQT8J7PtnM.png"
    },
    {
      id: 2,
      name: "Ikta Sollork",
      company: "PARAL CEO",
      rating: 4.7,
      comment: "Working with this process was effortless. The vision was understood perfectly, and the designs truly represent my brand",
      image: "https://framerusercontent.com/images/54tqpXnovhmg1DaaTUMYucwnE.png"
    },
    {
      id: 3,
      name: "Liloch",
      company: "AIO Founder",
      rating: 5.0,
      comment: "Exceptional creativity and attention to detail! The final product not only looks great but also enhances user engagement",
      image: "https://framerusercontent.com/images/8vljaI1ESGZN8BSOxNQ8nHJdCw.png"
    },
    {
      id: 4,
      name: "Diane Swag",
      company: "Swag Studio",
      rating: 5.0,
      comment: "A game-changing experience! The design process was smooth, collaborative, and resulted in a brand presence we're proud of",
      image: "https://framerusercontent.com/images/hmr5CgOg36xVV5pHu3aQPFGu9U.png"
    }
  ];

  const stats = [
    { value: "100+", label: "Happy clients" },
    { value: "$250m", label: "revenue added" },
    { value: "4.8", label: "Average Rating" }
  ];

  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-50 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto md:px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="mb-8">

            <div className="inline-flex items-center gap-2 px-5 py-2 mt-3 mb-4 rounded-full text-white dark:bg-[#1a1a1a] bg-[#111111] shadow-[0_4px_20px_rgba(0,0,0,0.4),_inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-md" aria-label="Available for work">
            <div className="bg-white rounded-full p-[2px]">
              <div className="bg-[#111111] rounded-[6px] p-[2px]">
                <div className="bg-white rounded-full w-1.5 h-1.5 animate-ping" />
              </div>
            </div>
            <span className="text-sm font-semibold font-framer-font-family">Happy Clients</span>
          </div>
              
              <h2 className="text-4xl text-[#111111] md:text-4xl font-bold mb-4 font-framer-font-family">
                Clients <span className="text-[#111111]/60">Appreciate My Work</span>
              </h2>
              
              <p className="text-lg text-[#111111]/80 mb-8">
                Partnered with 100+ brands to deliver impactful digital experiences and drive over $250M in growth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map(({value,label},index) => (
                <div key={index} className="bg-[#111111] rounded-lg py-8 px-0 shadow-[0_4px_20px_rgba(0,0,0,0.4),_inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <h3 className="text-2xl font-bold text-center">{value}</h3>
                  <p className="text-center text-white/50 text-sm">{label}</p>
                </div>
              ))}
            </div>

            <div className="h-px bg-white/10 my-8"></div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="./projects" 
                className="bg-gradient-to-b from-[#272727] to-[#030303] text-white md:px-6 px-4 md:py-3 py-2 rounded-full font-medium shadow-lg"
              >
                See All Projects
              </Link>
              <Link 
                href="./contact" 
                className="bg-gradient-to-b from-white to-gray-600 text-black md:px-6 px-4 md:py-3 py-2 rounded-full font-medium"
              >
                Contact Now
              </Link>
            </div>
          </div>

          {/*  Grid */}
          <div className="md:w-1/2 grid md:grid-cols-2 gap-4">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-gradient-to-br from-gray-600 via-gray-900 to-black rounded-xl p-6 shadow-lg relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden mr-3">
                      <Image 
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="h-px bg-white/10 my-4"></div>

                  <div className="flex items-center mb-4">
                    <span className="text-sm text-white/60 mr-2">{testimonial.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill={i < Math.floor(testimonial.rating) ? "gold" : i < testimonial.rating ? "url(#half-fill)" : "none"}
                          stroke="gold"
                          width="18"
                          height="18"
                        >
                          {i < testimonial.rating && i >= Math.floor(testimonial.rating) && (
                            <defs>
                              <linearGradient id="half-fill">
                                <stop offset="50%" stopColor="gold" />
                                <stop offset="50%" stopColor="transparent" />
                              </linearGradient>
                            </defs>
                          )}
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p className="text-white/70 mb-4">{testimonial.comment}</p>
                </div>

                {/* Background blur effect */}
                <div className="absolute inset-0 opacity-25 blur-xl">
                  <Image 
                    src={testimonial.image}
                    alt=""
                    fill
                    className="object-cover brightness-50"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;