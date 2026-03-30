import Quiztopia from '../../assets/Quiztopia.png';
import Quiztopia1 from '../../assets/Projects/14.png';
import Quiztopia2 from '../../assets/Projects/15.png';
import Quiztopia3 from '../../assets/Projects/16.png';
import Quiztopia4 from '../../assets/Projects/17.png';
import ProjectDetailTemplate from './ProjectDetailTemplate';

export default function QuiztopiaDetails() {
  return (
    <ProjectDetailTemplate
      title='Quiztopia'
      year='October - November 2025'
      company='School Project'
      image={Quiztopia1}
      overview='Quiztopia is a web application that gamifies geography learning through varied quiz formats such as flag identification, landmark recognition, and image-based word puzzles.'
      features={[
        'Simple category-based navigation for learners – Users can easily choose what type of quiz or game they want (like flags, landmarks, or puzzles) through a clear, organized menu.',
        'Guess the Country by Landmark – Match famous landmarks to their countries as the levels get harder.',
        'Guess the Country by Flag – Identify countries by their flags with challenges increasing at higher levels.',
        '4 Pics 1 Word – Identify the common word from four images with increasing difficulty at each level.',
      ]}
      technologies={['Python (Django)', 'HTML', 'Tailwind CSS', 'SQLite', 'JavaScript']}
      gallery={[Quiztopia2, Quiztopia3, Quiztopia4]}
    />
  );
}
