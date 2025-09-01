'use client';

import { useState, useEffect } from 'react';
import { HashIcon } from 'lucide-react';

interface TechIconProps {
  tech: string;
  iconSlug: string | null;
}

export function TechIcon({ tech, iconSlug }: TechIconProps) {
  const [hasError, setHasError] = useState(false);
  const [svgContent, setSvgContent] = useState<string>('');
  
  // Fetch SVG content when component mounts
  useEffect(() => {
    if (iconSlug) {
      fetch(`https://cdn.jsdelivr.net/npm/simple-icons@15.13.0/icons/${iconSlug}.svg`)
        .then(response => {
          if (response.ok) {
            return response.text();
          }
          throw new Error('Failed to fetch icon');
        })
        .then(svg => {
          // Add brand color to the SVG
          const brandColor = getBrandColor(iconSlug);
          // Add fill attribute to the path element
          const modifiedSvg = svg.replace(/<path d="/, `<path fill="${brandColor}" d="`);
          setSvgContent(modifiedSvg);
        })
        .catch(() => setHasError(true));
    }
  }, [iconSlug]);
  
  if (!iconSlug || hasError || !svgContent) {
    return <HashIcon className="w-4 h-4 text-muted-foreground" />;
  }
  
  return (
    <div 
      className="w-5 h-5 flex items-center justify-center"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}

// Get brand color for specific icons
function getBrandColor(iconSlug: string): string {
  const brandColors: Record<string, string> = {
    'react': '#61DAFB',
    'nextdotjs': '#000000',
    'typescript': '#3178C6',
    'tailwindcss': '#06B6D4',
    'javascript': '#F7DF1E',
    'python': '#3776AB',
    'php': '#777BB4',
    'mysql': '#4479A1',
    'html5': '#E34F26',
    'css3': '#1572B6',
    'bootstrap': '#7952B3',
    'vite': '#646CFF',
    'fastapi': '#009688',
    'docker': '#2496ED',
    'jquery': '#0769AD',
    'postman': '#FF6C37',
    'amazonaws': '#FF9900',
    'postgresql': '#336791',
    'expo': '#000020',
    'r': '#276DC3',
    'rstudio': '#75AADB',
    'markdown': '#000000',
    'scrapy': '#339900',
    'resend': '#3ECF8E',
    'sanity': '#F03E2F',
    'vercel': '#000000',
    'sqlalchemy': '#D71F24',
    'serverless': '#FD5750',
    'axios': '#5A29E4',
    'onnx': '#005CED'
  };
  
  return brandColors[iconSlug] || '#6B7280'; // Default gray color
}
