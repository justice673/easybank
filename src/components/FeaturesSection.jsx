import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import iconOnline from '../assets/images/icon-online.svg';
import iconBudgeting from '../assets/images/icon-budgeting.svg';
import iconOnboarding from '../assets/images/icon-onboarding.svg';
import iconApi from '../assets/images/icon-api.svg';

const FeaturesSection = () => {
  const features = [
    {
      icon: iconOnline,
      title: 'Online Banking',
      description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
      direction: 'left',
    },
    {
      icon: iconBudgeting,
      title: 'Simple Budgeting',
      description: 'See exactly where your money goes each month. Receive notifications when you\'re close to hitting your limits.',
      direction: 'right',
    },
    {
      icon: iconOnboarding,
      title: 'Fast Onboarding',
      description: 'We don\'t do branches. Open your account in minutes online and start taking control of your finances right away.',
      direction: 'left',
    },
    {
      icon: iconApi,
      title: 'Open API',
      description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
      direction: 'right',
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ 
            once: true, 
            amount: 0.3,  
            margin: "-100px 0px" 
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-light text-slate-800 dark:text-white lg:text-4xl">
            Why choose Easybank?
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                x: feature.direction === 'left' ? -50 : 50 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0 
              }}
              viewport={{ 
                once: true,
                amount: 0.3, 
                margin: "-50px 0px" 
              }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2 
              }}
            >
              <FeatureCard 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
