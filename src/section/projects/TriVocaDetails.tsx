 import Trivoca1 from '../../assets/Projects/1.png';
import Trivoca2 from '../../assets/Projects/2.png';
import Trivoca3 from '../../assets/Projects/3.png';
import Trivoca4 from '../../assets/Projects/4.png';
import Trivoca5 from '../../assets/Projects/5.png';
import ProjectDetailTemplate from './ProjectDetailTemplate';

export default function TriVocaDetails() {
  return (
    <ProjectDetailTemplate
      title='TriVoca Entry Level: Language Proficiency Exam Simulator'
      year='August - November 2025'
      company='Capstone'
      image={Trivoca1}
      overview='TriVoca Entry Level: Language Proficiency Exam Simulator is an application designed to help users prepare for beginner-level language proficiency tests by providing a structured and interactive learning experience. It focuses on improving both test readiness and speaking ability, allowing users to build confidence as they progress.'
      features={[
        'Simulated Exam – Practice beginner-level tests: JLPT N5, TOPIK 1, and HSK 1 in exam-like conditions.',
        'Auto-Generated Exam Performance Report – Instantly see your score and passing rate after each exam.',
        'Progress Tracking – Monitor improvement across multiple attempts and track learning progress.',
        'Vocabulary Mode Speech Practice – Improve pronunciation of individual words using speech recognition.',
        'Conversational Mode Speech Practice – Engage in interactive dialogues to enhance speaking fluency and listening skills.',
        'Lesson Mode – Review modules and listen to correct pronunciation',
      ]}
      technologies={['React Native', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Expo', 'Node.js']}
      gallery={[Trivoca2, Trivoca3, Trivoca4, Trivoca5]}
    />
  );
}
