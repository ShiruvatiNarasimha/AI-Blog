import React from "react";

const Pricing = () => {
  const plansMap = [
    {
      name: "Basic",
      description: "Get started with SpeakEasy!",
      price: "10",
      items: ["3 Blog Post", "3 Transcription"],
    },
    {
      name: "Pro",
      description: "All Blog Posts, let's go!",
      price: "19.99",
      items: ["Unlimited Blog Post", "Unlimited Transcriptions"],
    },
  ];
  return (
    <section className="relative overflow-hidden" id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-12 lg:px-0">
        <div
          className="flex items-center 
      justify-center w-full pb-12"
        >
          <h2
            className="font-bold text-xl
        uppercase mb-8 text-purple-600"
          >
            Pricing
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
