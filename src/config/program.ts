// program
export type ProgramItemType = {
    title: string
    organization: string
    liveUrl?: string
    duration: string
    logo: string
    description: string[]
  }
  
  
  
  export const programList: Array<ProgramItemType> = [
    {
      title: "Stephen FitzGerald Scholarship Program",
      organization: "National Foundation for Australia-China Relations | Australian National University",
      liveUrl: "https://ausi.anu.edu.au/events/stephen-fitzgerald-scholars-program#acton-tabs-link--tabs-0-footer-2",
      duration: "November 2024",
      logo: "/images/icon/SFSP-logo.png",
      description: [
        "The Stephen FitzGerald Scholars Program is a prestigious and unique national program that brings selected Chinese students to the capital for an immersive and rewarding three-day tour. Funded by the National Foundation for Australia-China Relations (NFACR), an initiative of the Department of Foreign Affairs and Trade, the program fosters strong and lasting links and cooperation between the two countries through the next generation of Chinese leaders.",
        "Now in its second year, this unique opportunity has become a valued part of the Australian experience for those who gain selection. It promotes connections between Australia and China, and builds understanding and exchange between the two countries. The inaugural cohort had 30 Chinese scholars from 20 Australian universities.",
        "The Stephen FitzGerald Scholars Program is supported by the National Foundation for Australia-China Relations. The ANU Australian Studies Institute is proud to be a National Foundation for Australia-China Relations grant recipient."
      ]
    },
    {
      title: "EIS Summer Scholarship Program",
      organization: "University of Wollongong - Faculty of Engineering and Information Sciences",
      liveUrl: "https://www.uow.edu.au/engineering-information-sciences/summer-scholarships/",
      duration: "November 2024 - March 2025",
      logo: "/images/icon/uow.jpg",
      description: [
        "The EIS High-Achieving Student Scholarships are designed to support outstanding students who are completing their undergraduate studies in 2025 and intend to pursue a higher degree by research in 2026. The program also welcomes applications from full-time Master's (coursework) students who demonstrate strong academic performance and research potential.",
        "These scholarships, valued at $500 per week, will be awarded based on academic merit and research potential in the applicant's preferred area of study. The scholarship duration can be up to 8 or 10 weeks, as agreed upon.",
        "EIS is committed to fostering an inclusive and diverse academic environment and encourages students from all backgrounds to apply. This program provides a valuable opportunity for high-achieving students to gain research experience and prepare for their future studies in an engaging and supportive setting."
      ]
    },
    {
      title: "Study Australia Industry Experience Program",
      organization: "International Education Australian Trade and Investment Commission",
      liveUrl: "https://www.studyaustralia.gov.au/en/work-in-australia/getting-work-and-industry-experience/study-australia-industry-experience-program-saiep",
      duration: "November 2023",
      logo: "/images/icon/saiep-logo.jpg",
      description: [
        "The Study Australia Industry Experience Program (SAIEP) provides an opportunity for current Australian international students, who are studying in Australia, in their home country or online, to engage in real world industry projects with the end goal to improve post-study employment prospects.",
        "This program connects international students directly with employers in Australia and internationally, while integrating with domestic Australian students within peer-to-peer communities.",
        "The co-curricular and online programs run for 25 hours over a two-week period, with student teams based across a wide range of Australian education providers."
      ]
    }
  ]