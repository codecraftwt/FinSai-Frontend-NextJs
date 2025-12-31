import React from 'react';
import FAQTabs from '../components/layout/FAQTabs';
import LearnWithFinsai from '../components/LearnWithFinsai';

// Example FAQ data for this page - you can customize this
const viewPageFaqData = [
  {
    id: 1,
    question: "How Can I Upgrade To Account Type?",
    answer: "You Can Upgrade Your Account By Contacting Our Customer Service Team. They Will Guide You Through The Process And Let You Know About Any Additional Requirements Or Documents Needed."
  },
  {
    id: 2,
    question: "Can I Have More Than One Account?",
    answer: "Yes, you can have multiple accounts with us. However, each account must be registered with unique credentials and comply with our terms of service."
  },
  {
    id: 3,
    question: "What Is Swap-Free Account?",
    answer: "A Swap-Free account is designed for traders who cannot earn or pay interest due to their religious beliefs. These accounts do not incur overnight swap charges on positions held past the market close."
  }
];

const Viewpage = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <FAQTabs 
        title="FREQUENTLY ASKED QUESTIONS"
        faqData={viewPageFaqData}
        viewAllText="View All FAQ's"
        viewAllLink="/help-center"
        initialOpenId={1}
      />

      {/* Learn with Finsai Section */}
      <LearnWithFinsai 
      title="Learn With Finsai" 
      description="Learn with Finsai to become a successful trader" 
      buttonText="Learn More" 
      buttonLink="/learn" 
      />
    </div>
  );
};

export default Viewpage;


