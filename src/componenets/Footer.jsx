import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <img src="/assets/logo.png" alt="Karthikesh Robotics Logo" className="w-32 invert mb-4" />
            <p className="text-gray-400 text-sm">
              Innovating the future with AI-driven robotics solutions. Transforming industries with automation & intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#products" className="hover:text-gray-300">Products</a></li>
              <li><a href="#services" className="hover:text-gray-300">Services</a></li>
              <li><a href="#team" className="hover:text-gray-300">Our Team</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-400 text-sm flex items-center gap-2"><FaMapMarkerAlt /> Pune, India</p>
            <p className="text-gray-400 text-sm flex items-center gap-2 mt-2"><FaPhoneAlt /> +91 98765 43210</p>
            <p className="text-gray-400 text-sm flex items-center gap-2 mt-2"><FaEnvelope /> info@karthikeshrobotics.com</p>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-3">Get the latest updates on AI & Robotics straight to your inbox.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-3 py-2 w-full rounded-l-md text-black outline-none"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://facebook.com" className="hover:text-blue-400"><FaFacebookF size={20} /></a>
          <a href="https://twitter.com" className="hover:text-blue-400"><FaTwitter size={20} /></a>
          <a href="https://instagram.com" className="hover:text-pink-400"><FaInstagram size={20} /></a>
          <a href="https://linkedin.com" className="hover:text-blue-400"><FaLinkedinIn size={20} /></a>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Karthikesh Robotics Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
