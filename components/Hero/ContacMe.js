import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'
import React from 'react'

const ContactMe = () => {
  return (<div className='mx-8 px-8 relative border-orange border rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6'>
    <h3 className='absolute top-0 py-2 px-6 -mt-5 text-2xl font-bold text-white uppercase bg-orange'>Contact me</h3>
    <ul className='text-center md:text-left'>
      <li className='inline-block md:mr-6 md:p-1'>< FaLinkedin className='text-5xl md:text-6xl' /></li>
      <li className='inline-block md:mr-6 md:p-1'><FaGithub className='text-5xl md:text-6xl' /></li>
      <li className='inline-block md:mr-6 md:p-1'><FaFacebook className='text-5xl md:text-6xl' /></li>
      <li className='inline-block md:p-1'><FaInstagram className='text-5xl md:text-6xl' /></li>
    </ul>
    <span className='mt-4 block'>or drop a line: carlos.daniel2016@hotmail.com</span>
  </div>)
}

export default ContactMe