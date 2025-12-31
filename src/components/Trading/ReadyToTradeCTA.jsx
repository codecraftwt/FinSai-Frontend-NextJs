import React from 'react';
import ActionFooter from '../LearnGrow/ActionFooter';
import assets from '../../assets/assets';

const ReadyToTradeCTA = () => {
  return (
    <ActionFooter
      header="Ready To Trade Without Limits?"
      title="Fund Your Finsai Trade Account Today With Fast, Flexible, And Secure Payment Options. Start Trading Forex, Crypto, Indices, And Metals In Minutes."
      buttonText="Deposit Now"
      secondButtonText="Try Free Demo"
      imageSrc={assets.actionFooter}
      imageAlt="Trading Platform Illustration"
      backgroundColor="bg-transparent"
      fontSize="text-sm sm:text-base md:text-lg"
    />
  );
};

export default ReadyToTradeCTA;

