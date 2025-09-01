// projects
export const projectHeadLine = "What I've done and what I'm doing."
export const projectIntro = "I've worked on a variety of projects, from web to mobile applications. Here are a few of my favorites."

export type ProjectItemType = {
    Id: string
    name: string
    description: string
    link: string
    liveUrl?: string
    gitHubUrl?: string
    Details?: string[]
    techStack?: string[]
    logo?: string
    screenshot?: string
  }
  
  // projects 
  export const projectsWeb: Array<ProjectItemType> = [
    {
      Id: 'ITTechWebsite',
      name: 'Antenna & IT Support',
      description:
        'Next.js IT support site with CMS, email automation, SEO, antenna, security, and support services.',
      link: '/projects/ITTechWebsite',
      liveUrl: 'https://antenna-1gcp.vercel.app/',
      gitHubUrl: 'https://github.com/PatrickYuzhiji/antenna',
      Details: [
        "Built a mobile-first, responsive user interface using Next.js 15 and Tailwind CSS 4.0, with reusable TypeScript-based components and accessible, branded design",
        "Integrated Resend for dual automated email workflows, sending structured admin notifications and customer confirmations with custom React email templates",
        "Implemented Sanity CMS for headless blog management with rich content editing, author management, image optimization, and live content preview",
        "Optimized for SEO with structured data, dynamic sitemaps, robots.txt, Open Graph metadata, and local business schema targeting Wollongong area",
        "Deployed on Vercel with serverless architecture ensuring zero server maintenance, supporting real-time updates on GitHub push with zero downtime",
        "A real-world paid project developed independently for a digital agency"
      ],
      techStack: ['NextJS',
      'TypeScript',
      'TailwindCSS',
      'SanityCMS',
      'Resend',
      'Vercel'],
      logo: '/images/icon/antenna-logo.png',  
      screenshot: '/images/projects/ITTechWebsite.webp',
    },
    {
      Id: 'EasyEV',
      name: 'EasyEV Charging',
      description:
        'EV charging Station management with real-time tracking.',
      link: '/projects/EasyEV',
      liveUrl: 'https://easyev.infinityfreeapp.com/',
      gitHubUrl: 'https://github.com/PatrickYuzhiji/EasyEV-Charging-Project',
      Details: [
        "Developed role-based system with separate interfaces and capabilities for administrators and users, enhancing usability and data control",
        "Implemented real-time location availability tracking and session-based cost calculation using PHP and MySQL with foreign key constraints",
        "Created responsive frontend using HTML, CSS, and JavaScript, including location management dashboard, user registration, and charging session views",
        "Enabled auto-generation of database schema and sample data on first run, simplifying deployment across environments",
        "Deployed application on InfinityFree free hosting platform with manual database setup and PHP environment configuration"
      ],
      techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      logo: '/images/icon/EasyEV-logo.png',
      screenshot: '/images/projects/EasyEV.webp',
    },
    {
      Id: 'BadgerChat',
      name: 'BadgerChat',
      description:
        'A small frontend project enabling real-time communication in various chatrooms.',
      link: '/projects/BadgerChat',
      gitHubUrl: 'https://github.com/PatrickYuzhiji/BadgerChat',
      Details: [
        "Implemented user authentication with registration, login, logout, and session persistence using context API and sessionStorage, ensuring seamless user experiences",
        "Built message posting, pagination, and deletion features with fetch API, enforcing role-based access control and efficient state management using React Hooks (useState, useEffect, useContext)",
        "Ensured form validation and accessibility by integrating regular expressions, semantic HTML, and labeled form controls, improving security and user experience"
      ],
      techStack: ['React', 'Bootstrap', 'Vite'],
      logo: '/images/icon/BadgerChat-logo.png',
      screenshot: '/images/projects/BadgerChat.webp',
    },
    {
      Id: 'EasyParking',
      name: 'EasyParking Portal',
      description:
        'A full-stack project for managing parking spaces, allowing users to log in, check in/out.',
      link: '/projects/EasyParking',
      Details: [
        "Implemented administrator features enabling managers to add/remove parking lots and spaces, insert/edit parking locations, search parking spots, and view user data",
        "Created backend services as RESTful APIs using Python, FastAPI, and Postman, and designed a user-friendly interface using HTML5, CSS, JavaScript, and jQuery",
        "Utilized Docker to containerize MySQL, leveraging SQLAlchemy's ORM capabilities for data operations such as create, read, update, and delete"
      ],
      techStack: [
        'HTML',
        'CSS',
        'JavaScript',
        'Python',
        'FastAPI',
        'MySQL',
        'SQLAlchemy',
        'Docker',
        'jQuery',
        'Postman'
      ],
      logo: '/images/icon/EasyParking-logo.png',
      screenshot: '/images/projects/EasyParking.webp',
    },
    {
      Id: 'GiphySearch',
      name: 'Giphy Search',
      description:
        'A single-page app to search and browse GIFs using the Giphy API.',
      link: '/projects/GiphySearch',
      gitHubUrl: 'https://github.com/PatrickYuzhiji/GiphySearchApp',
      Details: [
        "Implemented pagination, search, loading indicators, and copy-to-clipboard functionality for each GIF",
        "Employed React Context API for state management (search term, pagination, loading states)",
        "Styled the UI with React Bootstrap and custom CSS, ensuring a clean, modern interface",
        "Configured a serverless workflow for deployment via AWS (S3 + CloudFront) and maintained build scripts for production readiness"
      ],
      techStack: ['React', 'Bootstrap', 'AWS', 'Serverless', 'Axios'],
      logo: '/images/icon/GiphySearch-logo.png',
      screenshot: '/images/projects/GiphySearch.webp',
    },
  ]

