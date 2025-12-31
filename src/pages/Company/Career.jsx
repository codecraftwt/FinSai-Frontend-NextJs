import React, { useState } from 'react';
import Banner from '../../components/layout/Banner';
import SectionHeading from '../../components/layout/SectionHeading';
import assets from '../../assets/assets';
import { 
  InputField, 
  TextField, 
  ContactField, 
  UploadField, 
  ButtonField, 
  SelectField 
} from '../../components/layout/Form';
import Header from '../../components/layout/Header';


const CareerForm = ({ className }) => {
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
    <div className={`bg-white bg-opacity-5 rounded-[4px] p-6 sm:p-8 shadow-2xl border border-gray-800 max-w-3xl mx-auto mb-[100px] ${className}`}>
      <h2 className="text-[24px]  sm:text-2xl font-semibold text-white mb-6 flex items-center justify-center md:items-start md:justify-start">Personal Details</h2>
      
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
          placeholder="Your Skills & Expertise"
          value={formData.skillsExpertise}
          onChange={handleInputChange}
          rows={3}
          required
        />

        <TextField
          name="additionalInfo"
          placeholder="Why Do You Want To Join Finsai Trade?"
          value={formData.additionalInfo}
          onChange={handleInputChange}
          rows={4}
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
            Submit Application
          </ButtonField>
        </div>
      </form>
    </div>
  );
};

const CareerPage = () => {

  return (
    <div className="min-h-screen bg-[#0D0D0E] pb-[10px] relative overflow-hidden z-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none z-[-10] overflow-hidden">
        {/* <div className="absolute top-[30%] left-[10%] w-[350px] h-[150px] sm:w-[400px] sm:h-[200px] md:w-[500px] md:h-[300px] bg-gradient-radial bg-linear-hero rounded-full filter blur-[120px] opacity-60 -translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div> */}
        <div className="absolute top-[35%] left-[5%] sm:top-[65%] sm:left-[-15%] w-[300px] h-[125px] sm:w-[350px] sm:h-[175px] md:w-[450px] md:h-[150px] bg-gradient-radial bg-radial-market rounded-full filter blur-[100px] opacity-90 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute top-[65%] left-[45%] sm:top-[80%]  sm:left-[50%] w-[300px] h-[300px] sm:w-[350px] sm:h-[175px] md:w-[550px] md:h-[300px] bg-gradient-radial bg-radial-market rounded-full filter blur-[160px] sm:blur-[240px] opacity-70 -translate-x-1/2 -translate-y-1/2 "></div>

        {/* <div className="absolute bottom-[25%] left-[15%] w-[250px] h-[100px] sm:w-[300px] sm:h-[150px] md:w-[400px] md:h-[200px] bg-gradient-radial bg-radial-account-sm rounded-full filter blur-[80px] opacity-65 -translate-x-1/2 -translate-y-1/2 rotate-[60deg]"></div> */}
        {/* <div className="absolute top-[80%] left-[70%] w-[200px] h-[80px] sm:w-[250px] sm:h-[100px] md:w-[350px] md:h-[150px] bg-gradient-radial bg-linear-hero rounded-full filter blur-[70px] opacity-55 -translate-x-1/2 -translate-y-1/2 rotate-[120deg]"></div> */}
      </div>

      <Header isScrolled={false} isFixed={false} />

      <Banner
        heading="Careers"
        description="Together We Thrive."
        backgroundImage={assets.Companybanner}
        breadcrumbBase="HOME"
      />

      <SectionHeading 
        heading="Grow With Finsai Trade"
        description="We Are A Team Of Passionate Innovators Building The Future Of Trading. If You Are Driven, Creative, And Have Skills That Can Add Value To Our Mission, We Would Love To Hear From You. At Finsai Trade, You Get To Work On Cutting-Edge Solutions, Collaborate With Industry Experts, And Make A Real Impact. If You Believe You Have Invaluable Skills To Bring To The Table, Fill In Your Form Below."
        textAlign="center"
        maxWidth="7xl"
        className='mt-20'
      />

      <CareerForm className= 'mt-10' />
      
    </div>
  );
};

export default CareerPage;
