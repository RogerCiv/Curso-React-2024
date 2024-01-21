import React from 'react'
import GridCard from './GridCard'
import GitHubIcon from './Icons/GitHubIcon'
import LinkedInIcon from './Icons/LinkedInIcon'
import TwitterIcon from './Icons/TwitterIcon'
import BootStrapIcon from './Icons/BootStrapIcon'
import CssIcon from './Icons/CssIcon'
import HtmlIcon from './Icons/HtmlIcon'
import JavaIcon from './Icons/JavaIcon'
import MysqlIcon from './Icons/MysqlIcon'
import PhpIcon from './Icons/PhpIcon'
import JavaScriptIcon from './Icons/JavaScriptIcon'
import TailwindIcon from './Icons/TailwindIcon'

function BentoGrid() {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3  max-w-6xl mx-auto p-8 gap-4'>
      <GridCard className={'md:col-span-4 lg:col-span-3 lg:row-span-1 bg-[#171717] border border-[#2C2C2C] shadow-lg rounded-lg p-6 hover:border-red-500 flex-none'} >
        <div className='flex  '>
          <h1>Sobre mi</h1>
          <img className='size-20 rounded-full' src="https://avatars.githubusercontent.com/u/119105968" alt="" />
        </div>
        <div>
          <p>Ey, Soy RogerCiv</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum neque necessitatibus doloremque ipsam facere consequuntur eius molestiae obcaecati, in facilis!</p>
        </div>
        <div className='flex justify-around mt-4'>
          <GitHubIcon className={'size-8'} />
          <LinkedInIcon className={'size-8'} />
          <TwitterIcon className={'size-8'} />
        </div>
      </GridCard>

      <GridCard className={'md:col-span-2 lg:col-span-1 lg:row-span-3 bg-green-200'}>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-light">
            Hi, I'm Roger, a front-end software developer from Spain.
            <br />
            My primary tools of choice includes:
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <TailwindIcon className="size-6" /> Bootstrap
              </li>
              <li className="flex items-center gap-2">
                <CssIcon className="size-6" /> CSS
              </li>
              <li className="flex items-center gap-2">
                <HtmlIcon className="size-6" /> HTML
              </li>
              <li className="flex items-center gap-2">
                <JavaIcon className="size-6" /> Java
              </li>
              <li className="flex items-center gap-2">
                <MysqlIcon className="size-6" /> Mysql
              </li>
              <li className="flex items-center gap-2">
                <PhpIcon className="size-6" /> PHP
              </li>
              <li className="flex items-center gap-2">
                <JavaScriptIcon className="size-6" /> Symfony
              </li>
            </ul>
          </p>
          <p className="text-sm font-light text-pretty">
            I'm a dedicated web development student.My interests span the vibrant realm of Japanese culture, and a fan of video games and board games.
          </p>
          <p className="text-sm font-light text-pretty">
            I prioritize finding the optimal solution, even if it means exploring new tools beyond my usual list. Beyond the work, you can catch me collecting vintage passports, delving into fascinating pieces of history.
          </p>
        </div>
      </GridCard>
      <GridCard className={'md:col-span-1 lg:col-span-2 lg:row-span-2 bg-red-200'}>

      </GridCard>
      <GridCard className={'md:col-span-2 lg:col-span-1 lg:row-span-2 bg-blue-200'}>

      </GridCard>
      <GridCard className={'md:col-span-2 lg:col-span-3 lg:row-span-4 bg-slate-500 p-2'}>
        <div className='flex flex-col justify-center items-center'>
          <h2>Projects</h2>
        </div>
      </GridCard>
      <GridCard className={'md:row-start-2 md:col-start-4 md:row-span-1 lg:col-span-1 lg:row-span-2  bg-green-200'}>
        <div className='flex gap-2'>
          <h2>Now</h2>
          <span class="relative flex h-3 w-3 mt-1">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
        <p>Currently studying 📖 Web Application Development</p>
      </GridCard>
      <GridCard className={'md:row-start-3 md:col-start-4lg:col-span-1 lg:row-span-2 col-start-4 bg-green-200'}>
        <div className='flex gap-2'>
          <h2>Now</h2>
          <span class="relative flex h-3 w-3 mt-1">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
        <p>Currently studying 📖 Web Application Development</p>
      </GridCard>
  
    </div>
  )
}

export default BentoGrid