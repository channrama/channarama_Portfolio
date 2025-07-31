"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission for demo purposes
    // In production, replace this with actual EmailJS integration
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call

      // For demo purposes, always show success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Uncomment below for actual EmailJS integration:
      /*
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'D S Channappa',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
      */
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center w-full px-4 sm:px-6 py-16 sm:py-20"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-teal-400 mb-4 text-center">
          Get in Touch
        </h2>
        <div className="border-b-4 border-teal-400 w-12 sm:w-16 mx-auto mb-6 sm:mb-8"></div>

        <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          Feel free to reach out for collaborations, project discussions, or just a
          friendly chat. Let's build something amazing together!
        </p>

        <div className="flex justify-center w-full">
          {/* Contact Info */}
          <div className="w-full max-w-md space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Contact Information</h3>

            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:channarama.1si22cs049@gmail.com"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition group w-full"
              >
                <FaEnvelope className="text-xl sm:text-2xl text-teal-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="text-left min-w-0 flex-1">
                  <p className="font-medium text-white text-sm sm:text-base">Email</p>
                  <p className="text-gray-400 text-xs sm:text-sm break-all">channarama.1si22cs049@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+916364129299"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition group w-full"
              >
                <FaPhone className="text-xl sm:text-2xl text-teal-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div className="text-left">
                  <p className="font-medium text-white text-sm sm:text-base">Phone</p>
                  <p className="text-gray-400 text-xs sm:text-sm">+91 6364129299</p>
                </div>
              </a>
            </div>

            <div className="flex gap-3 sm:gap-4 justify-center mt-4 sm:mt-6">
              <a
                href="https://www.linkedin.com/in/d-s-channappa-848307277/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gray-800 text-blue-400 rounded-full hover:bg-gray-700 transition shadow-lg hover:scale-110"
              >
                <FaLinkedin className="text-lg sm:text-xl" />
              </a>

              <a
                href="https://github.com/channrama"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition shadow-lg hover:scale-110"
              >
                <FaGithub className="text-lg sm:text-xl" />
              </a>

              <a
                href="https://leetcode.com/u/channa_rama/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gray-800 text-yellow-400 rounded-full hover:bg-gray-700 transition shadow-lg hover:scale-110"
              >
                <SiLeetcode className="text-lg sm:text-xl" />
              </a>
            </div>
          </div>

         
        </div>
      </motion.div>
    </section>
  );
}
