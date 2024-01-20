import React from 'react'

function Spinner() {
  return (
    <div class="flex justify-center items-center">
    <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-red-400 via-yellow-400 to-pink-600 ">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
    </div>
</div>
  )
}

export default Spinner