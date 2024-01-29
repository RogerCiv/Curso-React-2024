import React from 'react'
import GitHubIcon from '../Icons/GitHubIcon'
import LinkedInIcon from '../Icons/LinkedInIcon'
import TwitterIcon from '../Icons/TwitterIcon'
const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full  bg-white border-t border-gray-200   dark:bg-gray-800 dark:border-gray-600">
    <div className="mx-auto w-full md:max-w-4xl lg:max-w-6xl p-4 py-4">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className=" sm:flex  sm:items-center sm:justify-between ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">2024 <a href="" className="hover:underline">MovieApi</a>. 2 DAW - DWEC
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="https://www.github.com/RogerCiv/" target='_blank' rel='noreferrer' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <GitHubIcon className="size-8 hover:text-yellow-500" />
                  <span className="sr-only">GitHub page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
               <LinkedInIcon className="size-8 hover:text-orange-600/70" />
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <TwitterIcon className="size-8 hover:text-emerald-200" />
                  <span className="sr-only">Twitter page</span>
              </a>
              
          </div>
      </div>
    </div>
</footer>
  )
}

export default Footer