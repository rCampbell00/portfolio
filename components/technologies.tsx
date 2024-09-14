import React from 'react';
import TechCard from './technology-card';

export default function Technologies() {
  return (
    <div id='technologies' className='flex flex-col justify-between align-center text-center max-w-[1000px] w-full pt-24'>
      <div>
        <h1 className='text-3xl md:text-4xl mb-2'>Technologies I know</h1>
        <div className='mb-8 p-2'>
          <h2 className='text-xl md:text-2xl'>Frontend Technologies</h2>
          <div className='grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 md:gap-3'>
            <TechCard techName={"Next.JS"} imageSrc={"next-js.svg"} darkimg={"nextjs-white.svg"}/>
            <TechCard techName={"HTML5"} imageSrc={"html.svg"}/>
            <TechCard techName={"JavaScript"} imageSrc={"javascript.svg"}/>
            <TechCard techName={"TypeScript"} imageSrc={"typescript.svg"}/>
            <TechCard techName={"CSS3"} imageSrc={"CSS.svg"}/>
            <TechCard techName={"React"} imageSrc={"react.svg"}/>
            <TechCard techName={"Tailwind"} imageSrc={"tailwind.svg"}/>
            <TechCard techName={"Bootstrap"} imageSrc={"bootstrap.svg"}/>
          </div>
        </div>
        <div className='p-2'>
          <h2 className='text-2xl'>Backend Technologies</h2>
          <div className='grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 md:gap-3'>
            <TechCard techName={"Python"} imageSrc={"python.svg"}/>
            <TechCard techName={"Java"} imageSrc={"java.svg"}/>
            <TechCard techName={"PyTorch"} imageSrc={"pytorch.png"}/>
            <TechCard techName={"NumPy"} imageSrc={"numpy.svg"}/>
            <TechCard techName={"Flask"} imageSrc={"flask.svg"} darkimg={"flask-white.svg"}/>
          </div>
        </div>
      </div>
    </div>
  )
}