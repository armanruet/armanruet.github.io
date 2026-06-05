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
          I architect intelligent systems that bridge research and industry. I'm a software engineer specializing in machine learning and cloud solutions, crafting robust applications that solve complex challenges. Currently, I'm focused on building intelligent workflow management systems at Dropslab Technologies that enhance human efficiency.
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
