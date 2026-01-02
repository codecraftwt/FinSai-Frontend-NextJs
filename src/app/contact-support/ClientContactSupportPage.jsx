'use client';

import React, { useState, useEffect } from 'react';
import Banner from '../../components/layout/Banner';
import SectionHeading from '../../components/layout/SectionHeading';
import assets from '../../assets/assets';
import Header from '../../components/layout/Header';
import { Check } from 'lucide-react';

import { 
  InputField, 
  TextField, 
  ContactField, 
  UploadField, 
  ButtonField, 
  SelectField 
} from '../../components/layout/Form';

const supportData = [
  {
    title: "CONTACT OPTIONS",
    image: assets.ContactSupport1, 
    items: [
      "Live Chat Support",
      "Email Support",
      "Phone Support",
      "Knowledge Base",
    ],
  },
  {
    title: "GLOBAL SUPPORT AVAILABILITY",
    image: assets.ContactSupport2, 
    items: [
      "24/7 Assistance Across Time Zones",
      "Multi-Language Support",
    ],
  },
  {
    title: "CUSTOMER CARE PROMISE",
    image: assets.ContactSupport3, 
    items: [
      "Quick Response Times",
      "Transparency",
      "Dedicated Resolution",
    ],
  },
];

const SupportCards = () => {
  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 lg:mt-0 mb-20 bg-transparent">
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
        {supportData.map((card, index) => (
          <div
            key={index}
            className="rounded-[15px] overflow-hidden shadow-2xl flex flex-col bg-white bg-opacity-5 border border-gray-800 w-full h-full sm:w-[400px] sm:h-[500px] md:w-[400px] md:h-[597px]"
          >
            <div className="h-[50%] flex-1 relative overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 p-6 md:p-8 bg-[#496DAB] bg-opacity-10 flex flex-col justify-start">
              <h3 className="text-white text-xl font-bold text-center mb-6 whitespace-nowrap">
                {card.title}
              </h3>
              <ul className="space-y-5 text-lg mt-5">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-4 text-white">
                   <div className="flex-shrink-0 rounded-full bg-white bg-opacity-5 border-2 border-white/20 p-0.5 sm:p-1 w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 flex items-center justify-center">
                    <Check size={14} className="sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] text-white" />
                  </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactSupportForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '+971',
    linkedInProfile: '',
    skillsExpertise: '',
    uploadedFile: null,
    additionalInfo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (phone) => {
    setFormData(prev => ({
      ...prev,
      phone: phone
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      uploadedFile: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Career Form submitted:', formData);
  };

  return (
    <div className="bg-white bg-opacity-5 rounded-[4px] p-6 sm:p-8 shadow-2xl border border-gray-800 max-w-3xl mx-auto mb-[100px]">
      <h2 className="text-[24px] sm:text-2xl  font-semibold text-white mb-6 flex items-center justify-center md:items-start md:justify-start">Personal Details</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContactField
            value={formData.phone}
            onChange={handlePhoneChange}
            defaultCountry="ae"
            placeholder="Phone Number"
            required
          />

          <InputField
            type="text"
            name="linkedInProfile"
            placeholder="LinkedIn Profile"
            value={formData.linkedInProfile}
            onChange={handleInputChange}
            required
          />
        </div>


        <TextField
          name="skillsExpertise"
          placeholder="Message / Query"
          value={formData.skillsExpertise}
          onChange={handleInputChange}
          rows={3}
          required
        />

        <div>
          <p className="text-[#808080] text-sm font-extrabold mb-2">Upload Your Resume Here</p>
          <UploadField
            name="uploadedFile"
            onChange={handleFileUpload}
            accept=".pdf,.doc,.docx"
            placeholder="No File Chosen"
            uploadedFile={formData.uploadedFile}
          />
          <p className="text-[#808080] text-sm font-medium mt-2">Doc Or PDF File Only | File Size Limit(4mb)</p>
        </div>

        <div className="pt-4 flex justify-center items-center">
          <ButtonField type="submit" variant="primary" className='w-[528px] h-[49px]'>
            Send message
          </ButtonField>
        </div>
      </form>

     
    </div>
  );
};


const ClientContactSupportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0E] pb-20 relative overflow-hidden z-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
        <div className="absolute top-[65%] left-[45%] sm:top-[70%]  sm:left-[50%] w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[800px] md:h-[200px] bg-gradient-radial bg-radial-market rounded-full filter blur-[120px] sm:blur-[150px] opacity-60 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute top-[35%] left-[5%] sm:top-[50%] sm:left-[-10%] w-[300px] h-[125px] sm:w-[350px] sm:h-[175px] md:w-[450px] md:h-[250px] bg-gradient-radial bg-radial-market rounded-full filter blur-[150px] opacity-70 -translate-x-1/2 -translate-y-1/2 "></div>     
      </div>

      <Header isScrolled={false} isFixed={false} />

      <Banner
        heading="Contact Support"
        description="We Provide Solutions"
        backgroundImage={assets.Companybanner}
        breadcrumbBase="HOME"
      />

      <SectionHeading
        heading="We Are Here to Help"
        description="Whether you have a trading query, need technical assistance, or want more information about our platform, our support team is available 24/7 to assist you."
        textAlign="center"
        maxWidth="7xl"
        className='py-2 sm:py-0 mt-3'
      />

      <SupportCards />
      
      <ContactSupportForm />

      <p className="text-gray-300 text-center text-[16px] sm:text-[20px] mt-4 mb-4 p-2">
        Need faster help? Start a live chat with our support team right now.
      </p>

      <div className="flex justify-center">
        <ButtonField variant="primary" className="w-[155px] h-[49px] whitespace-nowrap text-center">
          Start Live Chat
        </ButtonField>
      </div>

    </div>
  );
};

export default ClientContactSupportPage;


