import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'

import { projectHeadLine, projectIntro, projectsWeb, projectsMobile, projectsMore } from '@/config/projects'

import { ProjectCard } from '@/components/project/ProjectCard'
import { CustomIcon } from '@/components/shared/CustomIcon'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web applications, mobile apps, and other projects. Built with modern technologies including React, Next.js, Python, and more.',
  keywords: [
    'Patrick Zhiji Yu Projects',
    'Web Applications',
    'Mobile Applications',
    'React Projects',
    'Next.js Projects',
    'Python Projects',
    'Full-Stack Projects',
    'Portfolio Projects',
    'Software Development'
  ],
  openGraph: {
    title: 'Projects - Patrick Zhiji Yu Portfolio',
    description: 'Explore my portfolio of web applications, mobile apps, and other projects. Built with modern technologies including React, Next.js, Python, and more.',
    url: 'https://www.patrickyu.work/projects',
    type: 'website',
    images: [
      {
        url: 'https://www.patrickyu.work/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Patrick Zhiji Yu Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Patrick Zhiji Yu Portfolio',
    description: 'Explore my portfolio of web applications, mobile apps, and other projects. Built with modern technologies including React, Next.js, Python, and more.',
    images: ['https://www.patrickyu.work/images/og-image.jpg'],
  },
}

export default function Projects() {
  return (
    <SimpleLayout
      title={projectHeadLine}
      intro={projectIntro}
    >

      <div className="space-y-12">
        <div>
          <h2 className="flex flex-row items-center justify-start text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-6">
            Web Applications
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {projectsWeb.map((project) => (
              <ProjectCard key={project.Id} project={project} titleAs='h3'/>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="flex flex-row items-center justify-start text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-6">
            Mobile Applications
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {projectsMobile.map((project) => (
              <ProjectCard key={project.Id} project={project} titleAs='h3'/>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="flex flex-row items-center justify-start text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-6">
            And More...
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {projectsMore.map((project) => (
              <ProjectCard key={project.Id} project={project} titleAs='h3'/>
            ))}
          </ul>
        </div>
      </div>

    </SimpleLayout>
  )
}
