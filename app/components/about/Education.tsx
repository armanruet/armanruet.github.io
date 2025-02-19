export default function Education() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8">Education</h2>
      <div className="space-y-8">
        {/* Inha University */}
        <div>
          {/* Mobile View */}
          <div className="sm:hidden space-y-1">
            <h3 className="text-xl font-bold">Inha University, South Korea</h3>
            <h4 className="text-lg italic text-purple-600 dark:text-purple-400">
              M.E. in Information and Communication Engineering
            </h4>
            <span className="text-purple-600 dark:text-purple-400 text-base block">Feb 2020</span>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:block">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Inha University, South Korea</h3>
              <span className="text-purple-600 dark:text-purple-400 text-base">Mar 2018 - Feb 2020</span>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="text-lg italic text-purple-600 dark:text-purple-400">
                M.E. in Information and Communication Engineering
              </h4>
              <span className="text-purple-600 dark:text-purple-400">
                GPA: <span className="font-semibold">3.75</span>/4.00
              </span>
            </div>
          </div>
        </div>

        {/* Rajshahi University */}
        <div>
          {/* Mobile View */}
          <div className="sm:hidden space-y-1">
            <h3 className="text-xl font-bold">Rajshahi University of Engineering & Technology</h3>
            <h4 className="text-lg italic text-purple-600 dark:text-purple-400">
              B.Sc. in Electronics & Telecommunication Engineering
            </h4>
            <span className="text-purple-600 dark:text-purple-400 text-base block">Dec 2014</span>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:block">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Rajshahi University of Engineering & Technology</h3>
              <span className="text-purple-600 dark:text-purple-400 text-base">Mar 2010 - Dec 2014</span>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="text-lg italic text-purple-600 dark:text-purple-400">
                B.Sc. in Electronics & Telecommunication Engineering
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
