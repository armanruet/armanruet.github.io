import ProfileHeader from '../components/about/ProfileHeader';
import Skills from '../components/about/Skills';
import Experience from '../components/about/Experience';
import Education from '../components/about/Education';
import Projects from '../components/about/Projects';
import Awards from '../components/about/Awards';
import Publications from '../components/about/Publications';

export const metadata = {
  title: 'About',
  description: 'About Arman Hossen',
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ProfileHeader />
      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Machine Learning Engineer with hands-on experience building, evaluating, and deploying end-to-end ML solutions using Python, PyTorch, Scikit-learn, FastAPI, and Docker. Delivered measurable impact through real-time inference systems that reduced manual inspection time by 70%, distributed data pipelines processing 10,000+ messages/sec, and database optimizations that improved query latency by 40%. Published researcher in IEEE Access and co-inventor of a patent in reinforcement learning optimization. Currently expanding expertise in deep learning, transformers, and Generative AI through DLH AI Academy.
        </p>
      </div>
      <div className="space-y-16">
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Awards />
        <Publications />
      </div>
    </div>
  );
}
