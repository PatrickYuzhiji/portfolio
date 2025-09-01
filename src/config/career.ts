
// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    duration: string
    description: string[]
  }
  
  
  
  export const careerList: Array<CareerItemType> = [
    {
      company: 'University of Wollongong - Bangalay Residence',
      title: 'Resident Ambassador',
      logo: '/images/icon/uow.jpg',
      duration: 'February 2025 - Present',
      description: [
        'Organised social and cultural events to foster community and student engagement.',
        'Supported new residents during check-in and orientation, enhancing the onboarding experience.',
        'Promoted inclusion, wellbeing, and a positive residential environment.',
        'Collaborated with staff and peers to strengthen campus community connections.',
        'Gained leadership, communication, and event coordination skills in a multicultural setting.'
      ]
    },
    {
      company: 'University of Wollongong - Faculty of Engineering and Information Sciences',
      title: 'EIS Student Mentor',
      logo: '/images/icon/uow.jpg',
      duration: 'July 2024 - November 2024',
      description: [
        'Supported new EIS students in academic and social transition through peer mentoring.',
        'Connected mentees with key UOW services, resources, and support systems.',
        'Facilitated group activities to promote engagement, confidence, and a sense of belonging.'
      ]
    },
    {
      company: 'Vanke(Top 3 Real Estate Developers in China)',
      title: 'Real Estate Project Cost Manager',
      logo: '/images/icon/vanke.png',
      duration: '2021 - 2023',
      description: [
        'Developed a dynamic cost monitoring workflow to track and manage budgets across four residential projects, enabling real-time financial oversight and enhanced budget control',
        'Improved financial efficiency by cleaning and analyzing cost data, uncovering contract loopholes and pricing discrepancies to support data-driven decision-making'
      ]
    },
  ]