import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

export default function About() {
  return (
    <div id='about' className='flex flex-col justify-between align-center text-center mt-20'>
      <div className='flex flex-col md:flex-row mt-10'>        
        <div className='md:mr-20 mb-3'>
          <Image className='rounded-full overflow-hidden' src={"pfp.jpg"} alt={"picture"} width={200} height={100} />
        </div>
        <div className='mx-auto md:w-[500px] w-60'>
          <h1 className='text-4xl md:text-5xl mb-12'>Hi, I&apos;m Reece</h1>
          <p className='text-left text-base md:text-lg/loose'>I am a Software Developer with experience in both Frontend and Backend development. I have experience with Frontend technologies such as Next.js and Tailwind CSS, and Backend languages such as Java and Python.</p>
        </div>

      </div>
      <div className='flex flex-row space-x-2'>
        <a href="https://github.com/rCampbell00">  
            <Button className={"rounded-full w-[40px] h-[40px]"}>
              <Image className='w-[20px] h-[20px] max-w-[30px] block dark:hidden' src={"github-mark-white.svg"} width={20} height={20} alt="Github"/>
              <Image className='w-[20px] h-[20px] max-w-[30px] dark:block hidden' src={"github-mark.svg"} width={20} height={20} alt="Github"/>
            </Button>            
        </a>        
        <a href="https://www.linkedin.com/in/reece-campbell0/">  
            <Button className={"bg-[#0a66c2] hover:bg-[#004182] dark:bg-[#0a66c2] dark:hover:bg-[#004182] rounded-full w-[40px] h-[40px]"}>
              <Image className='w-[20px] h-[20px] max-w-[30px]' src={"LI-In-Bug.png"} width={20} height={20} alt="LinkedIn"/>
            </Button>            
        </a>        
        <a href="mailto:reecebell@live.co.uk">  
            <Button variant={"destructive"} className={"rounded-full w-[40px] h-[40px]"}>
              <Image className='w-[20px] h-[20px] max-w-[30px]' src={"email-svg.svg"} width={20} height={20} alt="Mail"/>
            </Button>            
        </a>
      </div>
    </div>
  )
}