
// import React from 'react';

// const AboutCompany = () => {
//   return (
//     <div className="container mx-auto py-12 px-6">
//       <h2 className="text-3xl font-bold text-center mb-6 text-[#005b66]">About Our Company</h2>
//       <div className="bg-gray-100 p-8 rounded-lg shadow-md">
//         <p className="text-lg text-gray-700 leading-relaxed">
//           Welcome to <span className="font-semibold">Tech Corp</span>, a leading provider of 
//           innovative technology solutions. With a commitment to excellence, we specialize 
//           in developing cutting-edge software products that transform businesses.
//         </p>
//         <p className="mt-4 text-lg text-gray-700 leading-relaxed">
//           Our team of dedicated professionals works on the latest technologies to drive 
//           digital transformation. We believe in fostering a collaborative and inclusive 
//           workplace that empowers employees to excel.
//         </p>
//         <p className="mt-4 text-lg text-gray-700 leading-relaxed">
//           Headquartered in <span className="font-semibold">San Francisco</span>, we operate 
//           globally, delivering top-notch solutions for businesses of all sizes.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutCompany;

// // import React from 'react';
// // import aboutImage from '../Assets/evernrthwall.jpg'; // Replace with actual image

// // const AboutCompany = () => {
// //   return (
// //     <div className="bg-gradient-to-r from-gray-50 to-gray-200 py-16 px-6">
// //       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
// //         {/* Left - Image Section */}
// //         <div className="md:w-1/2">
// //           <img 
// //             src={aboutImage} 
// //             alt="About Us" 
// //             className="w-full h-auto rounded-lg shadow-lg"
// //           />
// //         </div>

// //         {/* Right - Text Section */}
// //         <div className="md:w-1/2 text-center md:text-left">
// //           <h2 className="text-4xl font-extrabold text-[#005b66] mb-6">
// //             Empowering Innovation, Transforming Businesses
// //           </h2>
// //           <p className="text-lg text-gray-700 leading-relaxed mb-4">
// //             At <span className="font-semibold">Tech Corp</span>, we specialize in cutting-edge 
// //             technology solutions designed to revolutionize industries. Our expert teams 
// //             are dedicated to driving innovation and creating impactful digital solutions.
// //           </p>
// //           <p className="text-lg text-gray-700 leading-relaxed mb-4">
// //             We foster a culture of creativity and collaboration, ensuring our clients and 
// //             employees thrive in a dynamic environment. Whether you're a business looking 
// //             for digital transformation or a tech enthusiast eager to join an innovative team, 
// //             we have something for you.
// //           </p>
// //           <p className="text-lg text-gray-700 leading-relaxed mb-6">
// //             Headquartered in <span className="font-semibold">San Francisco</span>, our global 
// //             reach enables us to deliver top-tier solutions for businesses worldwide.
// //           </p>
          
// //           {/* Call-to-Action Button */}
// //           <a 
// //             href="/about"
// //             className="inline-block bg-[#005b66] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#00414d] transition"
// //           >
// //             Learn More About Us
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutCompany;

import React from 'react';
import aboutImage from '../Assets/evernrthwall.jpg'; // Ensure correct image path

const AboutCompany = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-200 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left - Image Section */}
        <div className="md:w-1/2">
          <img 
            src={aboutImage} 
            alt="About Us" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right - Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          
          {/* About Our Company Section */}
          <h2 className="text-3xl font-bold text-[#005b66] mb-4">
            About Our Company
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Welcome to <span className="font-semibold">Tech Corp</span>, a leading provider of 
            innovative technology solutions. With a commitment to excellence, we specialize 
            in developing cutting-edge software products that transform businesses.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our team of dedicated professionals works on the latest technologies to drive 
            digital transformation. We believe in fostering a collaborative and inclusive 
            workplace that empowers employees to excel.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Headquartered in <span className="font-semibold">San Francisco</span>, we operate 
            globally, delivering top-notch solutions for businesses of all sizes.
          </p>

          {/* Empowering Innovation Section */}
          <h3 className="text-2xl font-extrabold text-[#005b66] mb-6">
            Empowering Innovation, Transforming Businesses
          </h3>
          
          {/* Call-to-Action Button */}
          <a 
            href="/about"
            className="inline-block bg-[#005b66] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#00414d] transition-all duration-300"
          >
            Learn More About Us
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default AboutCompany;
