"use client"

import { HashIcon } from 'lucide-react'
import Image from 'next/image'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { ProjectItemType } from '@/config/projects'
import Link from 'next/link'

export function ProjectCard({ project, titleAs }: { project: ProjectItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  let Component = titleAs ?? 'h2'
  
  return (
    <li className='group relative flex flex-col items-start h-full'>
      <div className="relative flex flex-col justify-between h-full w-full p-4 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
        <div className=''>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4'>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
              {project.logo ? (
                <Image 
                  src={project.logo} 
                  alt={`${project.name} logo`}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary text-sm font-semibold">
                    {project.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <Component className="text-base font-semibold">
              {project.name}
            </Component>
          </div>
          <p className="relative z-10 mt-2 text-sm text-muted-foreground ml-2">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-4 ml-1">
          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-x-2 items-center">
              {project.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-0.5 group"
                >
                  <HashIcon className="w-3 h-3 text-muted-foreground icon-scale" />
                  <span className="text-xs text-muted-foreground tracking-tighter">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* 点击跳转到详情页 */}
        <Link
          href={project.link}
          className='absolute inset-0 z-20'>
          <ArrowUpRightIcon size={32} weight="duotone" className="absolute top-4 right-4 h-4 w-4 group-hover:text-primary group-hover:cursor-pointer" />
        </Link>
      </div>
    </li>
  )
}