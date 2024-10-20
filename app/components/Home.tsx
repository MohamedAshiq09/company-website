// "use client";

// import React, { useEffect } from "react";
// import { motion } from "framer-motion";

// const Home = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.querySelector(".fixed-header");
//       if (window.scrollY > 0) {
//         header?.classList.add("bg-gray-300", "shadow-md");
//       } else {
//         header?.classList.remove("bg-gray-300", "shadow-md");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="relative h-screen w-full bg-cover bg-center"
//         style={{
//           backgroundImage: `url('https://www.shutterstock.com/image-photo/digital-technology-web-course-training-260nw-2298406325.jpg')`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white"
//         >
//           <h1 className="text-4xl font-bold">Welcome to Santhosh!</h1>
//           <p className="mt-4 text-xl">
//             Stay updated with tech news, build your network, and enhance your
//             skills.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
//           >
//             Get Started
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Features Section */}
//       <div className="mt-12 p-4 w-full" id="features">
//         <h2 className="text-3xl font-semibold text-center">Our Features</h2>
//         <p className="mt-4 text-center text-gray-700">
//           Explore our platform’s top features designed to help you grow in your
//           career.
//         </p>
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <motion.div
//             className="p-6 bg-white shadow-lg rounded-lg"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h3 className="text-xl font-bold">Interactive Courses</h3>
//             <p className="mt-2 text-gray-600">
//               Engage with coding exercises and quizzes to learn at your own
//               pace.
//             </p>
//           </motion.div>
//           <motion.div
//             className="p-6 bg-white shadow-lg rounded-lg"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h3 className="text-xl font-bold">Tech News</h3>
//             <p className="mt-2 text-gray-600">
//               Stay informed with the latest updates in technology and software
//               development.
//             </p>
//           </motion.div>
//           <motion.div
//             className="p-6 bg-white shadow-lg rounded-lg"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h3 className="text-xl font-bold">Networking Opportunities</h3>
//             <p className="mt-2 text-gray-600">
//               Connect with professionals and peers to build a strong network.
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Call to Action Section */}
//       <div className="bg-blue-800 text-white py-16 mt-12 w-full">
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <h2 className="text-3xl font-bold">Ready to Start Learning?</h2>
//           <p className="mt-4 text-lg">
//             Sign up today and take your skills to the next level!
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 font-bold rounded-lg"
//           >
//             Join Now
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Testimonials Section */}
//       <div className="py-16 w-full">
//         <h2 className="text-3xl font-semibold text-center">
//           What Our Users Say
//         </h2>
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <motion.div className="p-6 bg-white shadow-lg rounded-lg">
//             <p className="text-gray-600 italic">
//               "Learnopoly has transformed the way I learn! The interactive
//               courses are top-notch."
//             </p>
//             <div className="mt-4 text-right">
//               <span className="text-blue-800 font-bold">- Sarah K.</span>
//             </div>
//           </motion.div>
//           <motion.div className="p-6 bg-white shadow-lg rounded-lg">
//             <p className="text-gray-600 italic">
//               "The tech news section keeps me up-to-date with the latest trends.
//               Highly recommend!"
//             </p>
//             <div className="mt-4 text-right">
//               <span className="text-blue-800 font-bold">- David P.</span>
//             </div>
//           </motion.div>
//           <motion.div className="p-6 bg-white shadow-lg rounded-lg">
//             <p className="text-gray-600 italic">
//               "The networking opportunities I found here have been invaluable
//               for my career growth."
//             </p>
//             <div className="mt-4 text-right">
//               <span className="text-blue-800 font-bold">- Michelle W.</span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-8 mt-16 w-full">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h4 className="font-bold text-xl">Learnopoly</h4>
//             <p className="mt-4 text-gray-400">
//               Your platform to stay updated with tech news, build your network,
//               and enhance your skills.
//             </p>
//           </div>
//           <div>
//             <h4 className="font-bold text-xl">Quick Links</h4>
//             <ul className="mt-4 space-y-2">
//               <li>
//                 <a href="#features" className="hover:underline">
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="#pricing" className="hover:underline">
//                   Plans & Pricing
//                 </a>
//               </li>
//               <li>
//                 <a href="#blog" className="hover:underline">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#signup" className="hover:underline">
//                   Sign Up
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold text-xl">Support</h4>
//             <ul className="mt-4 space-y-2">
//               <li>
//                 <a href="#help" className="hover:underline">
//                   Help Center
//                 </a>
//               </li>
//               <li>
//                 <a href="#privacy" className="hover:underline">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#terms" className="hover:underline">
//                   Terms of Service
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="hover:underline">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold text-xl">Follow Us</h4>
//             <ul className="mt-4 space-y-2">
//               <li>
//                 <a href="#twitter" className="hover:underline">
//                   Twitter
//                 </a>
//               </li>
//               <li>
//                 <a href="#facebook" className="hover:underline">
//                   Facebook
//                 </a>
//               </li>
//               <li>
//                 <a href="#linkedin" className="hover:underline">
//                   LinkedIn
//                 </a>
//               </li>
//               <li>
//                 <a href="#instagram" className="hover:underline">
//                   Instagram
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;
"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  // Hook to track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to start animation for stats
  const startAnimation = () => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    });
  };

  return (
    <div>
      {/* Hero Section with Parallax */}
      <section
      // className="relative h-screen w-full bg-cover bg-center"
      // style={{
      //   backgroundImage: `url('https://www.shutterstock.com/image-photo/digital-technology-web-course-training-260nw-2298406325.jpg')`,
      //   transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect
      // }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white"
        >
          <h1 className="text-4xl font-bold">Welcome to Santhosh!</h1>
          <p className="mt-4 text-xl">
            Stay updated with tech news, build your network, and enhance your
            skills.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="mt-12 p-4 w-full" id="features">
        <h2 className="text-3xl font-semibold text-center">Our Features</h2>
        <p className="mt-4 text-center text-gray-700">
          Explore our platform’s top features designed to help you grow in your
          career.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {[
            {
              title: "Interactive Courses",
              description:
                "Engage with coding exercises and quizzes to learn at your own pace.",
            },
            {
              title: "Tech News",
              description:
                "Stay informed with the latest updates in technology and software development.",
            },
            {
              title: "Networking Opportunities",
              description:
                "Connect with professionals and peers to build a strong network.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Advanced Parallax Section */}
      <section
        className="relative h-[600px] w-full bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url('https://www.shutterstock.com/image-photo/abstract-image-networking-internet-connections-digital-260nw-1655677595.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center"
        >
          <h2 className="text-4xl font-bold">Revolutionizing Learning</h2>
          <p className="mt-4 text-xl">
            Experience seamless education with our interactive platform.
          </p>
        </motion.div>
      </section>

      {/* Stats/Counter Section */}
      <section className="py-16 w-full bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Achievements
        </h2>
        <InView as="div" onChange={(inView) => inView && startAnimation()}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
          >
            {[
              { number: "50,000+", label: "Active Users" },
              { number: "200+", label: "Courses Available" },
              { number: "100+", label: "Industry Partners" },
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-4xl font-bold text-blue-600">
                  {stat.number}
                </h3>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </InView>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 w-full">
        <h2 className="text-3xl font-semibold text-center">
          What Our Users Say
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {[
            {
              quote:
                "Learnopoly has transformed the way I learn! The interactive courses are top-notch.",
              author: "Sarah K.",
            },
            {
              quote:
                "The tech news section keeps me up-to-date with the latest trends. Highly recommend!",
              author: "David P.",
            },
            {
              quote:
                "The networking opportunities I found here have been invaluable for my career growth.",
              author: "Michelle W.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg"
            >
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="mt-4 text-right">
                <span className="text-blue-800 font-bold">
                  - {testimonial.author}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-800 text-white py-16 mt-12 w-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold">Ready to Start Learning?</h2>
          <p className="mt-4 text-lg">
            Sign up today and take your skills to the next level!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 font-bold rounded-lg"
          >
            Join Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
