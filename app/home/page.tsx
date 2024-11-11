import React from 'react';
import ResponsiveNav from '../components/Navigation/ResponsiveNav';

const Home = () => {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-gray-900">
      {/* Navigation */}
      <div className="mb-20 lg:mb-20"><ResponsiveNav /></div>

      {/* Glassy Background Shape */}
      <div 
              className="absolute top-0 border border-thin border-black right-0 w-[1600px] h-[900px] bg-lue-300
  backdrop-blur-lg"
        style={{
          borderBottomLeftRadius: '150% 200%',
          transform: 'translateX(15%) translateY(-20%)',
          backdropFilter: 'blur(10px)',
        }}
      ></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative min-h-screen flex flex-col lg:flex-row items-center justify-center text-white">
        {/* Left Content */}
        <section className="lg:w-1/2 space-y-6 p-6 lg:-ml-10 lg:mr-20">
          <h1 className="text-4xl font-bold">Innovative Solutions for Your Business</h1>
          <p className="text-lg">
            Company name is a development company based in India and it has expertise in custom software development, 
            mobile app development, and web development.
          </p>
          <p className="text-sm">Transforming ideas into reality</p>
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition">
            Get in touch
          </button>
        </section>

        {/* Right Content - Image Section */}
        <section className="relative lg:w-1/2 flex items-center justify-center lg:ml-36 lg:-mr-[100px] p-6">
          {/* Center Image */}
          <div className="w-56 h-56 bg-cover bg-center rounded-full bg-[url('/images/image1.jpg')] flex items-center justify-center relative -ml-12 translate-x-[-10px] translate-y-[30px]">
     </div>
          {/* Circular Positioned Images */}
          <div className="absolute w-[450px] h-[450px] top-10 left-10 flex justify-center">
            {/* Left Side Circles */}
            <div
              className="w-28 h-28 rounded-full bg-cover bg-center absolute"
              style={{
                backgroundImage: "url('/images/image1.jpg')",
                transform: "rotate(-90deg) translate(38px,-280px) rotate(90deg)", 
              }}
            ></div>
            <div
              className="w-28 h-28 rounded-full bg-cover bg-center absolute"
              style={{
                backgroundImage: "url('/images/image1.jpg')",
                transform: "rotate(-45deg) translateY(-250px) rotate(45deg)", 
              }}
            ></div>

            {/* Top Center Circle */}
            <div
              className="w-28 h-28 rounded-full bg-cover bg-center absolute"
              style={{
                backgroundImage: "url('/images/image1.jpg')",
                transform: "rotate(0deg) translateY(-250px) rotate(0deg)",
              }}
            ></div>

            {/* Right Side Circles - Adjusted for Alignment */}
            <div
              className="w-28 h-28 rounded-full bg-cover bg-center absolute"
              style={{
                backgroundImage: "url('/images/image1.jpg')",
                transform: "rotate(45deg) translateY(-250px) rotate(-45deg)", 
              }}
            ></div>
            <div
              className="w-28 h-28 rounded-full bg-cover bg-center absolute"
              style={{
                backgroundImage: "url('/images/image1.jpg')",
                transform: "rotate(90deg) translate(-35px, -270px) rotate(-90deg)"
              }}
            ></div>
          </div>
        </section>
      </div>

      {/* Scroll Indicators */}
      <div className="absolute bottom-8 left-1/4">
        <div className="text-purple-400 text-3xl">↓</div>
      </div>
      <div className="absolute bottom-8 right-1/4">
        <div className="text-purple-400 text-3xl">↓</div>
      </div>
    </div>
  );
};

export default Home;
