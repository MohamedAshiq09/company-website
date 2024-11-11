import React from 'react';
import ResponsiveNav from '../components/Navigation/ResponsiveNav';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-600 min-h-screen flex flex-col items-center justify-center">
      <ResponsiveNav />

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl text-white mt-16">
        <div className="lg:w-1/2 space-y-6 p-6">
          <h1 className="text-4xl font-bold">Innovative Solutions for Your Business</h1>
          <p className="text-lg">
            Company name is a development company based in India with expertise in custom software development, mobile app development, and web development.
          </p>
          <p className="text-sm">Transforming ideas into reality</p>
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition">
            Get in touch
          </button>
        </div>

        {/* Image */}
        <div className="relative lg:w-1/2 flex items-center justify-center p-6">
          {/* Large Center Circle */}
          <div className="w-48 h-48 bg-cover bg-center rounded-full bg-[url('/images/image1.jpg')] flex items-center justify-center"></div>

          <div className="absolute w-96 h-96 top-0 left-0 right-0 mx-auto flex justify-center">
            <div
              className="w-24 h-24 rounded-full bg-cover bg-center absolute"
              style={{
                backgroundImage: "url('/images/image1.jpg')",
                transform: "rotate(-90deg) translateY(-150px) rotate(90deg)",
              }}
            ></div>
            <div
              className="w-24 h-24 rounded-full bg-cover bg-center absolute"
              style={{
                backgroundImage: "url('/images/image1.jpg')",
                transform: "rotate(-45deg) translateY(-150px) rotate(45deg)",
              }}
            ></div>
            <div
              className="w-24 h-24 rounded-full bg-cover bg-center absolute"
              style={{
                backgroundImage: "url('/images/image1.jpg')",
                transform: "rotate(0deg) translateY(-150px) rotate(0deg)",
              }}
            ></div>
            <div
              className="w-24 h-24 rounded-full bg-cover bg-center absolute"
              style={{
                backgroundImage: "url('/images/image1.jpg')",
                transform: "rotate(45deg) translateY(-150px) rotate(-45deg)",
              }}
            ></div>
            <div
              className="w-24 h-24 rounded-full bg-cover bg-center absolute"
              style={{
                backgroundImage: "url('/images/image1.jpg')",
                transform: "rotate(90deg) translateY(-150px) rotate(-90deg)",
              }}
            ></div>
          </div>

          {/* Background Gradient */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-96 h-96 rounded-full absolute -top-16 -right-10 -z-10"></div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="flex justify-center mt-10">
        <button className="text-purple-500 text-3xl animate-bounce">⬇️</button>
      </div>
    </div>
  );
};

export default Home;
