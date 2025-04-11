import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get in <span className="text-amber-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Contact us for construction inquiries, POP services, or to discuss
            your next project
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Card - Phone */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border-t-4 border-amber-500">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaPhone className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
              Phone
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Speak directly with our team
            </p>
            <div className="text-center">
              <a
                href="tel:+911234567890"
                className="text-amber-600 hover:text-amber-700 text-lg font-medium"
              >
                +91 123 456 7890
              </a>
              <p className="text-gray-500 text-sm mt-1">Mon-Sat, 9am-6pm</p>
            </div>
          </div>

          {/* Contact Card - Email */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border-t-4 border-amber-500">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaEnvelope className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
              Email
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Send us your inquiries
            </p>
            <div className="text-center">
              <a
                href="mailto:info@constructpop.com"
                className="text-amber-600 hover:text-amber-700 text-lg font-medium"
              >
                info@constructpop.com
              </a>
              <p className="text-gray-500 text-sm mt-1">
                Response within 24 hours
              </p>
            </div>
          </div>

          {/* Contact Card - Office */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border-t-4 border-amber-500">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaMapMarkerAlt className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
              Office
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Visit our headquarters
            </p>
            <div className="text-center">
              <p className="text-gray-700">123 Construction Lane</p>
              <p className="text-gray-700">Ropar, Punjab 140001</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-700 text-sm font-medium inline-flex items-center mt-2"
              >
                View on map
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block mb-8">
                <span className="relative z-10">Send Us a Message</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-amber-200 z-0 opacity-70 -mb-1"></span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Have questions about our construction or POP services? Fill out
                the form and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaClock className="text-amber-500 mr-3" />
                  <span className="text-gray-700">
                    Business Hours: Mon-Sat 9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-amber-500 mr-3" />
                  <span className="text-gray-700">
                    Emergency Contact: +91 98765 43210 (24/7)
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-amber-500 transition duration-300"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-amber-500 transition duration-300"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-amber-500 transition duration-300"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-amber-500 transition duration-300"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              {submitStatus === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. Our team will get back to you
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="construction">
                          Construction Inquiry
                        </option>
                        <option value="pop">POP Services</option>
                        <option value="renovation">Renovation Project</option>
                        <option value="estimate">Free Estimate</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition duration-300 flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FiSend className="mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block mb-12 text-center">
          <span className="relative z-10">Our Location</span>
          <span className="absolute bottom-0 left-0 w-full h-2 bg-amber-200 z-0 opacity-70 -mb-1"></span>
        </h2>
        <div className="rounded-xl overflow-hidden shadow-lg h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.715245345963!2d76.5328603151319!3d30.72940898164096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319a2!2sRupnagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location on Google Maps"
          ></iframe>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-4 px-12 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Call Now
            </button>
            <button className="border-2 border-white text-white hover:bg-gray-700 font-bold py-4 px-12 rounded-lg text-lg transition duration-300 transform hover:scale-105">
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
