'use client';

import { motion } from 'framer-motion';

interface Publication {
  authors: string[];
  title: string;
  journal: string;
  year?: string;
}

const publications: Publication[] = [
  {
    authors: ['Hossen et al.'],
    title: 'Joint Resource Allocation for Ultra-reliable Low-latency Services',
    journal: 'IEEE CCNC',
    year: '2023',
  },
  {
    authors: ['Hossen et al.'],
    title: 'Q-Learning Multi-Objective Clustering for Cognitive Radio Ad Hoc Networks',
    journal: 'IEEE Access',
    year: '2021',
  },
  {
    authors: ['Hossen et al.'],
    title: 'Q-Learning Clustering Method for CRAHN Scalability',
    journal: 'Korean Patent No. 10-2020-0102345',
  },
];

export default function Publications() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8">Selected Publications & Patents</h2>
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start space-x-2"
          >
            <span className="text-purple-600 dark:text-purple-400 mt-1.5">•</span>
            <div className="flex-1">
              <p className="text-[18px] text-gray-800 dark:text-gray-200">
                {pub.authors.map((author, i) => (
                  <span key={i}>
                    <strong>{author}</strong>
                    {i < pub.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
                , &ldquo;{pub.title}&rdquo;, <em>{pub.journal}</em>
                {pub.year ? `, ${pub.year}` : ''}.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
