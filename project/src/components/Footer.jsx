import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#001b5e] text-gray-300 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-3xl hover:text-yellow-300 transition-transform transform hover:scale-110">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-3xl hover:text-yellow-300 transition-transform transform hover:scale-110">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-3xl hover:text-yellow-300 transition-transform transform hover:scale-110">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-4">
            <li>
              <a href="/" className="text-gray-400 hover:text-white hover:underline">Home</a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white hover:underline">About</a>
            </li>
            <li>
              <a href="/services" className="text-gray-400 hover:text-white hover:underline">Services</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and promotions.</p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Your Email"
              className="py-2 px-4 w-2/3 rounded-l-full focus:outline-none bg-indigo-800 text-gray-300"
            />
            <button className="bg-yellow-300 text-gray-900 py-2 px-4 rounded-r-full hover:bg-yellow-400 transition-transform transform hover:scale-105 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Your Innovative Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
