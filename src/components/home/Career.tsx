"use client"

import Image from 'next/image'
import { BriefcaseIcon, CalendarIcon } from '@phosphor-icons/react'
import { CareerItemType, careerList } from '@/config/career'

function CareerCard({ career }: { career: CareerItemType }) {
  return (
    <li className="group relative flex flex-col items-start h-full">
      <div className="relative flex flex-col justify-between h-full w-full p-4 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
        <div>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
              <Image 
                src={career.logo} 
                alt={`${career.company} logo`} 
                width={42} 
                height={42}
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold">
                {career.title}
              </h3>
            </div>
          </div>
          <p className="relative z-10 mt-2 text-sm text-muted-foreground ml-2">
            {career.company}
          </p>
          <div className="relative z-10 mt-1 ml-2 flex items-center gap-2 text-xs text-muted-foreground">
            <CalendarIcon size={14} weight="duotone" />
            <span>{career.duration}</span>
          </div>
          
          {career.description && (
            <div className="relative z-10 mt-2 ml-2 space-y-1">
              {career.description.map((desc, index) => (
                <p key={index} className="text-sm text-muted-foreground">
                  {desc}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

export default function Career() {
  return (
    <div className="space-y-8">
      {/* Career Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <BriefcaseIcon size={20} weight="duotone" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
            {/* <p className="text-sm text-muted-foreground">Professional Background</p> */}
          </div>
        </div>
        
        <ul className="space-y-4">
          {careerList.map((career, index) => (
            <CareerCard key={index} career={career} />
          ))}
        </ul>
      </div>
    </div>
  )
}