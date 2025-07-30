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
      className="min-h-screen flex flex-col justify-center items-center w-full px-6 py-20"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-teal-400 mb-4 text-center">
          Get in Touch
        </h2>
        <div className="border-b-4 border-teal-400 w-16 mx-auto mb-8"></div>

        <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, project discussions, or just a
          friendly chat. Let's build something amazing together!
        </p>

        <div className="flex justify-center">
          {/* Contact Info */}
          <div className="space-y-6 max-w-md">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Contact Information</h3>
            
            <div className="space-y-4">
              <a
                href="mailto:channarama.1si22cs049@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition group"
              >
                <FaEnvelope className="text-2xl text-teal-400 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="font-medium text-white">Email</p>
                  <p className="text-gray-400">channarama.1si22cs049@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+916364129299"
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition group"
              >
                <FaPhone className="text-2xl text-teal-400 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-gray-400">+91 6364129299</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/d-s-channappa-848307277/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 text-blue-500 dark:text-blue-400 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition shadow-lg hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="https://github.com/channrama"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition shadow-lg hover:scale-110"
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href="https://leetcode.com/u/channa_rama/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 text-yellow-500 dark:text-yellow-400 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition shadow-lg hover:scale-110"
              >
                <SiLeetcode className="text-xl" />
              </a>
            </div>
          </div>

         
        </div>
      </motion.div>
    </section>
  );
}
