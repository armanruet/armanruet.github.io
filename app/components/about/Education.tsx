export default function Education() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8">Education</h2>
      <div className="space-y-8">
        {/* DLH AI Academy */}
        <div>
          {/* Mobile View */}
          <div className="sm:hidden space-y-1">
            <h3 className="text-xl font-bold">DLH AI Academy</h3>
            <h4 className="text-lg italic text-purple-600 dark:text-purple-400">
              Machine Learning Specialisation
            </h4>
            <span className="text-purple-600 dark:text-purple-400 text-base block">
              April 2026 – Present
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Focus: Supervised/Unsupervised Learning, Neural Networks, Deep Learning, NLP, GenAI,
              Reinforcement Learning.
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:block">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">DLH AI Academy</h3>
              <span className="text-purple-600 dark:text-purple-400 text-base">
                April 2026 – Present
              </span>
            </div>
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-lg italic text-purple-600 dark:text-purple-400">
                Machine Learning Specialisation
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Focus: Supervised/Unsupervised Learning, Neural Networks, Deep Learning, NLP, GenAI,
              Reinforcement Learning.
            </p>
          </div>
        </div>

        {/* Inha University */}
        <div>
          {/* Mobile View */}
          <div className="sm:hidden space-y-1">
            <h3 className="text-xl font-bold">Inha University, South Korea</h3>
            <h4 className="text-lg italic text-purple-600 dark:text-purple-400">
              Master of Engineering — Information & Communication Eng.
            </h4>
            <span className="text-purple-600 dark:text-purple-400 text-base block">2018 – 2020</span>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Focus: Machine Learning for networking, Q-Learning optimization, wireless
              communications. Graduated with distinction.
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:block">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Inha University, South Korea</h3>
              <span className="text-purple-600 dark:text-purple-400 text-base">2018 – 2020</span>
            </div>
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-lg italic text-purple-600 dark:text-purple-400">
                Master of Engineering — Information & Communication Eng.
              </h4>
              <span className="text-purple-600 dark:text-purple-400">
                GPA: <span className="font-semibold">3.75</span>/4.00
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Focus: Machine Learning for networking, Q-Learning optimization, wireless
              communications. Graduated with distinction.
            </p>
          </div>
        </div>

        {/* Rajshahi University */}
        <div>
          {/* Mobile View */}
          <div className="sm:hidden space-y-1">
            <h3 className="text-xl font-bold">
              Rajshahi University of Engineering & Technology (RUET), Bangladesh
            </h3>
            <h4 className="text-lg italic text-purple-600 dark:text-purple-400">
              Bachelor of Science — Electronics & Telecommunication Eng.
            </h4>
            <span className="text-purple-600 dark:text-purple-400 text-base block">2010 – 2014</span>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:block">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">
                Rajshahi University of Engineering & Technology (RUET), Bangladesh
              </h3>
              <span className="text-purple-600 dark:text-purple-400 text-base">2010 – 2014</span>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="text-lg italic text-purple-600 dark:text-purple-400">
                Bachelor of Science — Electronics & Telecommunication Eng.
              </h4>
              <span className="text-purple-600 dark:text-purple-400">
                GPA: <span className="font-semibold">3.15</span>/4.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
