 import CRM1 from '../../assets/Projects/6.png';
import CRM2 from '../../assets/Projects/7.png';
import CRM3 from '../../assets/Projects/8.png';
import CRM4 from '../../assets/Projects/9.png';
import CRM5 from '../../assets/Projects/10.png';
import CRM6 from '../../assets/Projects/11.png';
import CRM7 from '../../assets/Projects/12.png';
import CRM8 from '../../assets/Projects/13.png';
import ProjectDetailTemplate from './ProjectDetailTemplate';

export default function CRMDetails() {
  return (
    <ProjectDetailTemplate
      title='Customer Relationship Management System'
      year='February - March 2026'
      company='HSI'
      image={CRM1}
      overview='Customer Relationship Management (CRM) System is a web-based platform designed to help organizations efficiently manage customer interactions and ensure that all concerns are properly handled. It provides a centralized system where inquiries from multiple communication channels can be recorded, tracked, and resolved in an organized manner.'
      features={[
        'Centralized Case Management – Log, assign, and track customer concerns',
        'Customer Profiles – Store interaction history and case records',
        'Workflow & Escalation – Structured handling with automatic escalations',
        'Role-Based Access – Secure user roles and permissions',
        'Real-Time Tracking – Monitor case status and team workload',
        'Notifications & Alerts – Updates for new, overdue, or reassigned cases',
        'Case Audit Logs – Full case activity tracking for transparency',
      ]}
      technologies={['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vite', 'Shadcn UI']}
      gallery={[CRM2, CRM3, CRM4, CRM5, CRM6, CRM7, CRM8]}
      userRoles={[
        { 
          role: 'Admin',
          description: 'Oversees the entire system, including user management, configuration, and overall monitoring of customer cases.',
          usersCount: 1,
          capabilities: [
            'Manage all users',
            'Configure system-wide permissions',
            'Access all customer records',
            'Create and monitor customer cases',
          ],
        },
        {
          role: 'Agent',
          description: 'Manages customer cases and distributes sub-cases to employees, with the ability to take over cases when needed.',
          usersCount: 2,
          capabilities: [
            'View and manage assigned customer cases',
            'View all customer cases',
            'Take ownership of available cases',
            'Take ownership of cases assigned to others',
            'Create and manage sub-cases',
            'Assign and reassign sub-cases',
          ],
        },
        {
          role: 'Employee',
          description: 'Handles sub-cases within a customer case and can take ownership of available or assigned tasks when necessary.',
          capabilities: [
            'View and manage assigned sub-cases',
            'View all subcases under their department',
            'Take ownership of available sub-cases',
            'Take ownership of sub-cases assigned to others',
            'Update and resolve sub-cases',
          ],
        }
      ]}
    />
  );
}
