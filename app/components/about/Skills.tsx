export default function Skills() {
  const skills = [
    // First Column
    {
      name: 'Python',
      level: 90,
      column: 1,
    },
    {
      name: 'R',
      level: 75,
      column: 1,
    },
    {
      name: 'TypeScript',
      level: 85,
      column: 1,
    },
    {
      name: 'Kubernetes',
      level: 85,
      column: 1,
    },
    {
      name: 'Machine Learning',
      level: 80,
      column: 1,
    },
    // Second Column
    {
      name: 'Java',
      level: 85,
      column: 2,
    },
    {
      name: 'HTML',
      level: 90,
      column: 2,
    },
    {
      name: 'Linux',
      level: 85,
      column: 2,
    },
    {
      name: 'bash',
      level: 90,
      column: 2,
    },
    {
      name: 'Microservices',
      level: 70,
      column: 2,
    },
    // Third Column
    {
      name: 'MATLAB',
      level: 90,
      column: 3,
    },
    {
      name: 'CSS',
      level: 85,
      column: 3,
    },
    {
      name: 'Git & Gitlab',
      level: 90,
      column: 3,
    },
    {
      name: 'Node.js',
      level: 75,
      column: 3,
    },
    {
      name: 'AWS',
      level: 70,
      column: 3,
    },
    // Fourth Column
    {
      name: 'SQL',
      level: 85,
      column: 4,
    },
    {
      name: 'JavaScript(React)',
      level: 90,
      column: 4,
    },
    {
      name: 'Docker',
      level: 85,
      column: 4,
    },
    {
      name: 'Django',
      level: 75,
      column: 4,
    },
    {
      name: 'Azure',
      level: 70,
      column: 4,
    },
  ];

  // Function to get skill level category
  const getSkillLevel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Proficient';
    return 'Intermediate';
  };

  // Function to get color class based on level
  const getColorClass = (level: number) => {
    if (level >= 90) return 'bg-purple-600 dark:bg-purple-500';
    if (level >= 80) return 'bg-pink-600 dark:bg-pink-500';
    if (level >= 70) return 'bg-blue-600 dark:bg-blue-500';
    return 'bg-gray-600 dark:bg-gray-500';
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8">Skills</h2>
      
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{getSkillLevel(skill.level)}</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getColorClass(skill.level)} rounded-full transition-all duration-500`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((columnNum) => (
          <div key={columnNum} className="space-y-4">
            {skills
              .filter((skill) => skill.column === columnNum)
              .map((skill) => (
                <div key={skill.name} className="space-y-4">
                  <div className="font-medium text-gray-900 dark:text-gray-100">{skill.name}</div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-pink-600 dark:bg-pink-500 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
