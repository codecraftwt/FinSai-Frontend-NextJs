import React from 'react';
import Banner from '../components/layout/Banner';
import assets from '../assets/assets';

const valuesData = [
  {
    title: "INTEGRITY",
    description: "Our Team Operates From A Shared Set Of Beliefs And Partners For The Long Term With Entrepreneurs Pursuing Big Ideas.",
    icon: assets.shield
  },
  {
    title: "THE DRIVING FORCES",
    description: "Our Team Of Enthusiastic Professionals Always Support New Endeavours, Help Making Valuable Connections And Identify The Right Opportunities.",
    icon: assets.handshake
  },
  {
    title: "PASSIONATE",
    description: "We Believe It Is The People Who Really Hold The Key To Market Disruption. Which Is Why We Invest In Passionate Team Members Who Can Transform Brilliant Ideas Into Successful Ventures.",
    icon: assets.Learntree
  },
  {
    title: "CONTINUOUS LEARNING",
    description: "Our Unique Ecosystem Of Globally Renowned Mentors Enables Us To Achieve Holistic Growth Across Our Portfolio.",
    icon: assets.brain
  }
];

const ValueCard = ({ title, description, icon }) => (
  <div className="relative rounded-xl p-6 sm:p-8 w-full sm:w-[357px] h-auto sm:h-[483px] bg-gradient-to-br from-[#2D9B9B] via-[#3D8BAB] to-[#4A7BB8] overflow-hidden">
    <div className="absolute inset-0 bg-[#4A7BB8] from-white/10 to-transparent rounded-xl" />
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="mb-4 sm:mb-6">
        <img src={icon} alt={title} className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3" />
      </div>
      
      <h3 className="text-white font-bold text-sm sm:text-base tracking-wide mb-3 sm:mb-4">
        {title}
      </h3>
      
      <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const OurValuesSection = () => {
  return (
    <section className="bg-[#0A1628] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-9xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work With The Brightest Mind
          </h2>
          <p className="text-gray-400 text-sm sm:text-base tracking-wider">
            Our Values
          </p>
        </div>
        
        <div className="grid grid-cols-1 custom-xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
          {valuesData.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CareerPage = () => {

    
  return (
    <div className="min-h-screen bg-[#0A1628] relative overflow-hidden z-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
        <div className="absolute top-[80%] left-[15%] w-[300px] h-[100px] md:w-[350px] md:h-[200px] bg-gradient-radial bg-linear-hero rounded-full filter blur-[120px] opacity-40 -translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div>
        <div className="absolute top-[50%] left-1/2 sm:top-[20%] sm:left-[80%] w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] bg-gradient-radial bg-linear-hero rounded-full filter blur-[160px] opacity-100 -translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div>
        <div className="absolute sm:top-[55%] left-[-5%] w-[300px] h-[100px] md:w-[300px] md:h-[300px] bg-gradient-radial bg-radial-market rounded-full filter blur-[140px] opacity-80 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute sm:top-[85%] left-[90%] w-[300px] h-[100px] md:w-[300px] md:h-[300px] bg-gradient-radial bg-radial-market rounded-full filter blur-[90px] opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <Banner
        heading="Careers"
        description="Together We Thrive."
        backgroundImage={assets.CareerBanner}
        breadcrumbBase="HOME"
      />

      <OurValuesSection />
    </div>
  );
};

export default CareerPage;
