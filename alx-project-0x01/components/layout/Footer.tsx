import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 py-6 text-center text-sm text-gray-500">
      <div className="max-w-6xl mx-auto px-4">
        © {new Date().getFullYear()} ALX Project — Demo
      </div>
    </footer>
  );
};

export default Footer;
