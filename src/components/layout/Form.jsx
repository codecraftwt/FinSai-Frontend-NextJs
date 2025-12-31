import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const InputField = ({ 
  type = 'text', 
  name, 
  placeholder, 
  value, 
  onChange, 
  required = false,
  className = '' 
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full h-[51px] px-4 bg-white bg-opacity-5 border border-white border-opacity-15 rounded-[4px] text-white placeholder-[#808080] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${className}`}
      required={required}
    />
  );
};

const ParagraphTag = ({ children, className = '' }) => {
  return (
    <p className={`text-gray-300 text-sm ${className}`}>
      {children}
    </p>
  );
};

const TextField = ({ 
  name, 
  placeholder, 
  value, 
  onChange, 
  rows = 4, 
  required = false,
  className = '' 
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-15 rounded-[4px] text-white placeholder-[#808080] font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${className}`}
      required={required}
    />
  );
};

const ContactField = ({ 
  value,
  onChange,
  required = false,
  defaultCountry = 'ae',
  placeholder = 'Phone Number',
  className = ''
}) => {
  return (
    <div className={`w-full h-[51px] ${className}`}>
      <PhoneInput
        defaultCountry={defaultCountry}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        hideDropdown={false}
        showDisabledDialCodeAndPrefix={true}
        inputClassName="w-full h-[51px] px-4 bg-white bg-opacity-5 border border-white border-opacity-15 rounded-[4px] text-white placeholder-[#808080] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20 focus:border-transparent transition-all phone-input-field"
        countrySelectorStyleProps={{
          buttonClassName: 'bg-white bg-opacity-5 border border-gray-700 rounded-l-md hover:bg-gray-700 transition-all country-selector-btn',
          dropdownStyleProps: {
            className: 'bg-white bg-opacity-5 border border-gray-700 rounded-[4px] shadow-xl'
          }
        }}
      />
    </div>
  );
};
const UploadField = ({ 
  name, 
  onChange, 
  accept = '.pdf,.doc,.docx', 
  placeholder = 'No File Chosen',
  uploadedFile = null,
  className = '' 
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center gap-4 px-4 py-3 bg-white bg-opacity-5 border border-white  border-opacity-15 rounded-[4px]">
        <label className="bg-[#496DAB]/20 hover:bg-[#496DAB]/30 text-[#496DAB]/80 border-2 border-white/10  font-bold py-2 px-4 rounded cursor-pointer transition-all">
          <input
            type="file"
            name={name}
            onChange={onChange}
            className="hidden"
            accept={accept}
          />
          Choose File
        </label>
        <span className="text-[#808080] text-sm sm:text-base font-medium">
          {uploadedFile ? uploadedFile.name : placeholder}
        </span>
      </div>
    </div>
  );
};

const ButtonField = ({ 
  type = 'button', 
  onClick, 
  children, 
  variant = 'primary',
  className = '' 
}) => {
  const variants = {
    primary: 'bg-[#496DAB] hover:bg-[#496DAB]/80',
    secondary: 'bg-gray-600 hover:bg-gray-700',
    success: 'bg-green-600 hover:bg-green-700',
    danger: 'bg-red-600 hover:bg-red-700'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variants[variant]} max-w-[530px] text-white font-semibold p-3 rounded-[4px] transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${className}`}
    >
      {children}
    </button>
  );
};

const SelectField = ({ 
  name, 
  value, 
  onChange, 
  options = [], 
  placeholder = 'Select an option',
  required = false,
  className = '' 
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 bg-white bg-opacity-5 border border-white border-opacity-15rounded-[4px] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${className}`}
      required={required}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+971',
    address: '',
    uploadedFile: null,
    category: '',
    additionalField: ''
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
    console.log('Form submitted:', formData);
  };

  const positionOptions = [
    { value: 'developer', label: 'Software Developer' },
    { value: 'trader', label: 'Trader' },
    { value: 'analyst', label: 'Financial Analyst' },
    { value: 'marketing', label: 'Marketing Specialist' },
    { value: 'support', label: 'Customer Support' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="bg-gray-900/50 backdrop-blur-lg rounded-lg p-6 sm:p-8 shadow-2xl border border-gray-800 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-white mb-6">Personal Details</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <InputField
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <InputField
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <ContactField
          value={formData.phone}
          onChange={handlePhoneChange}
          defaultCountry="ae"
          placeholder="Phone Number"
          required
        />

        <InputField
          type="text"
          name="address"
          placeholder="Address / Location"
          value={formData.address}
          onChange={handleInputChange}
          required
        />

        <UploadField
          name="uploadedFile"
          onChange={handleFileUpload}
          accept=".pdf,.doc,.docx"
          placeholder="Upload Your Resume / CV"
          uploadedFile={formData.uploadedFile}
        />

        <SelectField
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          options={positionOptions}
          placeholder="What Position Are You Applying For?"
          required
        />

        <TextField
          name="additionalField"
          placeholder="Tell us about yourself and why you want to join Finsai Trade"
          value={formData.additionalField}
          onChange={handleInputChange}
          rows={4}
          required
        />

        <div className="pt-4">
          <ButtonField type="submit" variant="primary">
            Submit Application
          </ButtonField>
        </div>
      </form>
    </div>
  );
};

export { 
  InputField, 
  ParagraphTag, 
  TextField, 
  ContactField, 
  UploadField, 
  ButtonField, 
  SelectField 
};

export default Form;
