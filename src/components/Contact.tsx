import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-32 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center space-x-4 mb-6">
            <Terminal className="text-black" size={32} />
            <h2 className="text-5xl md:text-7xl font-bold text-black font-mono">
              {'<Contact />'}
            </h2>
          </div>
          <div className="font-mono text-sm text-gray-600 ml-12">
            <span className="text-green-600">$</span> send message --to=developer
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-black rounded-none p-8 md:p-12"
          >
            {/* Terminal-style header */}
            <div className="bg-black text-white p-3 mb-8 font-mono text-sm flex items-center justify-between">
              <span>contact.sh</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-gray-800 mb-2">
                  <span className="text-green-600">$</span> name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('name')}
                  onBlur={() => setIsFocused(null)}
                  required
                  className={`w-full px-4 py-3 border-2 font-mono rounded-none transition-all outline-none ${
                    isFocused === 'name' ? 'border-black' : 'border-gray-300'
                  }`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-800 mb-2">
                  <span className="text-green-600">$</span> email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('email')}
                  onBlur={() => setIsFocused(null)}
                  required
                  className={`w-full px-4 py-3 border-2 font-mono rounded-none transition-all outline-none ${
                    isFocused === 'email' ? 'border-black' : 'border-gray-300'
                  }`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-800 mb-2">
                  <span className="text-green-600">$</span> message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setIsFocused('message')}
                  onBlur={() => setIsFocused(null)}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 border-2 font-mono rounded-none transition-all outline-none resize-none ${
                    isFocused === 'message' ? 'border-black' : 'border-gray-300'
                  }`}
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-none hover:bg-gray-800 transition-all font-mono flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>SEND MESSAGE</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>

            {/* Direct contact */}
            <div className="mt-12 pt-8 border-t-2 border-gray-200">
              <p className="font-mono text-sm text-gray-600 mb-4">Or reach out directly:</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="flex items-center space-x-2 px-4 py-2 border-2 border-black text-black rounded-none hover:bg-black hover:text-white transition-all font-mono text-sm"
                >
                  <Mail size={16} />
                  <span>email</span>
                </a>
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 border-2 border-black text-black rounded-none hover:bg-black hover:text-white transition-all font-mono text-sm"
                >
                  <Github size={16} />
                  <span>github</span>
                </a>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 border-2 border-black text-black rounded-none hover:bg-black hover:text-white transition-all font-mono text-sm"
                >
                  <Linkedin size={16} />
                  <span>linkedin</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
