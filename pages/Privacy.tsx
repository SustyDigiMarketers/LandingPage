import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  const sections = [
    { title: "1. Information We Collect", content: "We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us for technical support." },
    { title: "2. How We Use Information", content: "We use your data to provide, maintain, and improve our services, develop new products, and protect SustyDigiMarketers and our users." },
    { title: "3. Data Sharing", content: "We do not share your personal information with companies, organizations, or individuals outside of Susty except in the cases of consent, external processing, or for legal reasons." },
    { title: "4. Data Security", content: "We work hard to protect you and Susty from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold." },
    { title: "5. Compliance & Regulatory", content: "We regularly review our compliance with our Privacy Policy. We also adhere to several self-regulatory frameworks, including GDPR and CCPA." },
    { title: "6. Changes to the Policy", content: "We change this Privacy Policy from time to time. We will not reduce your rights under this Privacy Policy without your explicit consent." }
  ];

  return (
    <div className="bg-white py-32 lg:py-48 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-black text-google-heading mb-6 tracking-tighter">Privacy Policy</h1>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Effective Date: January 01, 2024</p>
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
              <h2 className="text-2xl font-black text-google-heading mb-6 group-hover:text-google-green transition-colors">
                {section.title}
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed font-medium">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-gray-50 rounded-[2.5rem] border border-gray-100 text-center">
          <p className="text-gray-500 font-medium">To exercise your data rights, please email <span className="text-google-green font-bold">privacy@sustydigi.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;