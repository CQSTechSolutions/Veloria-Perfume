// pages/contact.js
"use client";
import { useState } from 'react';
import Navbar from '../components/Navbar';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Navbar />
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center text-gray-600 mb-8">Have any questions? Feel free to reach out!</p>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        {success && <p className="text-green-600 text-center mb-4">Message sent successfully!</p>}
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-lg font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-4"
            required
          />
          <label className="block mb-2 text-lg font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-4"
            required
          />
          <label className="block mb-2 text-lg font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md mb-4 h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
