'use client'

import { useEffect } from 'react'
import { name, headline, introduction, email, githubUsername } from '@/config/infoConfig'

export function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": name,
      "jobTitle": headline,
      "description": introduction,
      "url": "https://www.patrickyu.work",
      "sameAs": [
        `https://github.com/${githubUsername}`,
        "https://www.linkedin.com/in/patrick-zhiji-yu"
      ],
      "email": email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sydney",
        "addressCountry": "AU"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "University of Wollongong",
        "url": "https://www.uow.edu.au"
      },
      "knowsAbout": [
        "Software Engineering",
        "Full-Stack Development",
        "React",
        "Next.js",
        "Python",
        "Machine Learning",
        "Web Development",
        "Mobile Development"
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}