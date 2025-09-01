
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    duration: string
    description: string[]
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
  {
    school: 'University of Wollongong',
    major: 'Master of Computer Science',
    logo: '/images/icon/uow.jpg',
    duration: '2023 - 2025',
    description: [
      "GPA: 6.88/7.0",
    ]
  },
]