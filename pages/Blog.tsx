import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronRight, Search } from 'lucide-react';

const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

const Blog = () => {
  const posts = [
    { title: 'Scaling SaaS to 1 Million Users', category: 'Engineering', author: 'Marcus Rodriguez', date: 'Jan 12, 2024' },
    { title: 'The Future of Zero-Trust Security', category: 'Cybersecurity', author: 'Dr. Sarah Chen', date: 'Feb 05, 2024' },
    { title: 'Automating Growth: A Guide to Marketing Pipelines', category: 'Automation', author: 'Ananya Gupta', date: 'Mar 18, 2024' },
    { title: 'Optimizing Cloud Costs for Mid-size Enterprises', category: 'Cloud', author: 'Marcus Rodriguez', date: 'Apr 02, 2024' },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={scrollReveal}
          className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8"
        >
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Engineering Blog</h1>
            <p className="text-gray-600">Insights from the frontlines of digital transformation.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-google focus:ring-2 focus:ring-google-blue outline-none transition-all"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {['All Posts', 'Engineering', 'Cybersecurity', 'Automation', 'Cloud', 'Design'].map(cat => (
            <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${cat === 'All Posts' ? 'bg-google-blue text-white shadow-google-blue' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {posts.map((post, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scrollReveal}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="group cursor-pointer bg-white border border-gray-100 rounded-google overflow-hidden shadow-sm transition-all"
            >
              <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-400 font-light text-sm italic">
                [Featured Image: {post.title}]
              </div>
              <div className="p-8">
                <div className="flex items-center text-xs font-bold text-google-blue mb-4 uppercase tracking-widest">
                  {post.category}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-google-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-8">
                  Diving deep into the technical challenges and innovative solutions we've encountered while building enterprise-grade systems...
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-3 overflow-hidden">
                       <div className="w-full h-full bg-google-blue/10 flex items-center justify-center text-[10px] font-black text-google-blue">
                         {post.author.charAt(0)}
                       </div>
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-gray-900">{post.author}</div>
                      <div className="text-gray-400">{post.date}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-google-blue transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;