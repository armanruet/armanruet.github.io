'use client';

import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  languages: {
    name: string;
    color?: string;
  }[];
  updatedAt: string;
  repoUrl: string;
  cloneUrl?: string;
}

const projects: Project[] = [
  {
    title: 'HandTrack3D – Real-Time Computer Vision & Depth Estimation',
    description:
      'Developed a real-time computer vision system combining hand landmark detection, pretrained depth estimation, and interactive gesture zones. Integrated MQTT messaging and live FPS monitoring for responsive, event-driven interactions.',
    languages: [
      { name: 'Python', color: '#3776AB' },
      { name: 'PyTorch', color: '#EE4C2C' },
      { name: 'OpenCV', color: '#5C3EE8' },
      { name: 'MediaPipe', color: '#00A8E8' },
      { name: 'Depth Anything', color: '#10B981' },
      { name: 'MQTT', color: '#660066' },
    ],
    updatedAt: '2025',
    repoUrl: 'https://github.com/armanruet/HandTrack3D',
  },
  {
    title: 'Q-CRAHN – Reinforcement Learning for Network Optimization',
    description:
      'Implemented a Q-Learning-based simulation for multi-objective wireless network clustering, optimizing channel quality, energy efficiency, and connectivity. Based on research published in IEEE Access.',
    languages: [
      { name: 'Python', color: '#3776AB' },
      { name: 'Q-Learning', color: '#F59E0B' },
      { name: 'Reinforcement Learning', color: '#8B5CF6' },
      { name: 'Simulation', color: '#10B981' },
    ],
    updatedAt: '2024',
    repoUrl: 'https://github.com/armanruet/Q-CRAHN',
  },
  {
    title: 'MCP Server – AI Agent Tool Integration',
    description:
      'Built a Python MCP server exposing structured tools for code search, dependency analysis, and documentation retrieval. Implemented tool discovery and execution via STDIO/SSE transports for integration with MCP-compatible AI assistants.',
    languages: [
      { name: 'Python', color: '#3776AB' },
      { name: 'Model Context Protocol (MCP)', color: '#EC4899' },
      { name: 'JSON-RPC', color: '#6366F1' },
      { name: 'LLM Tooling', color: '#14B8A6' },
    ],
    updatedAt: '2025',
    repoUrl: 'https://github.com/armanruet',
  },
  {
    title: 'Air Quality Monitoring – Cloud Data Engineering Pipeline',
    description:
      'Developed an end-to-end data pipeline integrating air quality and weather APIs, cloud storage, and BigQuery. Implemented dbt transformations and interactive dashboards to support environmental data analysis.',
    languages: [
      { name: 'Python', color: '#3776AB' },
      { name: 'BigQuery', color: '#4285F4' },
      { name: 'dbt', color: '#FF694B' },
      { name: 'GCS', color: '#34A853' },
      { name: 'Terraform', color: '#7B42BC' },
      { name: 'Streamlit', color: '#FF4B4B' },
    ],
    updatedAt: '2025',
    repoUrl: 'https://github.com/armanruet',
  },
  {
    title: 'Sentiment MLOps – End-to-End ML Lifecycle Platform',
    description:
      'Built a production-style sentiment classification platform with reproducible DVC pipelines, MLflow experiment tracking, and automated model quality gates. Implemented FastAPI inference, zero-downtime model promotion, drift monitoring, and human-in-the-loop feedback for continuous retraining.',
    languages: [
      { name: 'Python', color: '#3776AB' },
      { name: 'Scikit-learn', color: '#F7931E' },
      { name: 'DVC', color: '#945DD6' },
      { name: 'MLflow', color: '#0194E2' },
      { name: 'FastAPI', color: '#009688' },
      { name: 'Docker', color: '#2496ED' },
      { name: 'Evidently AI', color: '#ED2939' },
      { name: 'Prometheus', color: '#E6522C' },
    ],
    updatedAt: '2025',
    repoUrl: 'https://github.com/armanruet',
  },
];

export default function Projects() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Selected Machine Learning & Applied AI Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-all duration-300"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-pink-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4 gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center gap-1"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      {lang.name}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={project.repoUrl}
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-500 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Repository"
                  >
                    <FaGithub size={18} />
                  </a>
                  {project.cloneUrl && (
                    <a
                      href={project.cloneUrl}
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-500 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Demo"
                    >
                      <HiOutlineExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
