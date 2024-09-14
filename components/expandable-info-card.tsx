"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

type ExpandableInfoCardProps = {
  name: string,
  imageSrc: string,
  description: string,
  githubSrc?: string
}

export function ExpandableInfoCard({name, imageSrc, description, githubSrc}: ExpandableInfoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className={`w-full max-w-md mx-auto cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg mb-4 ${isExpanded ? githubSrc ? 'h-[500px] md:h-[480px]' : 'h-[480px] md:h-[440px]' : 'h-[310px]'}`}
          onClick={() => setIsExpanded(!isExpanded)}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {name}
          <ChevronDown className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </CardTitle>
        <CardDescription>Click to learn more</CardDescription>
      </CardHeader>
      <CardContent>
        <img 
            src={`${imageSrc}`}
            alt="Image of project" 
            className="w-full h-48 object-cover rounded-md"
        />
        <div className={`overflow-hidden transition-all duration-200 ease-in-out ${isExpanded ? 'max-h-[500px] md:max-h-96' : 'max-h-0'}`}>
          <p className="mb-4">
            {description}
          </p>
          {/* Icon to Github of code if exists */}
          {githubSrc && 
          <a href={`${githubSrc}`}  onClick={e => {e.stopPropagation()}}>  
            <Button className={"flex flex-row space-x-1"}>
              <p>View Code</p>
              <Image src={"github-mark-white.svg"} className="block dark:hidden" width={20} height={20} alt="View Code"/>
              <Image src={"github-mark.svg"} className="hidden dark:block" width={20} height={20} alt="View Code"/>
            </Button>            
          </a>
          }

        </div>
      </CardContent>
    </Card>
  )
}