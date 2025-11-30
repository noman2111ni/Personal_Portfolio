import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [result, setResult] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const deleteForm = () => {
    navigate("/");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormError("");
    setResult("");
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setFormError("All fields are required.");
      return;
    }

    setResult("Sending...");
    formData.append("access_key", "27174389-a97a-415f-a125-8c705b38b7b7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Response:", data);

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 pt-29">
      <div className="relative w-full max-w-lg p-6 md:p-10 rounded-xl shadow-2xl border border-white/20 backdrop-blur-lg bg-white/10">
        {/* Close Button */}
        <button
          onClick={deleteForm}
          className="absolute top-0 right-0 text-xl md:text-xl font-bold text-white cursor-pointer px-3 py-2 rounded-bl-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h1 className="text-2xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          Contact Us
        </h1>

        <form onSubmit={onSubmit} className="space-y-4">
          {formError && (
            <p className="text-red-400 text-center font-medium">{formError}</p>
          )}
          {result && (
            <p className="text-green-400 text-center font-medium">{result}</p>
          )}

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-white mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md bg-black/30 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md bg-black/30 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-white mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Enter your message"
              className="w-full h-20 px-4 py-3 rounded-md bg-black/30 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-black font-semibold py-3 px-6 rounded-md hover:opacity-90 transition duration-300 shadow-lg"
            >
              Send Message 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
