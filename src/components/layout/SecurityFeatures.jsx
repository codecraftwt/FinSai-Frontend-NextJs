import React from "react";
import assets from "../../assets/assets";

const SecurityFeatures = () => {
  return (
    <section className="bg-[#050F2E] py-2 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* ================= DESKTOP / TABLET ================= */}
        <div className="hidden md:flex justify-center ">
          {/* IMAGE WRAPPER (REFERENCE CONTAINER) */}
          <div className="relative w-full max-w-[900px] aspect-[16/9]">
            {/* CENTER IMAGE */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[60%] h-[60%] bg-cyan-500/20 blur-3xl rounded-full" />
              <img
                src={assets.SecurityFeatures}
                alt="Security Platform"
                className="relative w-[40%] max-w-[420px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* FEATURES – POSITIONED RELATIVE TO IMAGE */}
            <Feature
              icon={assets.Cardsecurity}
              title="Secure Payment Gateways"
              className="absolute top-[20%] left-[0%] max-w-[200px] lg:max-w-[400px]"
            />

            <Feature
              icon={assets.Detective}
              title="Suspicious Activity Detection"
              className="absolute bottom-[20%] left-[0%] xl:left-[-5%] max-w-[200px] lg:max-w-[400px]"
            />

            <Feature
              icon={assets.Phone}
              title="Secure Platform Architecture"
              className="absolute top-[10%] right-[0%] max-w-[200px] lg:max-w-[400px]"
            />

            <Feature
              icon={assets.Phishing}
              title="Anti-Phishing Measures"
              className="absolute top-[48%] right-[-5%] max-w-[200px] lg:max-w-[400px] whitespce-nowrap"
            />

            <Feature
              icon={assets.Backup}
              title="Data Backup & Disaster Management"
              className="absolute bottom-[10%] right-[0%] lg:right-[-8%] max-w-[200px] lg:max-w-[400px]"
            />
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          {/* IMAGE */}
          <div className="relative w-full max-w-md flex justify-center">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="absolute w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full" />
            </div>
            <img
              src={assets.SecurityFeatures}
              alt="Security Platform"
              className="relative w-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* FEATURES LIST */}
          <div className="w-full max-w-md grid grid-cols-1 gap-4 ">
            <Feature icon={assets.CreditCard}
             title="Secure Payment Gateways" 
             />
            <Feature
              icon={assets.HighRisk}
              title="Suspicious Activity Detection"
            />
            <Feature
              icon={assets.System}
              title="Secure Platform Architecture"
            />
            <Feature
              icon={assets.Authentication}
              title="Anti-Phishing Measures"
            />
            <Feature
              icon={assets.SecurityShield}
              title="Data Backup & Disaster Management"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= FEATURE COMPONENT ================= */
const Feature = ({ icon, title, className = "" }) => {
  return (
    <div className={`${className} flex items-center gap-8 sm:gap-5 `}>
      <div className="flex items-center justify-center ">
        <img
          src={icon}
          alt={title}
          className="w-[45px] h-[45px]  object-contain"
        />
      </div>

      <p className=" text-white font-medium leading-snug max-w-[260px] text-[clamp(16px,1.2vw,24px)]">
        {title}
      </p>
    </div>
  );
};

export default SecurityFeatures;
