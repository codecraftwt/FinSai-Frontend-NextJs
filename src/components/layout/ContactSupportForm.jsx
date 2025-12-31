import React, { useState } from 'react';
import { 
  InputField, 
  TextField, 
  ContactField, 
  UploadField, 
  ButtonField
} from './Form';

const ContactSupportForm = ({
  title = "",
  buttonText = "Send message",
  onSubmit,
  defaultPhone = '+971',
  defaultCountry = 'ae',
  className = "",
  showLinkedIn = true,
  showResumeUpload = true,
  buttonClassName = 'w-[528px] h-[49px]',
  simpleLayout = false
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: defaultPhone,
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
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log('Contact Support Form submitted:', formData);
    }
  };

  return (
    <div className={`bg-white bg-opacity-5 rounded-[4px] p-6 sm:p-8 shadow-2xl border border-gray-800 max-w-3xl mx-auto mb-[100px] ${className}`}>
      <h2 className="text-[24px] sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 flex items-center justify-center md:items-start md:justify-start">
        {title}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {simpleLayout ? (
          <>
            {/* Simple Layout: Full Name and Phone on same row, Email below, then Message */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              <ContactField
                value={formData.phone}
                onChange={handlePhoneChange}
                defaultCountry={defaultCountry}
                placeholder="Phone Number"
                required
              />
            </div>

            <InputField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <TextField
              name="skillsExpertise"
              placeholder="Message / Query"
              value={formData.skillsExpertise}
              onChange={handleInputChange}
              rows={3}
              required
            />

            <div className="pt-4 flex justify-center items-center">
              <ButtonField type="submit" variant="primary" className={buttonClassName}>
                {buttonText || "Send Message"}
              </ButtonField>
            </div>
          </>
        ) : (
          <>
            {/* Default Layout: Full Name and Email on first row, Phone and LinkedIn on second row */}
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
                defaultCountry={defaultCountry}
                placeholder="Phone Number"
                required
              />

              {showLinkedIn && (
                <InputField
                  type="text"
                  name="linkedInProfile"
                  placeholder="LinkedIn Profile"
                  value={formData.linkedInProfile}
                  onChange={handleInputChange}
                  required
                />
              )}
            </div>

            <TextField
              name="skillsExpertise"
              placeholder="Message / Query"
              value={formData.skillsExpertise}
              onChange={handleInputChange}
              rows={3}
              required
            />

            {showResumeUpload && (
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
            )}

            <div className="pt-4 flex justify-center items-center">
              <ButtonField type="submit" variant="primary" className={buttonClassName}>
                {buttonText}
              </ButtonField>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ContactSupportForm;

