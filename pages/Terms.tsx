import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  const sections = [
    { title: "1. Agreement to Terms", content: "By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree, you may not use the platform." },
    { title: "2. Intellectual Property", content: "All software, designs, text, and logos are the exclusive property of SustyDigiMarketers. No portion of our IP may be reproduced without written consent." },
    { title: "3. User Responsibilities", content: "You are responsible for maintaining the security of your account and for all activities that occur under your credentials. Misuse of the platform is strictly prohibited." },
    { title: "4. Limitation of Liability", content: "SustyDigiMarketers shall not be liable for any indirect, incidental, or consequential damages arising from your use of our digital solutions." },
    { title: "5. Termination", content: "We reserve the right to suspend or terminate access to our services at our sole discretion, without notice, for conduct that violates these terms." },
    { title: "6. Governing Law", content: "These terms are governed by the laws of the State of California, United States, without regard to its conflict of law principles." }
  ];

  return (
    <div className="bg-white py-32 lg:py-48 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-black text-google-heading mb-6 tracking-tighter">Terms of Service</h1>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Last Updated: January 01, 2024</p>
        </motion.div>

        <div className="space-y-16">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <h2 className="text-2xl font-black text-google-heading mb-6 group-hover:text-google-blue transition-colors">
                {section.title}
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed font-medium">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-gray-50 rounded-[2.5rem] border border-gray-100 text-center">
          <p className="text-gray-500 font-medium">Questions about our Terms? Contact our legal team at <span className="text-google-blue font-bold">legal@sustydigi.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default Terms;