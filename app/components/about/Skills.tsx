export default function Skills() {
  const skills = [
    // First Column - Expert Level
    {
      name: 'Python',
      level: 90,
      column: 1,
      status: 'Current'
    },
    {
      name: 'R',
      level: 75,
      column: 1,
      status: '2023'
    },
    {
      name: 'TypeScript',
      level: 85,
      column: 1,
      status: 'Current'
    },
    {
      name: 'Kubernetes',
      level: 85,
      column: 1,
      status: '2023'
    },
    {
      name: 'Machine Learning',
      level: 80,
      column: 1,
      status: '2022'
    },
    // Second Column
    {
      name: 'Java',
      level: 85,
      column: 2,
      status: '2023'
    },
    {
      name: 'HTML',
      level: 90,
      column: 2,
      status: 'Current'
    },
    {
      name: 'Linux',
      level: 85,
      column: 2,
      status: 'Current'
    },
    {
      name: 'bash',
      level: 90,
      column: 2,
      status: 'Current'
    },
    {
      name: 'Microservices',
      level: 70,
      column: 2,
      status: '2023'
    },
    // Third Column
    {
      name: 'MATLAB',
      level: 90,
      column: 3,
      status: '2022'
    },
    {
      name: 'CSS',
      level: 85,
      column: 3,
      status: 'Current'
    },
    {
      name: 'Git & Gitlab',
      level: 90,
      column: 3,
      status: 'Current'
    },
    {
      name: 'Node.js',
      level: 75,
      column: 3,
      status: '2023'
    },
    {
      name: 'AWS',
      level: 70,
      column: 3,
      status: '2023'
    },
    // Fourth Column
    {
      name: 'SQL',
      level: 85,
      column: 4,
      status: 'Current'
    },
    {
      name: 'JavaScript(React)',
      level: 90,
      column: 4,
      status: 'Current'
    },
    {
      name: 'Docker',
      level: 85,
      column: 4,
      status: 'Current'
    },
    {
      name: 'Django',
      level: 75,
      column: 4,
      status: '2023'
    },
    {
      name: 'Azure',
      level: 70,
      column: 4,
      status: '2023'
    },
  ];

  // Group skills by level for mobile view
  const groupedSkills = skills.reduce((acc, skill) => {
    const level = skill.level >= 90 ? 'Expert' :
                 skill.level >= 80 ? 'Advanced' :
                 skill.level >= 70 ? 'Proficient' : 'Intermediate';
    
    if (!acc[level]) {
      acc[level] = [];
    }
    acc[level].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8">Skills</h2>
      
      {/* Mobile View */}
      <div className="md:hidden space-y-6">
        {Object.entries(groupedSkills).map(([level, levelSkills]) => (
          <div key={level} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">{level}</h3>
            <div className="space-y-3">
              {levelSkills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                  <span className={`text-sm px-2 py-0.5 rounded ${
                    skill.status === 'Current'
                      ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}>
                    {skill.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
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
