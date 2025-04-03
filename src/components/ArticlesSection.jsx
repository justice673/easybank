import React from 'react';
import { motion } from 'framer-motion';
import ArticleCard from './ArticleCard';
import image1 from '../assets/images/image-currency.jpg';
import image2 from '../assets/images/image-restaurant.jpg';
import image3 from '../assets/images/image-plane.jpg';
import image4 from '../assets/images/image-confetti.jpg';

const ArticlesSection = () => {
  const articles = [
    {
      image: image1,
      author: 'Claire Robinson',
      title: 'Receive money in any currency with no fees',
      description: 'The world is getting smaller and we\'re becoming more mobile. So why should you be forced to only receive money in a single…',
    },
    {
      image: image2,
      author: 'Wilson Hutton',
      title: 'Treat yourself without worrying about money',
      description: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you…',
    },
    {
      image: image3,
      author: 'Wilson Hutton',
      title: 'Take your Easybank card wherever you go',
      description: 'We want you to enjoy your travels. This is why we don\'t charge any fees on purchases while you\'re abroad. We\'ll even show you…',
    },
    {
      image: image4,
      author: 'Claire Robinson',
      title: 'Our invite-only Beta accounts are now live!',
      description: 'After a lot of hard work by the whole team, we\'re excited to launch our closed beta. It\'s easy to request an invite through the site…',
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="mb-10 text-3xl font-light text-slate-800 dark:text-white lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ 
            once: true, 
            amount: 0.3,
            margin: "-100px 0px"
          }}
          transition={{ duration: 0.6 }}
        >
          Latest Articles
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ 
                once: true,
                amount: 0.3,
                margin: "-50px 0px"
              }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.15
              }}
            >
              <ArticleCard 
                image={article.image}
                author={article.author}
                title={article.title}
                description={article.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;

