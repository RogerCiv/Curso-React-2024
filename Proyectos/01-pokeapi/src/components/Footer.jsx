import React from 'react'
import GitHubIcon from './Icons/GitHubIcon'
import LinkedInIcon from './Icons/LinkedInIcon'
import TwitterIcon from './Icons/TwitterIcon'

function Footer() {
  return (
    
    

<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" class="hover:underline">PokeApi</a>. 2 DAW - DWEC
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <GitHubIcon className="size-8 hover:text-yellow-500" />
                  <span class="sr-only">GitHub page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
               <LinkedInIcon className="size-8 hover:text-orange-600/70" />
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <TwitterIcon className="size-8 hover:text-cyan-400" />
                  <span class="sr-only">Twitter page</span>
              </a>
              
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer