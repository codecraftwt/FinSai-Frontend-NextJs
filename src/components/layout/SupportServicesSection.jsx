import React from "react";
import assets from "../../assets/assets";

const DEFAULT_SERVICES = [
  {
    id: 1,
    title: "24X7 CHAT SUPPORT",
    description:
      "Instantly connect with our support team, available around the clock.From spread clarifications to order execution queries, we’re here to assist.Perfect for traders who need fast, reliable answers on the fly.",
    icon: assets.Chatsupport,
  },
  {
    id: 2,
    title: "EMAIL SUPPORT",
    description:
      "Have a complex issue or need documentation? Drop us an email anytime.Our detailed responses cover everything from strategy explanations to account updates.You’ll get clarity, structure, and prompt resolutions directly in your inbox.",
    icon: assets.Emailsupport,
  },
  {
    id: 3,
    title: "INBOUND CALL SUPPORT",
    description: "Sometimes, speaking to a real human makes all the difference.Our phone support is live 24/7 for UAE traders who prefer direct guidance.Whether it's deposits, withdrawals, or platform issues, we’re ready to help.",
    icon: assets.Callsupport,
  },
  {
    id: 4,
    title: "Technical Assistance",
    description:
      "Tech hiccups shouldn’t slow you down.From login problems to trade execution delays or app crashes, we resolve it quickly.Count on our specialists to get you back on track without missing a beat.",
    icon: assets.Techsupport,
  },

];

const SupportServicesSection = ({
  heading = "Core Services At A Glance",
  services = DEFAULT_SERVICES,
  columnsPerRow = 4,
}) => {
  // Determine grid classes based on columnsPerRow prop
  const getGridClasses = () => {
    if (columnsPerRow === 2) {
      return "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8";
    }
    // Default: 4 columns
    return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8";
  };

  return (
    <section className="relative py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            {heading}
          </h2>
          <div className="relative w-[120px] h-[2px] bg-[#496DAB] rounded-md my-4 md:my-6 mx-auto">
            <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#496DAB] rotate-45" />
          </div>
        </div>

        {/* Cards */}
        <div className={getGridClasses()}>
          {services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#496DAB] to-[#1F9FB2] px-6 py-8 shadow-[0_18px_45px_rgba(0,0,0,0.4)]"
            >
              <div className="w-14 h-14 mb-6 flex items-center justify-center ">
                {service.icon && (
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-15 h-15 object-contain"
                  />
                )}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 uppercase tracking-[0.04em]">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-white leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportServicesSection;
