import React, { useEffect, useState } from 'react'

const initialState = {
    width: window.innerWidth,
    height: window.innerHeight
}
function ResizeListener() {
    const [windowSize, setWindowSize] = useState(initialState)

    //useEffect
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className='flex flex-col gap-2 justify-center items-center bg-orange-300 h-screen'>
            <h1>ResizeListener</h1>
            <p>El tamaño de la pantalla es: {windowSize.width} <span className='font-bold'> X</span> {windowSize.height} <span className='font-bold'>Y</span> </p>
        </div>
    )
}

export default ResizeListener