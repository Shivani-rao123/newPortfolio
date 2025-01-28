// src/components/Contact.js

"use client"; // <-- Add this line

import React, { useState } from "react";
import emailjs from "emailjs-com";


export default function Contact() {
  const [loadingMessage, setLoadingMessage] = useState({
    loading: false,
    message: "",
    success: false,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setLoadingMessage({
        loading: false,
        message: "Please fill all the fields!",
        success: false,
      });
      return;
    }

    try {
      setLoadingMessage({
        loading: true,
        message: "Submitting your form...",
        success: false,
      });

      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      if (response.status === 200) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        setLoadingMessage({
          loading: false,
          message: "Message sent successfully!",
          success: true,
        });
      } else {
        setLoadingMessage({
          loading: false,
          message: "Failed to send the message!",
          success: false,
        });
      }
    } catch (error) {
      console.error(error);
      setLoadingMessage({
        loading: false,
        message: "An error occurred while submitting the form!",
        success: false,
      });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
     

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
        <div className="max-w-[800px] backdrop-blur-[18px] bg-[#11121617] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black z-20">
          <h2 className="font-bold text-4xl text-neutral-800 dark:text-neutral-200">
            Contact Me
          </h2>

          {loadingMessage.message && (
            <p
              className={`mt-[20px] text-[0.9rem] ${
                loadingMessage.success ? "text-green-400" : "text-red-400"
              }`}
            >
              *{loadingMessage.message}
            </p>
          )}

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <div className="flex flex-col space-y-2 w-full">
                <label htmlFor="firstname">First name</label>
                <input
                  id="firstname"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Tyler"
                  type="text"
                  className="p-[10px] rounded-[4px] outline-none border-none bg-zinc-800 text-white"
                />
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <label htmlFor="lastname">Last name</label>
                <input
                  id="lastname"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Durden"
                  type="text"
                  className="p-[10px] rounded-[4px] outline-none border-none bg-zinc-800 text-white"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2 w-full mb-4">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="projectmayhem@fc.com"
                type="email"
                className="p-[10px] rounded-[4px] outline-none border-none bg-zinc-800 text-white"
              />
            </div>

            <div className="flex flex-col space-y-2 w-full mb-4">
              <label htmlFor="message">Enter Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write a Message....."
                className="p-[10px] rounded-[4px] outline-none border-none resize-none h-[140px] bg-zinc-800 text-white"
              />
            </div>

            <button
              className="bg-blue-900 relative group/btn w-full text-white rounded-md h-10 font-medium"
              type="submit"
            >
              {!loadingMessage.loading ? "Submit" : "Sending..."}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
