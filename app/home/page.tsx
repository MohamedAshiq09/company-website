  // import React from 'react';
  // import ResponsiveNav from '../components/Navigation/ResponsiveNav';

  // const Home: React.FC = () => {
  //   return (
  //     <div className="bg-gray-500 min-h-screen flex flex-col items-center justify-center">
  //       {/* Margin-Bottom for Spacing Between Nav and Content */}
  //       <ResponsiveNav className="mb-10 lg:mb-20" />

  //       {/* Content Section */}
  //       <div className="flex flex-col lg:flex-row items-start justify-between max-w-6xl text-white mt-16 lg:mt-32">
          
  //         {/* Content Box Positioned to the Left */}
  //         <div className="lg:w-1/2 space-y-6 p-6 lg:ml-[-30px]"> {/* Adjust left margin */}
  //           <h1 className="text-4xl font-bold">Innovative Solutions for Your Business</h1>
  //           <p className="text-lg">
  //             Company name is a development company based in India with expertise in custom software development, mobile app development, and web development.
  //           </p>
  //           <p className="text-sm">Transforming ideas into reality</p>
  //           <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition">
  //             Get in touch
  //           </button>
  //         </div>

  //         {/* Image Section Positioned to the Right and Slightly Down */}
  //         <div className="relative lg:w-1/2 flex items-center mt-20 justify-center p-6 lg:mr-[-30px] lg:mt-24"> {/* Adjust right margin and top margin */}
            
  //           {/* Large Center Circle Image */}
  //           <div className="w-56 h-56 bg-cover bg-center rounded-full bg-[url('/images/image1.jpg')] flex items-center justify-center"></div>

  //           <div className="absolute w-[450px] h-[450px] top-10 left-10 flex justify-center">
  //             <div
  //               className="w-28 h-28 rounded-full bg-cover bg-center absolute"
  //               style={{
  //                 backgroundImage: "url('/images/image1.jpg')",
  //                 transform: "rotate(-90deg) translateY(-220px) rotate(90deg)",
  //               }}
  //             ></div>
  //             <div
  //               className="w-28 h-28 rounded-full bg-cover bg-center absolute"
  //               style={{
  //                 backgroundImage: "url('/images/image1.jpg')",
  //                 transform: "rotate(-45deg) translateY(-220px) rotate(45deg)",
  //               }}
  //             ></div>
  //             <div
  //               className="w-28 h-28 rounded-full bg-cover bg-center absolute"
  //               style={{
  //                 backgroundImage: "url('/images/image1.jpg')",
  //                 transform: "rotate(0deg) translateY(-220px) rotate(0deg)",
  //               }}
  //             ></div>
  //             <div
  //               className="w-28 h-28 rounded-full bg-cover bg-center absolute"
  //               style={{
  //                 backgroundImage: "url('/images/image1.jpg')",
  //                 transform: "rotate(45deg) translateY(-220px) rotate(-45deg)",
  //               }}
  //             ></div>
  //             <div
  //               className="w-28 h-28 rounded-full bg-cover bg-center absolute"
  //               style={{
  //                 backgroundImage: "url('/images/image1.jpg')",
  //                 transform: "rotate(90deg) translateY(-220px) rotate(-90deg)",
  //               }}
  //             ></div>
  //           </div>

  //           {/* Background Gradient */}
  //           <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-[550px] h-[550px] rounded-full absolute -top-16 -left-10 -z-20 opacity-80"></div>
  //         </div>
  //       </div>

  //       {/* Scroll Down Button */}
  //       <div className="flex justify-center mt-10">
  //         <button className="text-purple-500 text-3xl animate-bounce">⬇️</button>
  //       </div>
  //     </div>
  //   );
  // };

  // export default Home;
  import React from 'react';
  import ResponsiveNav from '../components/Navigation/ResponsiveNav';
  
  const Home: React.FC = () => {
    return (
      <div className="bg-gray-500 min-h-screen flex flex-col items-center justify-center">
        {/* Margin-Bottom for Spacing Between Nav and Content */}
        <ResponsiveNav className="mb-10 lg:mb-20" />
  
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between max-w-6xl text-white mt-16 lg:mt-32">
          
          {/* Content Box Positioned to the Left */}
          <div className="lg:w-1/2 space-y-6 p-6 lg:ml-[-30px]"> {/* Adjust left margin */}
            <h1 className="text-4xl font-bold">Innovative Solutions for Your Business</h1>
            <p className="text-lg">
              Company name is a development company based in India with expertise in custom software development, mobile app development, and web development.
            </p>
            <p className="text-sm">Transforming ideas into reality</p>
            <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition">
              Get in touch
            </button>
          </div>
  
          {/* Image Section Positioned to the Right and Slightly Down */}
          <div className="relative lg:w-1/2 flex items-center mt-20 justify-center p-6 lg:mr-[-30px] lg:mt-24"> {/* Adjust right margin and top margin */}
            
            {/* Large Center Circle Image */}
            <div className="w-56 h-56 bg-cover bg-center rounded-full bg-[url('/images/image1.jpg')] flex items-center justify-center"></div>
  
            <div className="absolute w-[450px] h-[450px] top-10 left-10 flex justify-center">
              {/* Updated Circle Placement for Proper Alignment */}
              <div
                className="w-28 h-28 rounded-full bg-cover bg-center absolute"
                style={{
                  backgroundImage: "url('/images/image1.jpg')",
                  transform: "rotate(-90deg) translateY(-220px) rotate(90deg)",
                }}
              ></div>
              <div
                className="w-28 h-28 rounded-full bg-cover bg-center absolute"
                style={{
                  backgroundImage: "url('/images/image1.jpg')",
                  transform: "rotate(-45deg) translateY(-220px) rotate(45deg)",
                }}
              ></div>
              <div
                className="w-28 h-28 rounded-full bg-cover bg-center absolute"
                style={{
                  backgroundImage: "url('/images/image1.jpg')",
                  transform: "rotate(0deg) translateY(-25added0px) rotate(0deg)",
                }}
              ></div>
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
                  transform: "rotate(90deg) translateY(-240px) rotate(-90deg)",
                
                }}
              ></div>
            </div>
  
            {/* Background Gradient */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-[550px] h-[550px] rounded-full absolute -top-16 -left-10 -z-20 opacity-80"></div>
          </div>
        </div>
  
        {/* Scroll Down Button */}
        <div className="flex justify-center mt-10">
          <button className="text-purple-500 text-3xl animate-spin">⬇️</button>
        </div>
      </div>
    );
  };
  
  export default Home;
  