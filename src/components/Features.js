import React from "react";

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Simple & Intuitive",
      description:
        "Just tap and play. No complicated controls or confusing interfaces.",
    },
    {
      icon: "🎨",
      title: "Endless Variety",
      description:
        "Hundreds of sounds across multiple categories to keep you entertained.",
    },
    {
      icon: "⚡",
      title: "Instant Playback",
      description:
        "Lightning-fast sound loading with crystal clear audio quality.",
    },
    {
      icon: "😄",
      title: "Pure Fun",
      description: "Designed to bring joy and laughter to your daily routine.",
    },
    {
      icon: "🔊",
      title: "High Quality",
      description:
        "Professional-grade audio samples for the best listening experience.",
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Optimized for touch devices with responsive design.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-noisy-warm rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-noisy-cool rounded-full opacity-20 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-noisy-purple rounded-full opacity-20 animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-noisy-primary">Noisy</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of simplicity, quality, and endless fun
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 card-hover group"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative element */}
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-noisy-primary to-noisy-secondary rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-noisy-primary via-noisy-secondary to-noisy-accent rounded-3xl p-12 text-white">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Noisy?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users who are already having fun with Noisy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-noisy-primary font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
                Download Now
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-noisy-primary transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
