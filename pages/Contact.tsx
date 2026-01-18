import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

const Contact = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scrollReveal}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-8">Let's Discuss Your Vision</h1>
            <p className="text-xl text-gray-600 mb-12">
              Ready to start your digital transformation journey? Our team of experts is here to help you navigate the complexity.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail className="w-6 h-6 text-google-blue" />, label: 'Email Us', value: 'experts@sustydigimarketers.com', color: 'bg-blue-50' },
                { icon: <Phone className="w-6 h-6 text-google-red" />, label: 'Call Us', value: '+1 (800) DIGI-MARK', color: 'bg-red-50' },
                { icon: <MapPin className="w-6 h-6 text-google-green" />, label: 'Visit Us', value: '123 Tech Corridor, Silicon Valley, CA 94025', color: 'bg-green-50' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-start"
                >
                  <div className={`p-3 ${item.color} rounded-google mr-4`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-gray-900">{item.label}</h4>
                    <p className="text-gray-500">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-16 p-8 bg-google-bg rounded-google"
            >
              <h4 className="font-bold mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-google-blue" /> Rapid Response Guarantee
              </h4>
              <p className="text-sm text-gray-600">
                Our sales engineering team typically responds to enterprise inquiries within 4 business hours.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-10 rounded-google shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-8">Project Inquiry Form</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-google focus:ring-2 focus:ring-google-blue outline-none" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-google focus:ring-2 focus:ring-google-blue outline-none" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-google focus:ring-2 focus:ring-google-blue outline-none" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interest Area</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-google focus:ring-2 focus:ring-google-blue outline-none appearance-none">
                    <option>SaaS Product Development</option>
                    <option>Cloud Infrastructure</option>
                    <option>Cybersecurity & Compliance</option>
                    <option>Digital Marketing Automation</option>
                    <option>Custom Enterprise Solution</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-google focus:ring-2 focus:ring-google-blue outline-none" placeholder="How can we help you scale?"></textarea>
                </div>
                <button className="w-full bg-google-blue text-white py-4 rounded-google font-bold text-lg hover:bg-blue-700 transition-colors">
                  Send Inquiry
                </button>
                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to our Privacy Policy and consent to us contacting you about your project.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;