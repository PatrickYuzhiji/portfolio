import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon, HashIcon } from 'lucide-react'
import { projects, projectsWeb, projectsMobile, projectsMore, ProjectItemType } from '@/config/projects'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // 从所有三个项目数组中查找项目
  const allProjects = [...projectsWeb, ...projectsMobile, ...projectsMore]
  const project = allProjects.find((p) => p.Id === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.name,
    description: project.description,
  }
}

// 生成静态路径
export async function generateStaticParams() {
  // 为所有三个项目数组生成静态路径
  const allProjects = [...projectsWeb, ...projectsMobile, ...projectsMore]
  return allProjects.map((project) => ({
    slug: project.Id,
  }))
}

export default function ProjectDetailPage({ params }: Props) {
  // 从所有三个项目数组中查找项目
  const allProjects = [...projectsWeb, ...projectsMobile, ...projectsMore]
  const project = allProjects.find((p) => p.Id === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <SimpleLayout
      title={project.name}
      intro={project.description}
    >
      {/* Back to Projects */}
      <div className="mb-6">
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeftIcon size={16} />
          Back to Projects
        </Link>
      </div>

      {/* Project Links  */}
      <div className="mb-8 flex justify-center">
        <div className="flex flex-wrap gap-4 justify-center">
          {project.liveUrl && (
            <Link 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-muted-foreground/20 text-foreground rounded-xl text-sm font-medium hover:bg-muted/50 transition-colors shadow-sm"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              View Live Demo
            </Link>
          )}
          {project.gitHubUrl && (
            <Link 
              href={project.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-muted-foreground/20 text-foreground rounded-xl text-sm font-medium hover:bg-muted/50 transition-colors shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              View Source Code
            </Link>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="space-y-8">
        {/* Screenshot Section */}
        {project.screenshot && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Screenshot</h2>
            <div className="flex justify-center">
              <div className="max-w-4xl">
                <div className="rounded-2xl border border-muted-foreground/20 overflow-hidden">
                  <Image 
                    src={project.screenshot} 
                    alt={`${project.name} screenshot`}
                    width={800}
                    height={600}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* tech stack logo section  */}
        

        {/* Project Details */}
        {project.Details && project.Details.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Project Details</h2>
            <div className="space-y-3">
              {project.Details.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technologies Used */}
        {project.techStack && project.techStack.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-1 px-3 py-1.5 bg-muted text-muted-foreground rounded-lg text-sm hover:bg-muted/80 transition-colors"
                >
                  <HashIcon className="w-3 h-3" />
                  {tech}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Project Links section removed - moved to top */}
      </div>
    </SimpleLayout>
  )
}
