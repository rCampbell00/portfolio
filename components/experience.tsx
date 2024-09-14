import React from 'react';
import { ExpandableInfoCard } from './expandable-info-card';

export default function Experience() {
  return (
    <div id='experience' className='flex flex-col justify-between align-center text-center max-w-[1000px] w-full pt-24'>
      <div>
        <h1 className='text-4xl mb-4'>Projects</h1>
        <div className='flex flex-row flex-wrap p-4'>
          <ExpandableInfoCard name={"Portfolio Website"} imageSrc={"portfolio.png"} githubSrc={"https://github.com/rCampbell00/portfolio-website.git"} description={"Portfolio website, made using Next.JS, utilising Tailwind CSS and Shadcn for component design. Employs a set of functional components and has a mobile view."}/>
          <ExpandableInfoCard name={"Storyboard Generation System"} imageSrc={"storyboard.png"} description={"Storyboarding website for potential university students. Created with a team using Agile methodology for our final University project. Includes a frontend interface with a RESTful API with backend code to interpret an input script to generate a potential storyboard."}/>
          <ExpandableInfoCard name={"Hanafuda AI training"} imageSrc={"hanafuda.png"} description={"Recreated the card game Hanafuda using Python and Pygame. An AI employing a Neural Network was then trained against itself in an attempt to teach it how to play."}/>
          <ExpandableInfoCard name={"Baba Is You in Three.JS"} imageSrc={"baba.png"} githubSrc={"https://github.com/rCampbell00/babaThree.git"} description={"Recreated the puzzle game “Baba is You” using HTML, JS, and Three.JS. It has a 3D design, using some simple custom models, and included 3 levels, each with a win condition and ability to undo moves seamlessly."}/>
        </div>
      </div>
    </div>
  )
}