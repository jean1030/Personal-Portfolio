import SpeakSmart from '../../assets/SpeakSmart.png';
import ProjectDetailTemplate from './ProjectDetailTemplate';

export default function SpeakSmartDetails() {
  return (
    <ProjectDetailTemplate
      title='Speak Smart Academy LMS'
      year='June - July 2025'
      company='School Project'
      image={SpeakSmart}
      overview='Speak Smart Academy LMS is a web-based system supporting academic workflows for both instructors and students. It centralizes course content, submissions, and progress monitoring in a single portal.'
      features={[
        'Course and module management for instructors',
        'Assignment posting and submission tracking',
        'Student progress and grade visibility',
        'Basic announcement and class communication flow',
      ]}
      technologies={['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL']}
      gallery={[SpeakSmart]}
      userRoles={[
        {
          role: 'Super Admin',
          description: 'Owns complete platform management.',
          usersCount: 1,
          capabilities: ['Manage terms and users', 'Assign role permissions', 'View full academic reports'],
        },
        {
          role: 'Instructor',
          description: 'Manages classes, assignments, and grading.',
          usersCount: 5,
          capabilities: ['Create lessons', 'Post assignments', 'Grade submissions'],
        },
        {
          role: 'Student',
          description: 'Attends classes and submits coursework.',
          capabilities: ['View modules', 'Submit assignments', 'Track grades'],
        },
      ]}
    />
  );
}