// 为了兼容性，添加 projects 导出
export const projects = projectsWeb

export const projectsMobile: Array<ProjectItemType> = [
     {
       Id: 'SLACA',
       name: 'SLACA - Student Lifestyle and Academic Convenience Aid',
       description:
         'A smart and student-centric platform that integrates community interaction and an AI-powered assistant to enhance university life.',
       link: '/projects/SLACA',
       liveUrl: 'https://youtu.be/BfHOfMSaIE0/',
       Details: [
         "Designed and built a modular full-stack application using FastAPI for backend services and React-based frontend modules for seamless student interaction",
         "Implemented LLM-powered chatbot enhanced with Retrieval-Augmented Generation (RAG) to deliver contextual, evolving responses based on user-generated content",
         "Developed key modules including Circle (community posts), Study (course/program explorer), Media (event updates), Vendor (student deals), and Me (profile and contribution tracking)",
         "Integrated gamification through point-based participation rewards, enhancing student engagement within communities",
         "Collaborated within a 5-person interdisciplinary team and received supervision from Prof. Lei Wang, achieving High Distinction for innovation and impact"
       ],
       techStack: ['FastAPI', 'React', 'PostgreSQL', 'Python', 'TypeScript', 'Expo'],
       logo: '/images/icon/SLACA-logo.png',
       screenshot: '/images/projects/SLACA.webp',
     },
     {
       Id: 'SoilSwellApp',
       name: 'Soil Swell Potential Prediction',
       description:
         'A fully offline application to predict the swelling potential of soils.',
       link: '/projects/SoilSwellApp',
       liveUrl: 'https://youtube.com/shorts/z3A3B9INcyg?feature=share',
       Details: [
         "Built an intuitive user interface using React Native and Expo, incorporating AsyncStorage, FileSystem, and Sharing for efficient data storage and management",
         "Integrated and deployed optimized machine learning models (ONNX) using onnxruntime-react-native, enabling real-time, offline predictions directly on mobile devices",
         "Awarded a $6,000 scholarship through the UOW EIS Summer Scholarship Program in recognition of contributions to this innovative project",
         "Note: Due to the proprietary nature of the project, the codebase is not publicly available"
       ],
       techStack: ['ReactNative', 'Expo', 'ONNX'],
       logo: '/images/icon/SwellApp-logo.png',
       screenshot: '/images/projects/SoilSwellApp.webp',
     },
   ]

     export const projectsMore: Array<ProjectItemType> = [
     {
       Id: 'UK2007SpamDetection',
       name: 'UK2007 Spam Detection Analysis',
       description:
         'A comprehensive machine learning school project focused on detecting web spam.',
       link: '/projects/UK2007SpamDetection',
       gitHubUrl: 'https://github.com/PatrickYuzhiji/datamining',
       Details: [
         "Analyzed three types of features — Direct, Link-based (transformed), and Content-based — to determine the best predictors of web spam",
         "Applied machine learning models including Logistic Regression, Random Forest, and SVM using R and evaluated with cross-validation",
         "Performed feature set combination analysis to test additive performance effects and ranked models using AUC as the primary metric",
         "Automated full report generation with RMarkdown, including plots, tables, and ROC curves for each classifier-feature combination",
         "Provided domain-specific discussion on spam detection strategies and summarized insights into feature importance and classifier behavior"
       ],
       techStack: ['R', 'RStudio', 'Markdown'],
       logo: '/images/icon/UK2007SpamDetection-logo.png',
       screenshot: '/images/projects/UK2007SpamDetection.webp',
     },
     {
       Id: 'GradConnectionScraper',
       name: 'GradConnection Job Scraper',
       description:
         'A web crawler using the Scrapy framework to extract job listings from GradConnection Australia.',
       link: '/projects/GradConnectionScraper',
       gitHubUrl: 'https://github.com/PatrickYuzhiji/GradConnection-Job-Scraper',
       Details: [
         "Developed a robust Scrapy-based crawler to collect and parse job listings including title, company, type, location, deadline, and direct link",
         "Implemented pagination handling and flexible job category filtering through customizable start URLs for various disciplines",
         "Structured data pipeline with modular components for items, pipelines, and custom middlewares"
       ],
       techStack: ['Python', 'Scrapy'],
       logo: '/images/icon/GradConnectionScraper-logo.png',
       screenshot: '/images/projects/GradConnectionScraper.webp',
     },
   ]
