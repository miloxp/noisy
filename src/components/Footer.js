import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-noisy-primary rounded-full opacity-10"></div>
        <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-noisy-secondary rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-noisy-accent rounded-full opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* App Name */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-noisy-primary via-noisy-secondary to-noisy-accent bg-clip-text text-transparent">
                Noisy
              </span>
            </h3>
            <p className="text-gray-400 text-lg">Presiona. Ríe. Repite.</p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Noisy. Todos los derechos reservados. Hecho por Milo con ❤️
              para amantes del sonido.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
