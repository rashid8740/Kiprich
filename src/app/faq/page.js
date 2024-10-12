"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "What is the best time to visit Kenya for a safari?",
    answer:
      "The best time for a safari in Kenya is during the dry seasons, which are from late June to October and from late December to March. These periods offer the best wildlife viewing as animals gather around water sources. However, Kenya is a year-round destination, and each season has its unique charm.",
  },
  {
    question: "How long should I plan for a safari in Kenya?",
    answer:
      "We recommend a minimum of 5-7 days for a satisfying safari experience. This allows you to visit multiple parks and increases your chances of seeing a wide variety of wildlife. For a more comprehensive experience, including coastal areas, 10-14 days would be ideal.",
  },
  {
    question: "What should I pack for a safari?",
    answer:
      "Essential items include comfortable, neutral-colored clothing, a wide-brimmed hat, sunglasses, sunscreen, insect repellent, comfortable walking shoes, and a good camera. We provide a detailed packing list upon booking.",
  },
  {
    question: "Are your safaris suitable for children?",
    answer:
      "Yes, many of our safaris are family-friendly. We offer special programs designed for children, ensuring they have an educational and enjoyable experience. However, age restrictions may apply for certain activities, and we recommend discussing your family's needs with our team.",
  },
  {
    question: "What types of accommodations do you offer?",
    answer:
      "We offer a range of accommodations to suit different preferences and budgets, from luxury lodges and tented camps to more rustic options. All our accommodations are carefully selected for comfort, safety, and proximity to wildlife areas.",
  },
  {
    question: "How do you contribute to conservation efforts?",
    answer:
      "Kiprich Safaris is committed to sustainable tourism. We support local conservation projects, employ local guides, and follow strict eco-friendly practices. A portion of every safari booked goes directly to wildlife conservation and community development initiatives.",
  },
];

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4 bg-white rounded-lg shadow-md overflow-hidden"
    >
      <button
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
        onClick={toggleOpen}
      >
        <span className="font-semibold text-[#3c2a1a]">{question}</span>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="text-[#f49a25]"
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4 text-[#3c2a1a]"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F5EFE7] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#1c150d] mb-8"
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[#3c2a1a] mb-12 max-w-2xl mx-auto"
        >
          Find answers to common questions about safaris with Kiprich Safaris.
          If you can't find what you're looking for, feel free to contact us.
        </motion.p>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleOpen(index)}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#3c2a1a] mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#f49a25] text-white py-2 px-6 rounded-full font-semibold hover:bg-[#e38d1c] transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;
