import React, { useState } from 'react';
import { Send, MessageCircle, Linkedin, Twitter, Youtube } from 'lucide-react';
import assets from '../../assets/assets.jsx';

const AcademyFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '' });
  };

  const quickLinks = [
    { name: 'Courses', path: '/academy' },
    { name: 'Ebooks', path: '/academy' },
    { name: 'Coaching', path: '/academy' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Support', path: '/contact-support' }
  ];

  const socialLinks = [
    { name: 'Telegram', icon: MessageCircle, path: '#' },
    { name: 'LinkedIn', icon: Linkedin, path: '#' },
    { name: 'X', icon: Twitter, path: '#' },
    { name: 'YouTube', icon: Youtube, path: '#' }
  ];

  return (
    <footer className="bg-[#0b152a] text-white py-8 md:py-10 lg:py-12 px-4 md:px-6">
      <div className="pt-3 md:pt-5 max-w-9xl mx-auto text-[#86AAE3]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-10 lg:gap-6 xl:gap-8 mb-8 w-full">
          {/* Column 1: Company Info - Wider */}
          <div className="lg:col-span-4 xl:col-span-4">
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <img
                src={assets.logo}
                alt="Finsai Trade Logo"
                className="w-[140px] h-[56px] md:w-[160px] md:h-[64px] lg:w-[185px] lg:h-[74px]"
              />
            </div>
            <p className="text-xs md:text-sm lg:text-base text-gray-400 leading-relaxed max-w-xs md:max-w-md lg:max-w-lg">
              At Finsai Trade, We Bridge Traditional Finance With Cutting-Edge Trading Technology. Whether You're A Beginner Or A Seasoned Trader, Our Platform Offers The Perfect Mix Of Reliability, Innovation, And Growth Opportunity.
            </p>
          </div>

          {/* Column 2: Quick Links - Narrower */}
          <div className="lg:col-span-2 xl:col-span-2">
            <h3 className="font-semibold text-white mb-4 md:mb-5 text-sm md:text-base lg:text-lg">
              Quick Link
            </h3>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-[10px] md:text-xs lg:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="hover:text-cyan-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Links - Narrower */}
          <div className="lg:col-span-2 xl:col-span-2">
            <h3 className="font-semibold text-white mb-4 md:mb-5 text-sm md:text-base lg:text-lg">
              Social Links
            </h3>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-[10px] md:text-xs lg:text-sm">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <li key={social.name}>
                    <a
                      href={social.path}
                      className="hover:text-cyan-400 transition flex items-center gap-2"
                    >
                      <IconComponent className="w-4 h-4" />
                      {social.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription Form - Wider */}
          <div className="lg:col-span-4 xl:col-span-4">
            <h3 className="font-semibold text-white mb-4 md:mb-5 text-base md:text-lg">
              Newsletter Subscription Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full px-4 py-3 bg-transparent/40 text-[#0D0D0E] rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 bg-transparent/40 text-[#0D0D0E] rounded-lg"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#496DAB] text-white font-semibold rounded-lg hover:bg-[#496DAB]/90 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base uppercase"
              >
                <Send className="w-4 h-4" />
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="max-w-7xl mx-auto mt-8 md:mt-10 lg:mt-12 pt-6 md:pt-8 border-t border-gray-800 flex flex-col-reverse md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 gap-4 md:gap-8 lg:gap-12">
        <p className="text-center text-[14px] sm:text-md md:text-left flex-1">
          © Copyright 2025, all right reserve by finsaitrade
        </p>
        <div className="flex space-x-4 md:space-x-8 lg:space-x-10">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.path}
                className="hover:text-cyan-400 transition"
                aria-label={social.name}
              >
                <IconComponent size={24} className="w-8 h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 text-white bg-white bg-opacity-15 rounded-md p-1" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default AcademyFooter;

