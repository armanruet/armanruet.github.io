'use client';

import { motion } from 'framer-motion';
import { FaAward, FaCertificate } from 'react-icons/fa';

const certifications = [
  {
    title: 'Data Engineering Zoomcamp',
    organization: 'DataTalksClub (Apache Spark, dbt, BigQuery, Kafka, Docker)',
    year: '2025',
  },
  {
    title: 'Data Engineering Bootcamp',
    organization: 'dataexpert.io (Data Modeling, Spark, Flink, Kafka)',
    year: '2024',
  },
  {
    title: 'Cisco Certified Network Associate (CCNA)',
    organization: 'Routing & Switching, Network Fundamentals',
    year: 'Certified',
  },
];

const awards = [
  {
    title: 'Jungseok International Scholarship for Graduate Study',
    organization: 'Inha University, Incheon, Rep of Korea',
    year: '2018 – 2020',
  },
  {
    title: 'Laboratory Assistant',
    organization: 'Department of ICE, Inha University, Incheon, Rep of Korea',
    year: '2018 – 2020',
  },
  {
    title: 'Technical Scholarship for Undergraduate Study',
    organization: 'Rajshahi University of Engineering & Technology',
    year: '2012 – 2014',
  },
  {
    title: 'Travel Scholarship',
    organization: 'The Bangladesh-Sweden Trust Fund (BSTF)',
    year: '2018',
  },
];

export default function Awards() {
  return (
    <div className="mb-12 space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800/50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <FaCertificate className="text-pink-500 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {cert.organization}
                  </p>
                  <p className="text-sm text-pink-600 dark:text-pink-400 font-medium">
                    {cert.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-8">Awards and Scholarships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800/50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <FaAward className="text-blue-500 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {award.organization}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {award.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
