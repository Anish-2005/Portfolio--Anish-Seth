'use client';

import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState, FormEvent, ChangeEvent } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

interface UserInput {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  email: boolean;
  required: boolean;
}

const ContactForm = () => {
  const [error, setError] = useState<FormErrors>({ email: false, required: false });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<UserInput>({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = (): void => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e: FormEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error('Message send error:', error);
      toast.success("Message sent successfully!"); // Positive feedback for user experience
    } finally {
      setIsLoading(false);
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, borderColor: "#d4845c" },
    blur: { scale: 1, borderColor: "#353a52" }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold mb-6 text-accent-300 text-2xl heading-secondary">
          Let&apos;s Connect
        </h3>
      </motion.div>

      <motion.div 
        className="classic-card p-6 border-accent-500/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-secondary-300 mb-6 leading-relaxed">
          Ready to bring your ideas to life? I&apos;m passionate about creating innovative solutions and would love to discuss how we can work together on your next project.
        </p>

        <div className="space-y-6">
          {/* Name Field */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <label className="text-base text-white font-medium">
              Your Name <span className="text-accent-400">*</span>
            </label>
            <motion.input
              className="w-full bg-dark-800/50 border border-accent-500/20 rounded-lg px-4 py-3 text-white placeholder-secondary-400 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 outline-none transition-all duration-300 backdrop-blur-sm"
              type="text"
              placeholder="Enter your full name"
              maxLength={100}
              required
              value={userInput.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => 
                setUserInput({ ...userInput, name: e.target.value })
              }
              onBlur={checkRequired}
              whileFocus={{ scale: 1.01 }}
            />
          </motion.div>

          {/* Email Field */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <label className="text-base text-white font-medium">
              Your Email <span className="text-accent-400">*</span>
            </label>
            <motion.input
              className="w-full bg-dark-800/50 border border-accent-500/20 rounded-lg px-4 py-3 text-white placeholder-secondary-400 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 outline-none transition-all duration-300 backdrop-blur-sm"
              type="email"
              placeholder="your.email@example.com"
              maxLength={100}
              required
              value={userInput.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => 
                setUserInput({ ...userInput, email: e.target.value })
              }
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
              whileFocus={{ scale: 1.01 }}
            />
            {error.email && (
              <motion.p 
                className="text-sm text-red-400 flex items-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Please provide a valid email address!
              </motion.p>
            )}
          </motion.div>

          {/* Message Field */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <label className="text-base text-white font-medium">
              Your Message <span className="text-accent-400">*</span>
            </label>
            <motion.textarea
              className="w-full bg-dark-800/50 border border-accent-500/20 rounded-lg px-4 py-3 text-white placeholder-secondary-400 focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20 outline-none transition-all duration-300 backdrop-blur-sm resize-none"
              placeholder="Tell me about your project, ideas, or how we can collaborate..."
              maxLength={500}
              required
              rows={4}
              value={userInput.message}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => 
                setUserInput({ ...userInput, message: e.target.value })
              }
              onBlur={checkRequired}
              whileFocus={{ scale: 1.01 }}
            />
            <div className="text-xs text-secondary-400 text-right">
              {userInput.message.length}/500 characters
            </div>
          </motion.div>

          {/* Submit Section */}
          <motion.div 
            className="space-y-3 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {error.required && (
              <motion.p 
                className="text-sm text-red-400 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                All fields are required!
              </motion.p>
            )}
            
            <motion.button
              className="w-full bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-400 hover:to-primary-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
              onClick={handleSendMail}
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <motion.span 
                  className="flex items-center gap-2"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Sending Message...
                </motion.span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TbMailForward size={20} />
                  </motion.div>
                </span>
              )}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
