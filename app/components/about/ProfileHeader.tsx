'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { IoLocationSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
      {/* Left Side - Photo and Name */}
      <div className="flex items-start gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-48 h-48 rounded-full overflow-hidden flex-shrink-0"
        >
          <Image
            src="/armanruet52.github.io/static/images/avatar.png"
            alt="Arman Hossen"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold">Arman Hossen</h1>
          </div>
          <h2 className="text-2xl text-gray-600 dark:text-gray-400 font-mono mt-2">
            Software Engineer
          </h2>
        </motion.div>
      </div>

      {/* Right Side - Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-start md:items-end gap-4 w-full md:w-auto mt-6 md:mt-0"
      >
        <a
          href="mailto:armanruet@gmail.com"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 text-[18px]"
        >
          <span>armanruet@gmail.com</span>
          <HiOutlineArrowUpRight className="text-sm" />
        </a>

        <a
          href="https://armanruet.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 text-[18px] break-all"
        >
          <span>https://armanruet.github.io/</span>
          <HiOutlineArrowUpRight className="text-sm flex-shrink-0" />
        </a>

        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-[18px]">
          <IoLocationSharp className="flex-shrink-0" />
          <span>Differdange, LUX</span>
        </div>

        <div className="flex gap-4 text-2xl text-gray-600 dark:text-gray-400 mt-2">
          <a
            href="https://github.com/armanruet"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/armanruet/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://armanruet.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-200"
          >
            <FaGlobe />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
