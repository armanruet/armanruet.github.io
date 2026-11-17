export default function Skills() {
  const skillCategories = [
    {
      category: 'ML & Computer Vision',
      items: [
        'PyTorch',
        'Scikit-learn',
        'TensorFlow',
        'YOLOv9',
        'OpenCV',
        'Reinforcement Learning',
      ],
    },
    {
      category: 'Generative AI & LLMs',
      items: ['Hugging Face Transformers', 'RAG', 'LLMs (Gemma)', 'Embeddings'],
    },
    {
      category: 'Programming & APIs',
      items: ['Python', 'SQL', 'Bash', 'FastAPI', 'Flask', 'REST APIs', 'Git'],
    },
    {
      category: 'Data Engineering',
      items: ['pandas', 'Apache Spark', 'dbt', 'BigQuery', 'Kafka', 'ETL pipelines'],
    },
    {
      category: 'Deployment & Cloud',
      items: [
        'Docker',
        'Kubernetes',
        'GitLab CI/CD',
        'GitHub Actions',
        'AWS (EC2, S3, Lambda, DynamoDB)',
        'Azure',
        'Terraform',
      ],
    },
    {
      category: 'Databases & Observability',
      items: ['PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'Grafana'],
    },
  ];

  const languages = [
    { name: 'English', proficiency: 'Fluent (C1+)' },
    { name: 'Luxembourgish', proficiency: 'A2' },
    { name: 'Bengali', proficiency: 'Native' },
    { name: 'Korean', proficiency: 'Basic' },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {skillCategories.map((group) => (
          <div
            key={group.category}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-3 text-pink-600 dark:text-pink-400">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white dark:bg-gray-700/80 rounded-full text-sm text-gray-800 dark:text-gray-200 shadow-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-4">Languages</h3>
      <div className="flex flex-wrap gap-4">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="px-4 py-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg flex items-center gap-2 text-sm"
          >
            <span className="font-semibold text-gray-900 dark:text-gray-100">{lang.name}:</span>
            <span className="text-purple-600 dark:text-purple-400">{lang.proficiency}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
