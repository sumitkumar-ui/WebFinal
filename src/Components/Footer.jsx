import React, { useState } from 'react';
import axios from 'axios';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await axios.post('http://localhost:5000/subscribe', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error subscribing');
    }
  };
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto py-8 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <img src="logo3.jpeg" alt="Logo" className="h-14 mx-10" />
        </div>
        {/* Social Icons */}
        <div className="flex flex-wrap items-center text-blue-1000">
          <a href="#" className="mr-4 text-4xl text-blue-500">
            <FaLinkedin />
          </a>
          <a href="#" className="mr-4 text-4xl text-blue-500">
            <FaWhatsapp />
          </a>
          <a href="#" className="mr-4 text-4xl text-blue-500">
            <FaTwitter />
          </a>
          <a href="#" className="mr-4 text-4xl text-blue-500">
            <FaFacebook />
          </a>
          <a href="#" className="mr-4 text-4xl text-blue-500">
            <FaSquareInstagram />
          </a>
          <a href="#" className="mr-4 text-4xl text-blue-500">
            <FaYoutube />
          </a>
        </div>
      </div>
      <hr className="border-gray-400" />
      <div className="container mx-auto py-4 flex flex-wrap">
        {/* Columns */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:pr-8 mt-4">
          <h3 className="font-bold">NovaNectar Services Pvt. Ltd.</h3>
          <p className='mt-3'>IT Services and IT Consulting, 11-50 employees, Headquarters Dehradun, Uttarakhand, Type Public Company.</p>
          <br />
          <div className="flex items-start mb-2">
            <FaLocationDot className="mr-2 mt-1 text-blue-500" />
            <p>GMS Road Dehradun <br /> Uttarakhand, India</p>
          </div>
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2 mt-3 text-blue-500" />
            <p className='mt-3'>+91 7505856171, +91 8979891705</p>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2 mt-3 text-blue-500" />
            <p className='mt-3'>info@novanectar.co.in</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:pr-8 mt-4">
          <h3 className="font-bold">Quick Links</h3>
          <ul className="space-y-3 md:space-y-3 mt-3">
            <li><a href="/">Home</a></li>
            <li><a href="/AboutUstwo">About Us</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="/Internship">Internship</a></li>
            <li><a href="/Methodologytwo">Methodology</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:pr-8 mt-4">
          <h3 className="font-bold">Our Features</h3>
          <ul className="space-y-3 md:space-y-3 mt-3">
            <li>Why Choose Us</li>
            <li>Our Achivments</li>
            <li>Terms Of Services</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mt-4">
          <h3 className="font-bold">Subscriptions</h3>
          <p className='mt-3'>With Our Skills Put Together, You Get An Ensemble Capable Of Doing Anything And Everything Your Brand Needs. Subscribe Here To Get Our Latest Updates.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 px-2 py-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-1 mt-2" onClick={handleSubscribe}>Subscribe</button>
          {message && <p className="mt-2">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Footer;
