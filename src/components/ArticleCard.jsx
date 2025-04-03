import React from 'react';
import { motion } from 'framer-motion';

const ArticleCard = ({ image, author, title, description }) => {
  return (
    <div className="overflow-hidden  rounded-lg bg-white dark:bg-gray-800 shadow-sm">
      <div className=" overflow-hidden h-48">
        <motion.img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover"
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.4 }
          }}
        />
      </div>
      <div className="p-6">
        <span className="text-xs text-gray-400 dark:text-gray-500">By {author}</span>
        <h3 className="mb-2 mt-2 text-lg font-medium text-slate-800 dark:text-white hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
