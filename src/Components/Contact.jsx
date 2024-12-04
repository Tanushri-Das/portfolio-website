import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState("+880");

  return (
    <section id="contact" className="bg-black md:px-10 rounded-xl">
      <div className="flex flex-col xl:flex-row gap-12 py-12">
        {/* Form Section */}
        <div className="w-full md:w-3/4 md:mx-auto xl:w-1/2">
          <form
            action="https://getform.io/f/c2f8bf3b-ca10-4a4c-a5d0-60cd3a0f1053"
            method="POST"
            className="space-y-4 bg-blue-950 p-6 rounded-md shadow-lg"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="text"
                name="name"
                className="border text-black border-gray-300 rounded-md w-full px-3 py-2 outline-none"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                name="email"
                className="border text-black border-gray-300 rounded-md w-full px-3 py-2 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <PhoneInput
                country="bd"
                value={phoneNumber}
                onChange={setPhoneNumber}
                inputProps={{
                  className:
                    "border text-black border-gray-300 rounded-md w-full ps-12 py-2 outline-none",
                }}
              />
              <input type="hidden" name="phone" value={phoneNumber} />
            </div>
            <textarea
              name="message"
              rows="5"
              className="h-24 border text-black border-gray-300 rounded-md w-full px-3 py-2 outline-none"
              placeholder="Enter your message"
              required
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white bg-gradient-to-b from-sky-500 to-blue-900 px-8 py-2 mb-2 rounded-full font-semibold text-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col xl:justify-center space-y-6 mt-8 xl:mt-0 w-full md:w-3/4 md:mx-auto xl:w-1/2">
          {/* Phone */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center bg-gradient-to-b from-sky-500 to-blue-900 w-12 h-12 rounded-full">
              <FaPhone className="text-white text-xl" />
            </button>
            <div>
              <h2 className="text-sm font-normal text-[#c7c7c7]">Phone</h2>
              <p className="text-[16px] text-white">+880164647948</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center bg-gradient-to-b from-sky-500 to-blue-900 w-12 h-12 rounded-full">
              <FaEnvelope className="text-white text-xl" />
            </button>
            <div>
              <h2 className="text-sm font-normal text-[#c7c7c7]">Email</h2>
              <p className="text-[16px] text-white">
                dastanushri402@example.com
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center bg-gradient-to-b from-sky-500 to-blue-900 w-12 h-12 rounded-full">
              <FaMapMarkerAlt className="text-white text-xl" />
            </button>
            <div>
              <h2 className="text-sm font-normal text-[#c7c7c7]">Address</h2>
              <p className="text-[16px] text-white">
                Banasree, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
