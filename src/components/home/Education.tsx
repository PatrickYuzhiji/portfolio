"use client"

import { useState } from 'react'
import Image from 'next/image'
import { GraduationCapIcon, TrophyIcon, CalendarIcon, ArrowUpRightIcon, XIcon, EyeIcon } from '@phosphor-icons/react'
import { educationList, EducationItemType } from '@/config/education'
import { programList, ProgramItemType } from '@/config/program'
import Link from 'next/link'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  program: ProgramItemType
}

function ProgramModal({ isOpen, onClose, program }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background border border-muted-foreground/20 rounded-3xl shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-muted-foreground/10">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{program.organization}</h3>
            <p className="text-sm text-muted-foreground">{program.duration}</p>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-muted/50 transition-colors"
          >
            <XIcon size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-foreground mb-2">{program.title}</h4>
            <p className="text-base font-medium text-primary">{program.duration}</p>
          </div>

          <div className="space-y-4">
            {program.description.map((desc, index) => (
              <p key={index} className="text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function EducationCard({ education }: { education: EducationItemType }) {
  return (
    <li className="group relative flex flex-col items-start h-full">
      <div className="relative flex flex-col justify-between h-full w-full p-4 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
        <div>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
              <Image 
                src={education.logo} 
                alt={`${education.school} logo`} 
                width={42} 
                height={42}
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold">
                {education.major}
              </h3>
            </div>
          </div>
          <p className="relative z-10 mt-2 text-sm text-muted-foreground ml-2">
            {education.school}
          </p>
          <div className="relative z-10 mt-1 ml-2 flex items-center gap-2 text-xs text-muted-foreground">
            <CalendarIcon size={14} weight="duotone" />
            <span>{education.duration}</span>
          </div>
          
          {education.description && (
            <div className="relative z-10 mt-2 ml-2 space-y-1">
              {education.description.map((desc, index) => (
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

function ProgramCard({ program }: { program: ProgramItemType }) {
  const [modalOpen, setModalOpen] = useState(false)

  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  return (
    <>
      <li className="group relative flex flex-col items-start h-full">
        <div className="relative flex flex-col justify-between h-full w-full p-4 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
          <div>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
                <Image 
                  src={program.logo} 
                  alt={`${program.title} logo`} 
                  width={42} 
                  height={42}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold">
                  {program.title}
                </h3>
              </div>
            </div>
            <p className="relative z-10 mt-2 text-sm text-muted-foreground ml-2">
              {program.organization}
            </p>
            <div className="relative z-10 mt-1 ml-2 flex items-center gap-2 text-xs text-muted-foreground">
              <CalendarIcon size={14} weight="duotone" />
              <span>{program.duration}</span>
            </div>
          </div>

          {/* Action buttons - 参考 ProjectCard 的标签位置和样式 */}
          <div className="relative z-10 mt-auto pt-4 ml-1">
            <div className="flex flex-wrap gap-x-2 items-center">
              {program.liveUrl && (
                <div className="flex items-center justify-center space-x-0.5 group">
                  <Link 
                    href={program.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground tracking-tighter hover:text-primary transition-colors"
                  >
                    Visit Website
                  </Link>
                  <ArrowUpRightIcon className="w-3 h-3 text-muted-foreground hover:text-primary transition-colors" />
                </div>
              )}
              
              {program.description && (
                <div className="flex items-center justify-center space-x-0.5 group">
                  <button
                    onClick={handleModalOpen}
                    className="text-xs text-muted-foreground tracking-tighter hover:text-primary transition-colors"
                  >
                    View Details
                  </button>
                  <EyeIcon className="w-3 h-3 text-muted-foreground hover:text-primary transition-colors" />
                </div>
              )}
            </div>
          </div>
        </div>
      </li>

      <ProgramModal 
        isOpen={modalOpen} 
        onClose={handleModalClose} 
        program={program} 
      />
    </>
  )
}

export default function Education() {
  return (
    <div className="space-y-8">
      {/* Education Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <GraduationCapIcon size={20} weight="duotone" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Education</h2>
            {/* <p className="text-sm text-muted-foreground">Academic Background</p> */}
          </div>
        </div>
        
        <ul className="space-y-4">
          {educationList.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </ul>
      </div>

      {/* Programs & Scholarships Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <TrophyIcon size={20} weight="duotone" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Programs & Scholarships</h2>
            {/* <p className="text-sm text-muted-foreground">Academic Programs & Awards</p> */}
          </div>
        </div>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programList.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </ul>
      </div>
    </div>
  )
}