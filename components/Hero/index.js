import React from 'react'
import ContactMe from './ContacMe'

const Hero = () => {
  return (
    <div className='md:grid md:grid-cols-2 md:pt-16 leading-none'>
      <div className='pt-16 md:pt-32'>
        <h1 className='text-4xl uppercase pl-16'>Hi, I'm Carlos Daniel</h1>
        <h2 className='text-4xl font-bold md:text-5xl uppercase pl-16'>Fullstack developer</h2>
        <ContactMe />
      </div>
      <div className='mx-auto'><img className='md:h-4/5' src='/images/me.png' /></div>
    </div>
  )
}

export default Hero