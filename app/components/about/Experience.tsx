export default function Experience() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Experience</h2>
      <div className="space-y-8">
        {/* LIST via DLH AI Academy */}
        <div>
          {/* Mobile View */}
          <div className="sm:hidden">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              LLM Assistant for Scientific Data (BRAMS)
            </h3>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-lg text-gray-700 dark:text-gray-300">
                AI Capstone | LIST & DLH AI Academy
              </span>
              <span className="text-sm text-pink-600 dark:text-pink-400">October 2026 – Present</span>
            </div>
            <ul className="list-disc pl-4 space-y-1.5 text-[16px]">
              <li className="text-gray-600 dark:text-gray-400">
                Building a Gradio and Pydantic AI assistant that answers researchers&apos; questions
                from the BRAMS radio meteor archive through validated tool calls (PyBRAMS SDK), plus
                a local YOLOv11-n meteor echo detector.
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Runs on a local LLM (llama.cpp) or hosted OpenAI-compatible APIs; raw data stays
                local and API keys are session-scoped, never stored or sent in prompts.
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Added grounding checks, repeated-call guards and safe fallbacks; built an evaluation
                harness (54 tasks, holdout set, human review) comparing 4 models, backed by{' '}
                <strong className="font-semibold text-gray-800 dark:text-gray-200">138</strong>{' '}
                automated tests.
              </li>
            </ul>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:block">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-1 sm:space-y-0">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                AI Capstone | LIST & DLH AI Academy
              </h3>
              <span className="text-pink-600 dark:text-pink-400 text-base flex-shrink-0">
                October 2026 – Present
              </span>
            </div>
            <h4 className="text-lg italic text-gray-700 dark:text-gray-300 mb-3">
              LLM Assistant for Scientific Data (BRAMS)
            </h4>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-[18px]">
              <li className="text-gray-600 dark:text-gray-400 ml-1">
                Building a Gradio and Pydantic AI assistant that answers researchers&apos; questions
                from the BRAMS radio meteor archive through validated tool calls (PyBRAMS SDK), plus
                a local YOLOv11-n meteor echo detector.
              </li>
              <li className="text-gray-600 dark:text-gray-400 ml-1">
                Runs on a local LLM (llama.cpp) or hosted OpenAI-compatible APIs; raw data stays
                local and API keys are session-scoped, never stored or sent in prompts.
              </li>
              <li className="text-gray-600 dark:text-gray-400 ml-1">
                Added grounding checks, repeated-call guards and safe fallbacks; built an evaluation
                harness (54 tasks, holdout set, human review) comparing 4 models, backed by{' '}
                <strong className="font-semibold text-gray-800 dark:text-gray-200">138</strong>{' '}
                automated tests.
              </li>
            </ul>
          </div>
        </div>

        {/* Dropslab Technologies */}
        <div>
          {/* Mobile View */}
          <div className="sm:hidden">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Software Engineer — Machine Learning & Production Systems
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg text-gray-700 dark:text-gray-300">
                Dropslab Technologies – Luxembourg
              </span>
              <span className="text-sm text-pink-600 dark:text-pink-400">Feb 2024 – Feb 2026</span>
            </div>
            <ul className="list-disc pl-4 space-y-1.5 text-[16px]">
              <li className="text-gray-600 dark:text-gray-400">
                Developed and deployed a YOLOv9 computer vision model for industrial assembly
                verification, integrating real-time inference with factory systems via FastAPI and
                reducing manual inspection time by 70%.
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Built automated CI/CD pipelines using GitLab CI/CD, Docker, and Kubernetes,
                reducing deployment lead time by 60%.
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Architected and deployed an AWS-hosted MQTT message broker processing 10,000+
                messages/sec with 99.9% uptime, enabling reliable industrial IoT data ingestion.
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Developed automated workflows and ETL pipelines with REST API integrations, reducing
                manual processing overhead by 40%.
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Engineered a real-time industrial Pick-to-Light control system achieving 99.9%
                picking accuracy through sensor feedback validation and automated control logic.
              </li>
            </ul>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:block">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-1 sm:space-y-0">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Dropslab Technologies – Luxembourg
              </h3>
              <span className="text-pink-600 dark:text-pink-400 text-base">Feb 2024 – Feb 2026</span>
            </div>
            <h4 className="text-lg italic text-gray-700 dark:text-gray-300 mb-3">
              Software Engineer — Machine Learning & Production Systems
            </h4>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-[18px]">
              <li className="text-gray-600 dark:text-gray-400 ml-1">
                Developed and deployed a YOLOv9 computer vision model for industrial assembly
                verification, integrating real-time inference with factory systems via FastAPI and
                reducing manual inspection time by <strong className="font-semibold text-gray-800 dark:text-gray-200">70%</strong>.
              </li>
              <li className="text-gray-600 dark:text-gray-400 ml-1">
                Built automated CI/CD pipelines using GitLab CI/CD, Docker, and Kubernetes,
                reducing deployment lead time by <strong className="font-semibold text-gray-800 dark:text-gray-200">60%</strong>.
              </li>
              <li className="text-gray-600 dark:text-gray-400 ml-1">
                Architected and deployed an AWS-hosted MQTT message broker processing{' '}
                <strong className="font-semibold text-gray-800 dark:text-gray-200">10,000+ messages/sec</strong> with{' '}
                <strong className="font-semibold text-gray-800 dark:text-gray-200">99.9% uptime</strong>, enabling reliable industrial IoT
                data ingestion.
              </li>
              <li className="text-gray-600 dark:text-gray-400 ml-1">
                Developed automated workflows and ETL pipelines with REST API integrations, reducing
                manual processing overhead by <strong className="font-semibold text-gray-800 dark:text-gray-200">40%</strong>.
              </li>
              <li className="text-gray-600 dark:text-gray-400 ml-1">
                Engineered a real-time industrial Pick-to-Light control system achieving{' '}
                <strong className="font-semibold text-gray-800 dark:text-gray-200">99.9% picking accuracy</strong> through sensor feedback
                validation and automated control logic.
              </li>
            </ul>
          </div>
        </div>

        {/* SnT Research Center, University of Luxembourg */}
        <div>
          {/* Mobile View */}
          <div className="sm:hidden">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Research Software Engineer — Machine Learning & Optimization
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg text-gray-700 dark:text-gray-300">
                SnT Research Center, University of Luxembourg
              </span>
              <span className="text-sm text-pink-600 dark:text-pink-400">Sep 2020 – Jun 2023</span>
            </div>
            <ul className="list-disc pl-4 space-y-1.5 text-[16px]">
              <li className="text-gray-600 dark:text-gray-400">
                Designed, trained, and evaluated reinforcement learning (Q-Learning) algorithms for
                cognitive radio network optimization, reducing latency by 40% and improving
                reliability by 35%.
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Conducted reproducible ML experiments and hyperparameter optimization on a 16-core
                research computing cluster using Docker.
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Optimized PostgreSQL and Oracle database performance through advanced SQL query
                tuning and indexing, reducing query latency by 40%.
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Secured competitive FNR research funding and translated research into a
                peer-reviewed IEEE Access publication and a co-invented patent on algorithmic
                optimization.
              </li>
            </ul>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:block">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-1 sm:space-y-0">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                SnT Research Center, University of Luxembourg
              </h3>
              <span className="text-pink-600 dark:text-pink-400 text-base">Sep 2020 – Jun 2023</span>
            </div>
            <h4 className="text-lg italic text-gray-700 dark:text-gray-300 mb-3">
              Research Software Engineer — Machine Learning & Optimization
            </h4>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-[18px]">
              <li className="text-gray-600 dark:text-gray-400 ml-1">
                Designed, trained, and evaluated reinforcement learning (Q-Learning) algorithms for
                cognitive radio network optimization, reducing latency by{' '}
                <strong className="font-semibold text-gray-800 dark:text-gray-200">40%</strong> and improving reliability by{' '}
                <strong className="font-semibold text-gray-800 dark:text-gray-200">35%</strong>.
              </li>
              <li className="text-gray-600 dark:text-gray-400 ml-1">
                Conducted reproducible ML experiments and hyperparameter optimization on a{' '}
                <strong className="font-semibold text-gray-800 dark:text-gray-200">16-core research computing cluster</strong> using
                Docker.
              </li>
              <li className="text-gray-600 dark:text-gray-400 ml-1">
                Optimized PostgreSQL and Oracle database performance through advanced SQL query
                tuning and indexing, reducing query latency by{' '}
                <strong className="font-semibold text-gray-800 dark:text-gray-200">40%</strong>.
              </li>
              <li className="text-gray-600 dark:text-gray-400 ml-1">
                Secured competitive FNR research funding and translated research into a
                peer-reviewed <em>IEEE Access</em> publication and a co-invented patent on
                algorithmic optimization.
              </li>
            </ul>
          </div>
        </div>

        {/* Fiber@Home Limited */}
        <div>
          {/* Mobile View */}
          <div className="sm:hidden">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              IT Support Engineer — Network Operations
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg text-gray-700 dark:text-gray-300">
                Fiber@Home Limited – Dhaka, Bangladesh
              </span>
              <span className="text-sm text-pink-600 dark:text-pink-400">Jan 2016 – Feb 2018</span>
            </div>
            <ul className="list-disc pl-4 space-y-1.5 text-[16px]">
              <li className="text-gray-600 dark:text-gray-400">
                Monitored a 56,345 km optical fiber network serving 100,000+ customers, diagnosing
                network anomalies and coordinating incident resolution within SLA requirements.
              </li>
            </ul>
          </div>

          {/* Desktop View */}
          <div className="hidden sm:block">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 space-y-1 sm:space-y-0">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Fiber@Home Limited – Dhaka, Bangladesh
              </h3>
              <span className="text-pink-600 dark:text-pink-400 text-base">Jan 2016 – Feb 2018</span>
            </div>
            <h4 className="text-lg italic text-gray-700 dark:text-gray-300 mb-3">
              IT Support Engineer — Network Operations
            </h4>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-[18px]">
              <li className="text-gray-600 dark:text-gray-400 ml-1">
                Monitored a <strong className="font-semibold text-gray-800 dark:text-gray-200">56,345 km optical fiber network</strong>{' '}
                serving <strong className="font-semibold text-gray-800 dark:text-gray-200">100,000+ customers</strong>, diagnosing
                network anomalies and coordinating incident resolution within SLA requirements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
