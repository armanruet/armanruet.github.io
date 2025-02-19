'use client';

import { motion } from 'framer-motion';

interface Publication {
  authors: string[];
  title: string;
  journal: string;
  year: string;
}

const publications: Publication[] = [
  {
    authors: ['M. A. Hossen', 'Sang-Jo Yoo'],
    title: 'Q-Learning–Based Multi-Objective Clustering Algorithm for Cognitive Radio Ad-Hoc Networks',
    journal: 'IEEE access Journal',
    year: '2023'
  },
  {
    authors: ['M. A. Hossen', 'et al.'],
    title: 'Joint Resource Allocation and Link Adaptation for Ultra-reliable and Low-latency Services',
    journal: 'IEEE Consumer Communications & Networking Conference (CCNC)',
    year: '2023'
  },
  {
    authors: ['M. A. Hossen','et al.'],
    title: 'Effect of Signal Length in Cross-correlation based Underwater Network Size Estimation',
    journal: '2nd International Conference on Electrical Engineering and Information Communication Technology (ICEEICT)',
    year: '2015'
  }
];

export default function Publications() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8">Publications</h2>
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
                    {author === 'M. A. Hossen' ? <strong>{author}</strong> : author}
                    {i < pub.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
                . &quot;{pub.title},&quot; <em>{pub.journal}</em>, {pub.year}.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
